/*
  ============================
  EASY CONTENT EDITING GUIDE
  ============================
  1) Add or remove project cards in portfolioData.projects.
  2) Update the About Me page in portfolioData.about.
  3) Main page cards and detail pages are rendered from the same data.
  4) Each project opens its own HTML file, such as world-of-words.html.
*/

const portfolioData = {
  projects: [
    {
      id: 'world-of-words',
      page: 'world-of-words.html',
      label: 'Language Learning Platform',
      title: 'World of Words',
      blurb:
        'A vocabulary-learning platform that turns early language study into structured quizzes and playful mini-games.',
      caption:
        'Planned, designed, and developed solo—from content logic and interface flow to interaction design and game rules.',
      meta: ['Quiz System', 'Game UX', 'Solo Build'],
      tags: ['Language Learning', 'Content Logic', 'Frontend Development'],
      detail: {
        kicker: 'Case Study',
        subtitle: 'A beginner-friendly vocabulary platform designed to make word study feel less repetitive and more alive.',
        summary:
          'World of Words is a language-learning site for beginners who want vocabulary study to feel more interactive, less mechanical, and easier to return to. It supports early-stage learners with quizzes and mini-games built around vocabulary up to roughly A2 level across Japanese, French, and Spanish.',
        overview: [
          'The project began with a frustration I felt while studying languages: many vocabulary tools still feel like digital word lists. They repeat the same fixed questions, rely on flat meaning pairs, and often recreate the experience of staring at a textbook rather than using a real interactive product.',
          'I approached World of Words as a system design problem. Instead of presenting static content, I built a structure that can generate questions from word sets, choose more natural language pairings, and turn vocabulary review into something clearer, more responsive, and more enjoyable.'
        ],
        media: [
          {
            src: 'worldofwordsmain.png',
            alt: 'World of Words quiz setup page with language selection and quiz settings.',
            title: 'Quiz Setup Flow',
            caption:
              'The main screen is kept simple and readable so beginners can start quickly without feeling overwhelmed.'
          },
          {
            src: 'worldofwordsfrench.png',
            alt: 'French quiz question screen showing multiple-choice answers and immediate feedback.',
            title: 'Clear Question UI',
            caption:
              'Question screens focus on legibility, immediate response, and a steady study rhythm rather than visual clutter.'
          },
          {
            src: 'worldofwordsresult.png',
            alt: 'Quiz result screen listing the score and incorrectly answered vocabulary.',
            title: 'Review-Friendly Results',
            caption:
              'Results are not just an ending screen—they are part of the learning loop, making weak words easy to revisit.'
          },
          {
            src: 'worldofwordsmobilequiz.jpg',
            alt: 'World of Words Japanese vocabulary quiz displayed on a mobile screen in portrait orientation.',
            title: 'Mobile Quiz Experience',
            orientation: 'portrait',
            caption:
              'Since vocabulary review often happens in short spare moments while moving, the quiz flow was designed to stay readable, tappable, and comfortable on mobile screens as well.'
          },
          {
            src: 'worldofwordsgamemain.png',
            alt: 'World of Words game mode main screen with language selection buttons.',
            title: 'Game Mode Entry',
            caption:
              'The game section carries a stronger visual identity while staying connected to the learning purpose of the product.'
          },
          {
            src: 'worldofwordsgamejapanese.png',
            alt: 'Japanese vocabulary game screen with floating word cards and matching answers.',
            title: 'Meaning Matching in Motion',
            caption:
              'Rather than testing typing speed, the game mode focuses on recognition, attention, and word–meaning connection.'
          },
          {
            src: 'worldofwordsgamespanish.png',
            alt: 'Spanish vocabulary game screen with floating definition cards and answer choices.',
            title: 'Playable Study',
            caption:
              'The mini-game format adds energy and personality, helping repetition feel more like play than routine drill.'
          },
          {
            src: 'worldofwordsmobilegame.jpg',
            alt: 'World of Words Acid Rain mini-game displayed on a mobile screen in portrait orientation.',
            title: 'Mobile-Friendly Game Mode',
            orientation: 'portrait',
            caption:
              'The mini-game layouts were also adjusted for vertical mobile play so users can enjoy a quick session during small gaps in the day without losing clarity or control.'
          }
        ],
        sections: [
          {
            heading: 'Core goals',
            type: 'list',
            content: [
              'Make vocabulary study feel active instead of passive',
              'Support beginners with a low-friction, readable interface',
              'Make both quiz and game flows work comfortably on mobile for short study sessions on the go',
              'Cover useful vocabulary up to roughly A2 level through quizzes and mini-games',
              'Build a structure that can expand with more words, modes, and progression later'
            ]
          },
          {
            heading: 'Problems I wanted to solve',
            type: 'paragraph',
            content:
              'Traditional word practice often repeats the same quiz order, presents vocabulary as a flat list of meanings, and creates awkward translations when linguistically distant languages are forced into one direct pairing. That makes the experience feel mechanical and, at times, unnatural.'
          },
          {
            heading: 'Design responses',
            type: 'list',
            content: [
              'Questions are generated randomly from vocabulary sets instead of repeating one fixed sheet',
              'For Japanese, the system can generate items in a JLPT-style format so the experience feels closer to real exam exposure',
              'Language directions are grouped more naturally: Korean–Japanese, English–French, and English–Spanish',
              'Immediate feedback, score screens, and error review help learners keep momentum and return to weak words'
            ]
          },
          {
            heading: 'Designed for quick mobile use',
            type: 'paragraph',
            content:
              'I expected many learners to use this kind of vocabulary quiz in short bursts—while commuting, waiting, or filling a small gap in the day. Because of that, I made sure the experience also works well on mobile. Visual hierarchy, button size, readability, and feedback were all designed so the product still feels clear and comfortable on smaller screens, not just on desktop.'
          },
          {
            heading: 'What makes it fun',
            type: 'paragraph',
            content:
              'I wanted the product to feel useful, but not dry. Small character elements—such as Nihongorae—add warmth and memorability, while the overall interface stays controlled enough to remain a practical study tool rather than becoming a distraction.'
          },
          {
            heading: 'Game design thinking',
            type: 'list',
            content: [
              'Inspired by typing games, but redesigned around meaning recognition rather than keyboard speed',
              'Explored how word–meaning matching could become a real game interaction instead of a static exercise',
              'Switched from direct typing to dragging or clicking for smoother play and lower fatigue',
              'Kept the challenge centered on comprehension, speed of recognition, and attention'
            ]
          },
          {
            heading: 'Solo development process',
            type: 'paragraph',
            content:
              'I handled planning, design, development, and content structure myself. I also used AI tools during production, but in practice my role was the conductor: defining the system, reviewing output, catching contextual issues AI missed, and solving bugs through my own research in documentation, online resources, and books.'
          },
          {
            heading: 'Why this project matters to me',
            type: 'paragraph',
            content:
              'I built this during my mandatory military service in a limited environment and largely on my own. Because of that, the project means more to me than a single website. It became proof that I can create under constraints, teach myself what I do not know yet, and keep pushing until an idea becomes something real.'
          }
        ],
        sidebar: {
          role: 'Planning, UX/UI Design, Frontend Development, Content System Design',
          stack: ['HTML', 'CSS', 'JavaScript', 'Quiz Generation', 'Game Interaction', 'Solo Production'],
          notes: [
            'Designed, written, and iterated entirely as a solo project',
            'Built for beginner learners studying vocabulary up to roughly A2 level',
            'Combines quiz flow, randomized content logic, and playful mini-game interaction',
            'Shows how I work under constraints: structured, persistent, and hands-on'
          ]
        },
        links: [
          {
            label: 'Visit Live Site',
            href: 'https://www.world-of-words.org'
          }
        ]
      }
    },
    {
      id: 'arcade-games',
      page: 'arcade-games.html',
      label: 'Game Prototype Set',
      title: 'Arcade Games',
      blurb:
        'A combined showcase of fast, readable prototypes built around tension, timing, and satisfying feedback.',
      caption:
        'This page brings together Pong Smash and Space Duel under one arcade-focused project group.',
      meta: ['Gameplay Systems', 'Prototype Design', 'Solo Development'],
      tags: ['Arcade Feel', 'Pacing', 'Competitive Interaction'],
      detail: {
        kicker: 'Project',
        subtitle: 'Small-scale game prototypes built to explore feel, pacing, and competitive energy.',
        summary:
          'Arcade Games is a grouped project page for my action-focused prototypes. Each game starts from a simple loop, then pushes that loop through timing, pressure, and stronger player feedback.',
        overview: [
          'I enjoy building compact systems that still feel expressive. These projects focus less on size and more on how a short interaction can become memorable.',
          'Both prototypes helped me think more carefully about pace, readability, and how one added mechanic can reshape the whole experience.'
        ],
        sections: [
          {
            heading: 'Ping-Pong Smash',
            type: 'paragraph',
            content:
              'Pong Smash reworks a familiar base game by adding a timing-based smash action. The goal was to turn a simple rally into something with stronger momentum shifts, sharper impact, and more dramatic exchanges.'
          },
          {
            heading: 'Space Duel',
            type: 'paragraph',
            content:
              'Space Duel is a compact two-player action prototype built around pressure, buffs, and quick power swings. I focused on keeping the combat readable while making each round feel active and unstable in a good way.'
          },
          {
            heading: 'Shared design themes',
            type: 'list',
            content: [
              'Readable systems with a stronger sense of impact',
              'Short play loops that still create tension and variation',
              'Careful attention to rhythm, feedback, and player response',
              'Solo prototyping from concept to implementation'
            ]
          }
        ],
        sidebar: {
          role: 'Game Designer / Prototype Builder',
          stack: ['Python', 'Gameplay Logic', 'Balancing'],
          notes: [
            'Includes Pong Smash and Space Duel',
            'Focused on gameplay feel and interaction tuning',
            'Represents my interest in compact but expressive systems'
          ]
        },
        links: []
      }
    }
  ],
  about: {
    title: 'About Me',
    kicker: 'About Me',
    subtitle: 'A student designer building interactive work through structure, play, and iteration.',
    intro:
      'I am interested in projects that feel clear to use and enjoyable to explore. I especially like interactive web experiences, small game systems, and digital ideas that become stronger through good feedback and pacing.',
    previewCards: [
      {
        label: 'Strengths',
        title: 'How I think',
        copy: 'I naturally focus on clarity, rhythm, feedback, and the small decisions that make interaction feel better.',
        points: ['Systems thinking', 'Readable UX', 'Playful interaction']
      },
      {
        label: 'Experience',
        title: 'How I build',
        copy: 'I like taking a project from idea to implementation and improving it through repeated testing and revision.',
        points: ['Solo projects', 'Prototyping', 'Frontend building']
      },
      {
        label: 'Personal',
        title: 'What interests me',
        copy: 'I enjoy games, learning-focused products, and small experiments that mix function with delight.',
        points: ['Game feel', 'Learning tools', 'Creative side projects']
      }
    ],
    sections: [
      {
        heading: 'Strengths',
        type: 'list',
        content: [
          'Turning ideas into structured, usable experiences',
          'Thinking carefully about pacing, feedback, and readability',
          'Improving a project through focused iteration instead of unnecessary complexity',
          'Balancing design thinking with hands-on implementation'
        ]
      },
      {
        heading: 'Personal Experience',
        type: 'paragraph',
        content:
          'Most of my experience comes from building personal projects and learning by making. I enjoy exploring a project from concept to working result, especially when the process includes both design decisions and practical problem-solving.'
      },
      {
        heading: 'Interests and Notes',
        type: 'paragraph',
        content:
          'Beyond portfolio work itself, I am drawn to games, playful interfaces, learning tools, and small ideas that can grow into something memorable. I also like keeping room for personality in a project, so it feels human rather than generic.'
      }
    ],
    sideNotes: [
      'This page is intentionally easy to expand later with awards, education, tools, or timeline sections.',
      'You can replace the text here with more personal details whenever you are ready.',
      'The structure is meant to stay simple while remaining flexible.'
    ]
  }
};

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

