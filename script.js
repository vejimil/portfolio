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
      label: 'Web Project',
      title: 'World of Words',
      blurb:
        'A language-learning site that combines structure, playful interaction, and mini-game thinking.',
      caption:
        'Built as a solo project with attention to clarity, flow, and interactive feedback.',
      meta: ['Interactive Learning', 'Web Design', 'Solo Build'],
      tags: ['Game-like Learning', 'UX Flow', 'Frontend Implementation'],
      detail: {
        kicker: 'Project',
        subtitle: 'A language-learning experience shaped by interaction, structure, and play.',
        summary:
          'World of Words is a personal project focused on making vocabulary practice feel more active and engaging. I approached it as both a learning product and an interactive design problem.',
        overview: [
          'I designed the site around the idea that studying becomes stronger when the experience feels clear, responsive, and enjoyable.',
          'Instead of treating learning content as static information, I organized it so the interface itself supports rhythm, motivation, and experimentation.'
        ],
        sections: [
          {
            heading: 'What I focused on',
            type: 'list',
            content: [
              'Information structure for study flow and content browsing',
              'Interface choices that keep the experience readable and inviting',
              'Interactive elements that make learning feel more alive',
              'Expandable mini-game planning for future growth'
            ]
          },
          {
            heading: 'Why this project matters to me',
            type: 'paragraph',
            content:
              'This project shows how I like to work: start with a useful idea, strengthen the experience through interaction, and make the final result feel thoughtful rather than overloaded.'
          }
        ],
        sidebar: {
          role: 'Designer / Builder',
          stack: ['HTML', 'CSS', 'JavaScript'],
          notes: [
            'Solo-built and continuously expandable',
            'Focused on interaction design and usability',
            'Good example of my interest in playful digital products'
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
          <a class="btn btn-secondary" href="index.html#projects">Back to Home</a>
          <a class="btn btn-primary" href="about.html">About Me</a>
        </div>
      </header>

      <div class="detail-layout">
        <div class="detail-content">
          <section class="detail-block">
            <h2>Overview</h2>
            ${project.detail.overview.map((paragraph) => `<p>${paragraph}</p>`).join('')}
          </section>

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
