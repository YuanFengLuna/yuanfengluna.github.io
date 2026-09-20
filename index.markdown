---
layout: home
---

<!-- Entry Page -->
<section class="entry-page">
  <div style="position: relative; z-index: 1;">
    <h1 class="entry-title">yuan.luna_</h1>
    <p class="entry-tagline" id="typed-tagline"></p>

    <ul class="entry-menu">
      <li class="entry-menu-item">
        <a href="#intro" class="entry-menu-link">
          <span class="cmd">> whoami</span>
          <span class="desc">who I am</span>
        </a>
      </li>
      <li class="entry-menu-item">
        <a href="#work" class="entry-menu-link">
          <span class="cmd">> cat skills.md</span>
          <span class="desc">what I build</span>
        </a>
      </li>
      <li class="entry-menu-item">
        <a href="/blog" class="entry-menu-link">
          <span class="cmd">> tail -f blog</span>
          <span class="desc">thoughts & notes</span>
        </a>
      </li>
      <li class="entry-menu-item">
        <a href="#contact" class="entry-menu-link">
          <span class="cmd">> ping yuan</span>
          <span class="desc">work with me</span>
        </a>
      </li>
    </ul>
  </div>
</section>

<!-- Whoami Section -->
<section id="intro" class="whoami-section">
  <div class="section-inner">
    <div class="section-header reveal">whoami</div>
    <div class="whoami-grid">
      <div class="portrait-container reveal">
        <div class="portrait-wrapper">
          <img src="{{ site.baseurl }}/assets/images/portrait.JPG" alt="Yuan's portrait" class="portrait" loading="lazy">
        </div>
      </div>
      <div class="whoami-content reveal">
        <p class="bio-text">
          A faithful daughter of God, a loving wife, a cat mom, an amateur painter/doodler.
        </p>
        <p class="bio-text">
          I love things that look effortless because someone cared about the details: software that never goes down, a painting that feels finished, a well-made Americano to start the morning. These days I teach AI agents to behave themselves. Mostly.
        </p>
        <p class="bio-text">
          A decade in tech, from Meta to scrappy startups, taught me that the good stuff is elegant, a little stubborn, and made with care.
        </p>
        <p class="bio-text">
          Originally from Beijing, now happily settled in Irvine, California. Wherever life takes me, my foundation will always be in God.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Skills Section -->
<section id="work" class="skills-section">
  <div class="section-inner">
    <div class="section-header reveal">cat skills.md</div>
    <div class="skills-grid">
      <div class="skill-card reveal">
        <h3>AI &amp; Agentic Systems</h3>
        <p>I build the systems that make AI agents dependable enough for real work: rules enforced in code rather than politely requested in prompts, evals that tell whether an agent is doing its job or just sounding confident, and a second agent that audits the first. At Linktree, an agent I built tests every pull request, and moving its rules from prompts into code made it cheaper and far more reliable. Now I'm building a self-healing system that catches production issues, has a coding agent fix them, and decides whether each fix is safe to ship. Its best feature is knowing when not to trust itself.</p>
        <div class="tech-tags">
          <span class="tech-tag">Agent Harnesses</span>
          <span class="tech-tag">Evals</span>
          <span class="tech-tag">Loop Engineering</span>
          <span class="tech-tag">MCP</span>
          <span class="tech-tag">Claude Code</span>
          <span class="tech-tag">Devin</span>
          <span class="tech-tag">Codex</span>
        </div>
      </div>
      <div class="skill-card reveal">
        <h3>Languages &amp; Frameworks</h3>
        <p>I build across the whole stack, from a React front end to a GraphQL API to a SQL query that really should have had an index, and I obsess over one thing: how it all feels to the person on the other end.</p>
        <div class="tech-tags">
          <span class="tech-tag">TypeScript</span>
          <span class="tech-tag">JavaScript</span>
          <span class="tech-tag">Python</span>
          <span class="tech-tag">Hack</span>
          <span class="tech-tag">SQL</span>
          <span class="tech-tag">React</span>
          <span class="tech-tag">GraphQL</span>
        </div>
      </div>
      <div class="skill-card reveal">
        <h3>Full-Stack, Pipeline to Pixels</h3>
        <p>End to end is where I do my best work. I've shipped everything from the CI/CD pipeline and DevOps underneath, through cloud and edge infrastructure, up to the front-end experience and the A/B test that tells you whether it worked. When something breaks, I follow it to wherever it actually lives, and I'd much rather fix the root cause than keep being the person who gets paged.</p>
        <div class="tech-tags">
          <span class="tech-tag">CI/CD</span>
          <span class="tech-tag">DevOps</span>
          <span class="tech-tag">Kubernetes</span>
          <span class="tech-tag">AWS</span>
          <span class="tech-tag">GCP</span>
          <span class="tech-tag">Terraform</span>
          <span class="tech-tag">Fastly</span>
          <span class="tech-tag">BigQuery</span>
          <span class="tech-tag">A/B Testing</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section id="contact" class="contact-section">
  <div class="contact-inner">
    <div class="section-header reveal">ping yuan</div>
    <div class="reveal">
      <div class="availability-badge">
        <span class="availability-dot"></span>
        status: available for freelance
      </div>
    </div>
    <p class="reveal" style="font-size: 1.125rem; margin-bottom: var(--space-lg); max-width: 100%;">
      I build agentic AI solutions and AI-powered products. Let's create something meaningful together.
    </p>
    <div class="reveal">
      <a href="mailto:yuanfengluna@gmail.com" class="contact-email">mailto yuanfengluna@gmail.com</a>
    </div>
    <div class="contact-links reveal">
      <a href="https://github.com/yuanfengluna" target="_blank" rel="noopener">github</a>
      <a href="https://www.linkedin.com/in/yuanfengluna/" target="_blank" rel="noopener">linkedin</a>
    </div>
  </div>
</section>

<!-- Hidden Quiz Section — discoverable via terminal "brew coffee" command -->
<section id="quiz" class="quiz-section section" style="background-color: var(--bg-deep);">
  <div class="section-narrow">
    <div class="section-header reveal">brew coffee</div>
    <h2 class="reveal" style="color: var(--accent-gold);">Want a free coffee?</h2>
    <div class="quiz-card reveal">
      <div id="quiz-entrance">
        <p style="color: var(--text-muted); font-size: 1rem; margin-bottom: var(--space-md);">A small challenge with a warm reward — answer a quiz about me correctly and a coffee is on me.</p>
        <button id="start-quiz-btn" class="btn">Take the Quiz</button>
      </div>

      <div id="quiz-container" style="display: none;">
        <div id="question-container"></div>

        <div id="quiz-summary" style="display: none;">
          <p class="quiz-prompt">Your score: <span id="score">0</span>/<span id="total-questions">0</span></p>
          <p class="score-message" id="score-message"></p>

          <div id="coffee-reward" class="coffee-reward">
            <p>Claim your free coffee:</p>
            <div class="qr-container">
              <img id="coffee-qr" src="" alt="QR code to claim coffee">
            </div>
          </div>

          <button id="try-again-btn" class="btn" style="margin-top: var(--space-md);">Try Again</button>
        </div>
      </div>
    </div>
  </div>
</section>
