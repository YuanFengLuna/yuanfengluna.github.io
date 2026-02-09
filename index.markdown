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
        <a href="#faith" class="entry-menu-link">
          <span class="cmd">> source .core</span>
          <span class="desc">what drives me</span>
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
          A faithful daughter of God, a loving wife, a cat mom, an enthusiast of whole foods diet & glucose revolution, an amateur painter/doodler.
        </p>
        <p class="bio-text">
          A data-driven product software engineer with 8+ years of industry experience — from FAANG companies handling billions of user data to seed-round startups building everything from the ground up.
        </p>
        <p class="bio-text">
          From <span style="text-decoration: line-through; text-decoration-color: var(--accent-rose); opacity: 0.6;">Beijing, China</span> to Irvine, California. Whatever I do, I love what I put my hands on.
        </p>
        <p class="bio-text" style="color: var(--text-muted); font-size: 0.9375rem;">
          After all, just a human being, that is so insignificant in this world, yet so unique in His eyes.
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
        <h3>Agentic AI Solutions</h3>
        <p>Building autonomous AI systems that reason, plan, and execute complex workflows. From multi-agent architectures to production-grade agentic pipelines.</p>
        <div class="tech-tags">
          <span class="tech-tag">LangChain</span>
          <span class="tech-tag">CrewAI</span>
          <span class="tech-tag">Claude</span>
          <span class="tech-tag">GPT</span>
          <span class="tech-tag">RAG</span>
        </div>
      </div>
      <div class="skill-card reveal">
        <h3>AI Application Development</h3>
        <p>LLM-powered products from prototype to production. Full-stack development with AI integration, from chat interfaces to intelligent automation tools.</p>
        <div class="tech-tags">
          <span class="tech-tag">Python</span>
          <span class="tech-tag">TypeScript</span>
          <span class="tech-tag">React</span>
          <span class="tech-tag">Next.js</span>
          <span class="tech-tag">FastAPI</span>
        </div>
      </div>
      <div class="skill-card reveal">
        <h3>Product Design & Engineering</h3>
        <p>8+ years from FAANG to startup. User-centered product thinking meets rigorous engineering. Data-driven decisions, scalable architecture, beautiful interfaces.</p>
        <div class="tech-tags">
          <span class="tech-tag">System Design</span>
          <span class="tech-tag">Data Pipelines</span>
          <span class="tech-tag">Cloud</span>
          <span class="tech-tag">CI/CD</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Faith Section -->
<section id="faith" class="faith-section">
  <div class="faith-inner">
    <div class="section-header reveal" style="justify-content: center;">source .core</div>
    <div class="reveal">
      <p class="scripture">
        "She is clothed with strength and dignity, and she laughs without fear of the future."
      </p>
      <p class="scripture-ref">Proverbs 31:25</p>
    </div>
    <p class="faith-reflection reveal">
      Faith is my foundation, not a footnote. It shapes how I work — with integrity, purpose, and joy. In an industry that moves fast, I'm anchored in something that doesn't change.
    </p>
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
      <a href="https://linkedin.com/in/yuanluna" target="_blank" rel="noopener">linkedin</a>
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