function renderListItems(items) {
  return items.map((item) => `<li>${item}</li>`).join('');
}

function renderLinks(links) {
  if (!links || !links.length) {
    return '<p class="note-text">Project links can be added here later.</p>';
  }

  return `
    <div class="link-row">
      ${links.map((link) => `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`).join('')}
    </div>
  `;
}

function renderProjectMedia(media) {
  if (!media || !media.length) {
    return '';
  }

  return `
    <section class="detail-block">
      <h2>Selected Screens</h2>
      <div class="media-grid">
        ${media
          .map(
            (item) => `
              <figure class="media-card${item.orientation === 'portrait' ? ' is-portrait' : ''}">
                <img src="${item.src}" alt="${item.alt}" loading="lazy" />
                <figcaption class="media-copy">
                  <h4>${item.title}</h4>
                  <p>${item.caption}</p>
                </figcaption>
              </figure>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderHomeProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = portfolioData.projects
    .map(
      (project) => `
        <a class="project-card reveal" href="${project.page}">
          <div class="card-top">
            <div>
              <span class="card-label">${project.label}</span>
              <h3>${project.title}</h3>
            </div>
            <span class="card-arrow" aria-hidden="true">↗</span>
          </div>
          <p class="project-copy">${project.blurb}</p>
          <p class="project-caption">${project.caption}</p>
          <div class="project-meta">
            ${project.meta.map((item) => `<span>${item}</span>`).join('')}
          </div>
          <div class="project-tags">
            ${project.tags.map((item) => `<span>${item}</span>`).join('')}
          </div>
        </a>
      `
    )
    .join('');
}

