const projectItems = [
  {
    id: 'world-of-words',
    featured: true,
    label: 'Web Product',
    title: 'World of Words',
    blurb:
      'A language-learning website that combines study flows with game-like interaction, review structure, and playful UI decisions.',
    meta: ['Solo Build', 'HTML/CSS/JS'],
    tags: ['Learning UX', 'Game-inspired UI', 'Expandable Structure'],
    visual: 'wow',
    detail: {
      kicker: 'Project / World of Words',
      summary:
        'World of Words is a solo-built language-learning platform where I combine study tools with interaction design inspired by games.',
      sections: [
        {
          heading: 'Overview',
          type: 'paragraph',
          content:
            'I designed the site to make vocabulary practice feel clearer, more engaging, and easier to return to. The structure supports multiple language directions, reusable content, and different quiz or game formats.'
        },
        {
          heading: 'What I handled',
          type: 'list',
          content: [
            'Information structure and study flow design',
            'Interface design and interaction feedback',
            'Front-end implementation and content organization',
            'Planning for expandable mini-game features'
          ]
        },
        {
          heading: 'What matters most here',
          type: 'paragraph',
          content:
            'The core idea is not only teaching words, but making the experience feel active. I care about pacing, clear response, and a sense that each interaction has intention.'
        }
      ],
      links: [
        {
          label: 'Visit live site',
          href: 'https://www.world-of-words.org'
        }
      ]
    }
  },
  {
    id: 'pong-smash',
    featured: false,
    label: 'Prototype',
    title: 'Pong Smash',
    blurb:
      'A Pong variation with a timing-based smash mechanic, clearer rally rhythm, and stronger arcade feedback.',
    meta: ['Gameplay System', 'Python'],
    tags: ['Arcade Feel', 'Moment-to-moment Tension', 'Solo Prototype'],
    visual: 'pong',
    detail: {
      kicker: 'Project / Pong Smash',
      summary:
        'Pong Smash started from a familiar base, then I pushed the interaction so each exchange could feel more dramatic and deliberate.',
      sections: [
        {
          heading: 'Design focus',
          type: 'paragraph',
          content:
            'I wanted a simple competitive game to feel more exciting through timing, impact, and momentum. The smash mechanic changes the pace of a rally and gives the player a more expressive action than a normal return.'
        },
        {
          heading: 'What I explored',
          type: 'list',
          content: [
            'How a single added mechanic can reshape a classic loop',
            'How feedback and speed can create stronger match tension',
            'How small systems can still feel polished and intentional'
          ]
        },
        {
          heading: 'Why it matters',
          type: 'paragraph',
          content:
            'This project reflects how I think as a designer: start from a readable core, then strengthen the feel through focused system changes rather than unnecessary complexity.'
        }
      ],
      links: []
    }
  },
  {
    id: 'space-duel',
    featured: false,
    label: 'Prototype',
    title: 'Space Duel',
    blurb:
      'A compact two-player action game with pickups, temporary buffs, and combat pacing built for quick rivalry.',
    meta: ['2P Action', 'Python'],
    tags: ['Combat Systems', 'Balancing', 'Play Rhythm'],
    visual: 'space',
    detail: {
      kicker: 'Project / Space Duel',
      summary:
        'Space Duel is a small competitive project where I focused on readable action, shifting power moments, and short-form tension between two players.',
      sections: [
        {
          heading: 'Overview',
          type: 'paragraph',
          content:
            'The goal was to create a duel that feels lively even at a small scale. Temporary advantages, pickups, and movement pressure help the match keep changing instead of staying flat.'
        },
        {
          heading: 'What I handled',
          type: 'list',
          content: [
            'Rule planning and player interaction design',
            'Implementation of combat and buff systems',
            'Tuning of pacing, pressure, and readability'
          ]
        },
        {
          heading: 'Design takeaway',
          type: 'paragraph',
          content:
            'I enjoy turning a small ruleset into something that still has variety and drama. This project is one example of that approach.'
        }
      ],
      links: []
    }
  }
];

