(() => {
  const TILE = 16;
  const CROP = { x0: 76, y0: 52, x1: 96, y1: 86 };
  const WORLD_W = (CROP.x1 - CROP.x0 + 1) * TILE;
  const WORLD_H = (CROP.y1 - CROP.y0 + 1) * TILE;
  const PLAYER_SPEED = 92;
  const LASER_SPEED = 230;
  const LASER_LIFETIME = 1800;
  const LASER_COOLDOWN = 220;

  const statusEl = document.getElementById('light-demo-status');
  const restartBtn = document.getElementById('restart-light-demo');

  function setStatus(message) {
    if (statusEl) statusEl.textContent = message;
  }

  function key(x, y) {
    return `${x},${y}`;
  }

  function parseKey(k) {
    const [x, y] = k.split(',').map(Number);
    return { x, y };
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  class LightVillageScene extends Phaser.Scene {
    constructor() {
      super('lightVillage');
      this.layerSprites = {};
      this.wireSprites = new Map();
      this.flowerSprites = new Map();
      this.wallSet = new Set();
      this.wiresSet = new Set();
      this.flowerSet = new Set();
      this.lampTiles = new Set();
      this.lasers = [];
      this.lastDir = 'up';
      this.lastShotAt = 0;
      this.completed = false;
      this.lampActivated = false;
    }

    preload() {
      this.load.spritesheet('lightTiles', 'triends-light-assets/maps/light-village/spritesheet.png', {
        frameWidth: TILE,
        frameHeight: TILE
      });
      this.load.json('lightVillageMap', 'triends-light-assets/maps/light-village/map.json');
      this.load.spritesheet('lightPlayer', 'triends-light-assets/characters/ginseng_walking.png', {
        frameWidth: 48,
        frameHeight: 48
      });
      this.load.spritesheet('lightLaser', 'triends-light-assets/gimmicks/sunflower_laser.png', {
        frameWidth: 64,
        frameHeight: 64
      });
    }

    create() {
      this.layerSprites = {};
      this.wireSprites = new Map();
      this.flowerSprites = new Map();
      this.wallSet = new Set();
      this.wiresSet = new Set();
      this.flowerSet = new Set();
      this.lampTiles = new Set();
      this.lasers = [];
      this.lastDir = 'up';
      this.lastShotAt = 0;
      this.completed = false;
      this.lampActivated = false;

      this.cameras.main.setRoundPixels(true);
      this.createAnimations();
      this.createSceneState();
      this.createInput();
      this.createPlayer();
      setStatus('Move close to the lamp and fire light into it.');
    }

    createSceneState() {
      const map = this.cache.json.get('lightVillageMap');
      const layers = map.layers || [];
      const drawOrder = ['background', 'walls', 'wires', 'lamps_off', 'lamps_on', 'flowers_off'];
      const depths = {
        background: 0,
        walls: 5,
        wires: 10,
        lamps_off: 12,
        lamps_on: 13,
        flowers_off: 14
      };

      for (const layerName of drawOrder) {
        const layer = layers.find((item) => item.name === layerName);
        if (!layer) continue;

        const sprites = [];
        const visible = layerName !== 'lamps_on';

        for (const tile of layer.tiles || []) {
          const tx = Number(tile.x);
          const ty = Number(tile.y);
          if (tx < CROP.x0 || tx > CROP.x1 || ty < CROP.y0 || ty > CROP.y1) continue;

          const localX = (tx - CROP.x0) * TILE;
          const localY = (ty - CROP.y0) * TILE;
          const sprite = this.add.image(localX, localY, 'lightTiles', Number(tile.id)).setOrigin(0, 0);
          sprite.setDepth(depths[layerName] ?? 0);
          sprite.setVisible(visible);
          sprites.push(sprite);

          const tileKey = key(tx, ty);
          if (layerName === 'walls') this.wallSet.add(tileKey);
          if (layerName === 'wires') this.wireSprites.set(tileKey, sprite);
          if (layerName === 'wires') this.wiresSet.add(tileKey);
          if (layerName === 'flowers_off') {
            this.flowerSprites.set(tileKey, sprite);
            this.flowerSet.add(tileKey);
          }
          if (layerName === 'lamps_off') this.lampTiles.add(tileKey);
        }

        this.layerSprites[layerName] = sprites;
      }

      this.buildLampData();
      this.buildFlowerGroups();

      const frame = this.add.rectangle(WORLD_W / 2, WORLD_H / 2, WORLD_W - 2, WORLD_H - 2);
      frame.setStrokeStyle(2, 0xf1d1a0, 0.22);
      frame.setFillStyle(0x000000, 0);
      frame.setDepth(40);
    }

    createInput() {
      this.cursors = this.input.keyboard.createCursorKeys();
      this.keys = this.input.keyboard.addKeys('W,A,S,D,SPACE,R');

      this.input.keyboard.on('keydown-R', () => {
        this.scene.restart();
      });
    }

    createAnimations() {
      const anims = this.anims;
      const ensure = (name, start, end) => {
        if (!anims.exists(name)) {
          anims.create({
            key: name,
            frames: anims.generateFrameNumbers('lightPlayer', { start, end }),
            frameRate: 8,
            repeat: -1
          });
        }
      };

      ensure('light-walk-down', 0, 3);
      ensure('light-walk-left', 4, 7);
      ensure('light-walk-right', 8, 11);
      ensure('light-walk-up', 12, 15);
    }

    createPlayer() {
      const spawn = this.findSpawnPoint();
      this.player = this.add.sprite(spawn.x, spawn.y, 'lightPlayer', 12);
      this.player.setOrigin(0.5, 1);
      this.player.setDepth(20);
      this.player.setScale(1);
      this.lastDir = 'up';
    }

    findSpawnPoint() {
      const candidates = [
        { x: 80, y: 84 },
        { x: 79, y: 84 },
        { x: 81, y: 84 },
        { x: 80, y: 83 },
        { x: 79, y: 83 },
        { x: 78, y: 84 }
      ];

      for (const point of candidates) {
        const px = (point.x - CROP.x0 + 0.5) * TILE;
        const py = (point.y - CROP.y0 + 1) * TILE;
        if (this.canMoveTo(px, py)) return { x: px, y: py };
      }

      return { x: TILE * 4, y: WORLD_H - TILE * 2 };
    }

    buildLampData() {
      const coords = Array.from(this.lampTiles).map(parseKey);
      const xs = coords.map((item) => item.x);
      const ys = coords.map((item) => item.y);
      this.lampBBox = {
        minX: Math.min(...xs),
        maxX: Math.max(...xs),
        minY: Math.min(...ys),
        maxY: Math.max(...ys)
      };

      this.lampRect = new Phaser.Geom.Rectangle(
        (this.lampBBox.minX - CROP.x0) * TILE,
        (this.lampBBox.minY - CROP.y0) * TILE,
        (this.lampBBox.maxX - this.lampBBox.minX + 1) * TILE,
        (this.lampBBox.maxY - this.lampBBox.minY + 1) * TILE
      );

      const queue = [];
      const visited = new Set();
      this.wireDistances = new Map();
      const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];

      for (const tileKey of this.lampTiles) {
        const { x, y } = parseKey(tileKey);
        for (const [dx, dy] of directions) {
          const nextKey = key(x + dx, y + dy);
          if (this.wiresSet.has(nextKey) && !visited.has(nextKey)) {
            visited.add(nextKey);
            this.wireDistances.set(nextKey, 0);
            queue.push(nextKey);
          }
        }
      }

      while (queue.length) {
        const current = queue.shift();
        const { x, y } = parseKey(current);
        const distance = this.wireDistances.get(current) ?? 0;

        for (const [dx, dy] of directions) {
          const nextKey = key(x + dx, y + dy);
          if (!this.wiresSet.has(nextKey) || visited.has(nextKey)) continue;
          visited.add(nextKey);
          this.wireDistances.set(nextKey, distance + 1);
          queue.push(nextKey);
        }
      }
    }

    buildFlowerGroups() {
      this.flowerGroups = [];
      const remaining = new Set(this.flowerSet);
      const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];

      while (remaining.size) {
        const first = remaining.values().next().value;
        const queue = [first];
        const group = [];
        remaining.delete(first);

        while (queue.length) {
          const current = queue.shift();
          group.push(current);
          const { x, y } = parseKey(current);
          for (const [dx, dy] of directions) {
            const nextKey = key(x + dx, y + dy);
            if (remaining.has(nextKey)) {
              remaining.delete(nextKey);
              queue.push(nextKey);
            }
          }
        }

        const connected = group.some((tileKey) => {
          const { x, y } = parseKey(tileKey);
          return directions.some(([dx, dy]) => this.wireDistances.has(key(x + dx, y + dy)));
        });

        this.flowerGroups.push({ tiles: group, connected });
      }
    }

    update(time, delta) {
      const dt = delta / 1000;
      this.updatePlayer(dt);
      this.updateLasers(dt);

      if (Phaser.Input.Keyboard.JustDown(this.keys.SPACE) && time - this.lastShotAt > LASER_COOLDOWN) {
        this.lastShotAt = time;
        this.fireLaser();
      }
    }

    updatePlayer(dt) {
      const left = this.cursors.left.isDown || this.keys.A.isDown;
      const right = this.cursors.right.isDown || this.keys.D.isDown;
      const up = this.cursors.up.isDown || this.keys.W.isDown;
      const down = this.cursors.down.isDown || this.keys.S.isDown;

      let vx = 0;
      let vy = 0;

      if (left) vx -= 1;
      if (right) vx += 1;
      if (up) vy -= 1;
      if (down) vy += 1;

      const moving = vx !== 0 || vy !== 0;
      if (moving) {
        const length = Math.hypot(vx, vy) || 1;
        vx = (vx / length) * PLAYER_SPEED;
        vy = (vy / length) * PLAYER_SPEED;

        const candidateX = clamp(this.player.x + vx * dt, 12, WORLD_W - 12);
        const candidateY = clamp(this.player.y + vy * dt, 20, WORLD_H - 2);

        if (this.canMoveTo(candidateX, this.player.y)) this.player.x = candidateX;
        if (this.canMoveTo(this.player.x, candidateY)) this.player.y = candidateY;

        if (Math.abs(vx) > Math.abs(vy)) {
          this.lastDir = vx < 0 ? 'left' : 'right';
        } else {
          this.lastDir = vy < 0 ? 'up' : 'down';
        }

        this.player.anims.play(`light-walk-${this.lastDir}`, true);
      } else {
        this.player.anims.stop();
        const idleFrames = { down: 0, left: 4, right: 8, up: 12 };
        this.player.setFrame(idleFrames[this.lastDir]);
      }
    }

    canMoveTo(x, y) {
      const probes = [
        { x: x - 6, y: y - 4 },
        { x, y: y - 4 },
        { x: x + 6, y: y - 4 },
        { x, y: y - 14 }
      ];

      return probes.every((point) => !this.isWallAt(point.x, point.y));
    }

    isWallAt(worldX, worldY) {
      if (worldX < 0 || worldX >= WORLD_W || worldY < 0 || worldY >= WORLD_H) return true;
      const tileX = Math.floor(worldX / TILE) + CROP.x0;
      const tileY = Math.floor(worldY / TILE) + CROP.y0;
      return this.wallSet.has(key(tileX, tileY));
    }

    fireLaser() {
      const frameByDir = { down: 0, left: 1, right: 2, up: 3 };
      const velocityByDir = {
        down: { x: 0, y: LASER_SPEED },
        left: { x: -LASER_SPEED, y: 0 },
        right: { x: LASER_SPEED, y: 0 },
        up: { x: 0, y: -LASER_SPEED }
      };
      const offsetByDir = {
        down: { x: 0, y: -18 },
        left: { x: -14, y: -18 },
        right: { x: 14, y: -18 },
        up: { x: 0, y: -28 }
      };

      const velocity = velocityByDir[this.lastDir];
      const offset = offsetByDir[this.lastDir];
      const laser = this.add.image(this.player.x + offset.x, this.player.y + offset.y, 'lightLaser', frameByDir[this.lastDir]);
      laser.setDepth(25);
      laser.setScale(1);

      this.lasers.push({
        sprite: laser,
        vx: velocity.x,
        vy: velocity.y,
        age: 0
      });
    }

    updateLasers(dt) {
      this.lasers = this.lasers.filter((laser) => {
        laser.age += dt * 1000;
        laser.sprite.x += laser.vx * dt;
        laser.sprite.y += laser.vy * dt;

        const outside = laser.sprite.x < -40 || laser.sprite.x > WORLD_W + 40 || laser.sprite.y < -40 || laser.sprite.y > WORLD_H + 40;
        if (outside || laser.age > LASER_LIFETIME || this.isWallAt(laser.sprite.x, laser.sprite.y)) {
          laser.sprite.destroy();
          return false;
        }

        if (!this.lampActivated && Phaser.Geom.Rectangle.Contains(this.lampRect, laser.sprite.x, laser.sprite.y)) {
          laser.sprite.destroy();
          this.activateLamp();
          return false;
        }

        return true;
      });
    }

    activateLamp() {
      if (this.lampActivated) return;
      this.lampActivated = true;

      (this.layerSprites.lamps_off || []).forEach((sprite) => sprite.setVisible(false));
      (this.layerSprites.lamps_on || []).forEach((sprite) => {
        sprite.setVisible(true);
        sprite.setTint(0xffe3a1);
      });

      const pulse = this.add.rectangle(this.lampRect.centerX, this.lampRect.centerY, this.lampRect.width + 10, this.lampRect.height + 10, 0xffdd88, 0.2);
      pulse.setDepth(18);
      this.tweens.add({
        targets: pulse,
        alpha: 0,
        scaleX: 1.2,
        scaleY: 1.2,
        duration: 320,
        ease: 'Quad.Out',
        onComplete: () => pulse.destroy()
      });

      setStatus('The lamp is on. Light is moving through the wire...');
      this.propagateLight();
    }

    propagateLight() {
      const entries = Array.from(this.wireDistances.entries()).sort((a, b) => a[1] - b[1]);
      let finalDelay = 0;

      for (const [tileKey, distance] of entries) {
        const delay = distance * 55;
        finalDelay = Math.max(finalDelay, delay);
        this.time.delayedCall(delay, () => this.lightWire(tileKey));
      }

      this.time.delayedCall(finalDelay + 260, () => this.triggerFlowers());
    }

    lightWire(tileKey) {
      const sprite = this.wireSprites.get(tileKey);
      if (!sprite) return;

      sprite.setTint(0xffe59b);
      const glow = this.add.rectangle(sprite.x + TILE / 2, sprite.y + TILE / 2, 10, 10, 0xfff0b8, 0.65);
      glow.setDepth(19);
      glow.setBlendMode(Phaser.BlendModes.ADD);
      this.tweens.add({
        targets: glow,
        alpha: 0,
        scaleX: 1.8,
        scaleY: 1.8,
        duration: 220,
        ease: 'Quad.Out',
        onComplete: () => glow.destroy()
      });
    }

    triggerFlowers() {
      const activeGroups = this.flowerGroups.filter((group) => group.connected);
      if (!activeGroups.length) {
        this.finishDemo();
        return;
      }

      setStatus('The flower reacts to the light and disappears.');
      let longest = 0;
      activeGroups.forEach((group, index) => {
        const delay = index * 160;
        longest = delay;
        this.time.delayedCall(delay, () => this.clearFlowerGroup(group.tiles));
      });

      this.time.delayedCall(longest + 720, () => this.finishDemo());
    }

    clearFlowerGroup(tileKeys) {
      const sprites = tileKeys
        .map((tileKey) => this.flowerSprites.get(tileKey))
        .filter(Boolean);

      if (!sprites.length) return;

      this.tweens.add({
        targets: sprites,
        alpha: 0.15,
        yoyo: true,
        repeat: 3,
        duration: 90,
        onComplete: () => {
          sprites.forEach((sprite) => {
            this.flowerSprites.forEach((value, storedKey) => {
              if (value === sprite) this.flowerSprites.delete(storedKey);
            });
            sprite.destroy();
          });
        }
      });
    }

    finishDemo() {
      if (this.completed) return;
      this.completed = true;
      setStatus('Puzzle cleared. Press R or the restart button to try it again.');
    }
  }

  const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent: 'triends-light-game',
    width: WORLD_W,
    height: WORLD_H,
    pixelArt: true,
    roundPixels: true,
    backgroundColor: '#09111e',
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [LightVillageScene]
  });

  window.__triendsLightGame = game;

  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      const scene = game.scene.keys.lightVillage;
      if (scene) scene.scene.restart();
    });
  }
})();