function renderAboutPreview() {
  const preview = document.getElementById('about-preview');
  if (!preview) return;

  preview.innerHTML = portfolioData.about.previewCards
    .map(
      (item) => `
        <article class="preview-card reveal">
          <span class="preview-label">${item.label}</span>
          <h3>${item.title}</h3>
          <p class="preview-copy">${item.copy}</p>
          <div class="preview-points">
            ${item.points.map((point) => `<span class="section-chip">${point}</span>`).join('')}
          </div>
        </article>
      `
    )
    .join('');
}

function getProjectById(projectId) {
  return portfolioData.projects.find((project) => project.id === projectId) || null;
}

function renderProjectDetail() {
  const root = document.getElementById('project-detail-root');
  if (!root) return;

  const projectId = document.body.dataset.projectId || root.dataset.projectId || new URLSearchParams(window.location.search).get('project');
  const project = getProjectById(projectId);

  if (!project) {
    root.innerHTML = `
      <section class="empty-state">
        <a class="back-link" href="index.html#projects">← Back to Projects</a>
        <h2>Project not found</h2>
        <p class="note-text">This link does not match any current project page.</p>
      </section>
    `;
    return;
  }

  document.title = `${project.title} — Jimin`;

  root.innerHTML = `
    <section class="detail-page">
      <a class="back-link" href="index.html#projects">← Back to Projects</a>

      <header class="detail-hero">
        <span class="detail-kicker">${project.detail.kicker}</span>
        <h1>${project.title}</h1>
        <p class="detail-subtitle">${project.detail.subtitle}</p>
        <p class="detail-summary">${project.detail.summary}</p>
        <div class="detail-tags">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join('')}
        </div>
        <div class="detail-actions">
          <a class="btn btn-secondary" href="index.html#projects">Back to Projects</a>
          ${project.detail.links?.length ? `<a class="btn btn-primary" href="${project.detail.links[0].href}" target="_blank" rel="noreferrer">${project.detail.links[0].label}</a>` : ''}
          <a class="btn btn-secondary" href="about.html">About Me</a>
        </div>
      </header>

      <div class="detail-layout">
        <div class="detail-content">
          <section class="detail-block">
            <h2>Overview</h2>
            ${project.detail.overview.map((paragraph) => `<p>${paragraph}</p>`).join('')}
          </section>

          ${renderProjectMedia(project.detail.media)}

          ${project.detail.sections
            .map((section) => {
              if (section.type === 'list') {
                return `
                  <section class="detail-block">
                    <h3>${section.heading}</h3>
                    <ul>${renderListItems(section.content)}</ul>
                  </section>
                `;
              }

              return `
                <section class="detail-block">
                  <h3>${section.heading}</h3>
                  <p>${section.content}</p>
                </section>
              `;
            })
            .join('')}
        </div>

        <aside class="info-stack">
          <section class="info-panel">
            <h3>Role</h3>
            <p class="note-text">${project.detail.sidebar.role}</p>
          </section>

          <section class="info-panel">
            <h3>Tools / Focus</h3>
            <div class="project-meta">
              ${project.detail.sidebar.stack.map((item) => `<span>${item}</span>`).join('')}
            </div>
          </section>

          <section class="info-panel">
            <h3>Notes</h3>
            <ul>${renderListItems(project.detail.sidebar.notes)}</ul>
          </section>

          <section class="info-panel">
            <h3>Links</h3>
            ${renderLinks(project.detail.links)}
          </section>
        </aside>
      </div>
    </section>
  `;
}