const aboutItems = [
  {
    id: 'design-focus',
    icon: '✦',
    label: 'Design Focus',
    title: 'Thoughtful interaction',
    blurb:
      'I like interfaces and systems that feel clear, responsive, and quietly playful.',
    chips: ['Clarity', 'Feedback', 'Flow'],
    detail: {
      kicker: 'About / Design Focus',
      summary:
        'I am especially interested in the meeting point between structure and feeling: how a user understands a system, and how that system feels to use.',
      sections: [
        {
          heading: 'What I value',
          type: 'list',
          content: [
            'Clear next actions and readable state changes',
            'Feedback that feels satisfying rather than noisy',
            'Simple systems with enough depth to stay interesting'
          ]
        },
        {
          heading: 'Why this matters to me',
          type: 'paragraph',
          content:
            'Even a very small project can feel memorable when the interaction has rhythm and intention. I care about that feeling a lot.'
        }
      ],
      links: []
    }
  },
  {
    id: 'strengths',
    icon: '◆',
    label: 'Strengths',
    title: 'Game-like thinking',
    blurb:
      'I naturally think in loops, pacing, reward, tension, and user response.',
    chips: ['Systems', 'Pacing', 'Readability'],
    detail: {
      kicker: 'About / Strengths',
      summary:
        'My strengths usually show up when a project needs both structure and feel — especially when interaction design needs to become more alive.',
      sections: [
        {
          heading: 'Core strengths',
          type: 'list',
          content: [
            'Turning rough ideas into workable interaction systems',
            'Thinking about feedback, rhythm, and user motivation',
            'Keeping a project compact but still complete'
          ]
        },
        {
          heading: 'Working style',
          type: 'paragraph',
          content:
            'I tend to look for the smallest set of changes that make a project feel much better. I like focused improvements with a visible effect.'
        }
      ],
      links: []
    }
  },
  {
    id: 'execution',
    icon: '◼',
    label: 'Working Style',
    title: 'Solo execution',
    blurb:
      'I enjoy taking a project from idea to functioning result with a hands-on process.',
    chips: ['Concept', 'UI', 'Implementation'],
    detail: {
      kicker: 'About / Working Style',
      summary:
        'I am comfortable handling idea development, structure, UI direction, and implementation together when the project is small enough to stay coherent.',
      sections: [
        {
          heading: 'How I work',
          type: 'list',
          content: [
            'Start with a strong core idea and a usable structure',
            'Build quickly enough to test how it feels',
            'Refine what improves clarity, delight, or rhythm'
          ]
        },
        {
          heading: 'Why this is useful',
          type: 'paragraph',
          content:
            'This approach helps me keep a project aligned from concept to final interaction, especially for prototypes, portfolio work, and personal products.'
        }
      ],
      links: []
    }
  }
];

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    document.body.classList.toggle('menu-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function getProjectVisual(visual) {
  if (visual === 'wow') {
    return `
      <div class="project-visual visual-wow">
        <div class="mock-window">
          <div class="mock-bar"></div>
          <div class="mock-content language-ui">
            <span class="pill">JA</span>
            <span class="pill">FR</span>
            <span class="pill active">GAME</span>
            <div class="quiz-block"></div>
            <div class="quiz-row"></div>
            <div class="quiz-row short"></div>
          </div>
        </div>
      </div>
    `;
  }

  if (visual === 'pong') {
    return `
      <div class="project-visual visual-pong">
        <div class="arena">
          <div class="paddle left"></div>
          <div class="paddle right"></div>
          <div class="ball"></div>
          <div class="trail"></div>
          <div class="spark"></div>
        </div>
      </div>
    `;
  }

  return `
    <div class="project-visual visual-space">
      <div class="space-panel">
        <div class="ship ship-a"></div>
        <div class="ship ship-b"></div>
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="laser"></div>
      </div>
    </div>
  `;
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projectItems
    .map(
      (item) => `
        <article class="project-card ${item.featured ? 'featured' : ''}" tabindex="0" data-detail-type="project" data-detail-id="${item.id}">
          ${getProjectVisual(item.visual)}
          <div class="project-body">
            <span class="project-label">${item.label}</span>
            <h3>${item.title}</h3>
            <p class="project-copy">${item.blurb}</p>
            <div class="project-meta">
              ${item.meta.map((meta) => `<span>${meta}</span>`).join('')}
            </div>
            <ul class="tag-list">
              ${item.tags.map((tag) => `<li>${tag}</li>`).join('')}
            </ul>
            <div class="card-actions">
              <button class="card-trigger" type="button" data-detail-type="project" data-detail-id="${item.id}">Open Project</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function renderAbout() {
  const grid = document.getElementById('about-grid');
  if (!grid) return;

  grid.innerHTML = aboutItems
    .map(
      (item) => `
        <article class="about-card" tabindex="0" data-detail-type="about" data-detail-id="${item.id}">
          <div class="about-card-top">
            <div>
              <span class="about-label">${item.label}</span>
              <h3>${item.title}</h3>
            </div>
            <div class="about-icon" aria-hidden="true">${item.icon}</div>
          </div>
          <p class="about-copy">${item.blurb}</p>
          <div class="about-chip-row">
            ${item.chips.map((chip) => `<span class="about-chip">${chip}</span>`).join('')}
          </div>
          <div class="card-actions">
            <button class="card-trigger" type="button" data-detail-type="about" data-detail-id="${item.id}">Open About</button>
          </div>
        </article>
      `
    )
    .join('');
}

renderProjects();
renderAbout();

const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));

const detailModal = document.getElementById('detail-modal');
const detailKicker = document.getElementById('detail-kicker');
const detailTitle = document.getElementById('detail-title');
const detailSummary = document.getElementById('detail-summary');
const detailSections = document.getElementById('detail-sections');
const detailLinks = document.getElementById('detail-links');
let lastTrigger = null;

function findDetailItem(type, id) {
  const collection = type === 'project' ? projectItems : aboutItems;
  return collection.find((item) => item.id === id) || null;
}

function renderDetailSections(sections) {
  return sections
    .map((section) => {
      if (section.type === 'list') {
        return `
          <section class="modal-section">
            <h4>${section.heading}</h4>
            <ul>
              ${section.content.map((item) => `<li>${item}</li>`).join('')}
            </ul>
          </section>
        `;
      }

      return `
        <section class="modal-section">
          <h4>${section.heading}</h4>
          <p>${section.content}</p>
        </section>
      `;
    })
    .join('');
}

function renderDetailLinks(links) {
  if (!links.length) return '';

  return links
    .map(
      (link) =>
        `<a class="modal-link" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`
    )
    .join('');
}

function openDetail(type, id, trigger) {
  const item = findDetailItem(type, id);
  if (!item || !detailModal) return;

  lastTrigger = trigger || null;
  detailKicker.textContent = item.detail.kicker;
  detailTitle.textContent = item.title;
  detailSummary.textContent = item.detail.summary;
  detailSections.innerHTML = renderDetailSections(item.detail.sections);
  detailLinks.innerHTML = renderDetailLinks(item.detail.links);
  detailModal.classList.add('is-open');
  detailModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeDetail() {
  if (!detailModal) return;
  detailModal.classList.remove('is-open');
  detailModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');

  if (lastTrigger) {
    lastTrigger.focus();
  }
}

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-detail-type][data-detail-id]');
  if (trigger) {
    openDetail(trigger.dataset.detailType, trigger.dataset.detailId, trigger);
    return;
  }

  if (event.target.closest('[data-close-modal]')) {
    closeDetail();
  }
});

document.addEventListener('keydown', (event) => {
  const cardTrigger = event.target.closest('[data-detail-type][data-detail-id]');

  if ((event.key === 'Enter' || event.key === ' ') && cardTrigger && !detailModal?.classList.contains('is-open')) {
    event.preventDefault();
    openDetail(cardTrigger.dataset.detailType, cardTrigger.dataset.detailId, cardTrigger);
    return;
  }

  if (event.key === 'Escape' && detailModal?.classList.contains('is-open')) {
    closeDetail();
  }
});