function renderAboutDetail() {
  const root = document.getElementById('about-detail-root');
  if (!root) return;

  const about = portfolioData.about;
  document.title = `${about.title} — Jimin`;

  root.innerHTML = `
    <section class="detail-page">
      <a class="back-link" href="index.html#about">← Back to Home</a>

      <header class="detail-hero">
        <span class="detail-kicker">${about.kicker}</span>
        <h1>${about.title}</h1>
        <p class="detail-subtitle">${about.subtitle}</p>
        <p class="detail-summary">${about.intro}</p>
        <div class="detail-actions">
          <a class="btn btn-secondary" href="index.html">Back to Home</a>
          <a class="btn btn-primary" href="index.html#projects">See Projects</a>
        </div>
      </header>

      <div class="detail-layout">
        <div class="detail-content">
          ${about.sections
            .map((section) => {
              if (section.type === 'list') {
                return `
                  <section class="detail-block">
                    <h2>${section.heading}</h2>
                    <ul>${renderListItems(section.content)}</ul>
                  </section>
                `;
              }

              return `
                <section class="detail-block">
                  <h2>${section.heading}</h2>
                  <p>${section.content}</p>
                </section>
              `;
            })
            .join('')}
        </div>

        <aside class="info-stack">
          <section class="info-panel">
            <h3>Quick Keywords</h3>
            <div class="project-meta">
              <span>Interactive Design</span>
              <span>Game Thinking</span>
              <span>Solo Projects</span>
              <span>Iteration</span>
            </div>
          </section>

          <section class="info-panel">
            <h3>Notes for Future Editing</h3>
            <ul>${renderListItems(about.sideNotes)}</ul>
          </section>
        </aside>
      </div>
    </section>
  `;
}

function initReveal() {
  const revealItems = document.querySelectorAll('.reveal');
  if (!revealItems.length || typeof IntersectionObserver === 'undefined') {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

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
}

const pageType = document.body.dataset.page;

if (pageType === 'home') {
  renderHomeProjects();
  renderAboutPreview();
}

if (pageType === 'project-detail') {
  renderProjectDetail();
}

if (pageType === 'about-detail') {
  renderAboutDetail();
}

initReveal();
