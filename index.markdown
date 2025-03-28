---
layout: home
---

<section class="hero-section">
  <div class="hero-content">
    <h1>Yuan is a software engineer</h1>
    <h1>living in <span class="strikethrough">Beijing, China</span> Irvine, California</h1>
    
    <p class="intro-text">
      She is clothed with strength and dignity, and she laughs without fear of the future. 🕊️🤍 <br>Proverbs 31:25
    </p>
  </div>
  
  <!-- Portrait with absolute positioning -->
  <div class="portrait-container">
    <div class="portrait-wrapper">
      <img src="{{ site.baseurl }}/assets/images/portrait.JPG" alt="Yuan's portrait" class="portrait">
      <!-- Separate elements for decorators -->
      <div class="portrait-decorator"></div>
      <div class="portrait-line"></div>
    </div>
  </div>
</section>

<!-- About section with negative margin -->
<section id="about" class="about-section">
  <div class="about-content">
    <h2>About</h2>
    <p class="intro-text">
      A faithful daughter of God, a loving wife, a cat mom, an enthusiast of whole foods diet & glucose revolution, an amateur painter/doodler, a data-driven product software engineer with 8+ years of industry experience - from FAANG companies handling billions of user data to seed-round startups building everything from the ground up. Whatever I do, I love what I put my hands on.
    </p>
    <p class="intro-text">
      After all, just a human being, that is so insignificant in this world, yet so unique in His eyes.
    </p>
  </div>
</section>

<section class="quiz-section">
  <div class="quiz-content">
    <h2>Want a free coffee? ☕️</h2>
    <div class="quiz-card">
      <!-- Quiz Entrance -->
      <div id="quiz-entrance">
        <p class="intro-text">A small challenge with a warm reward—answer a quiz about me correctly and a coffee is on me.</p>
        <button id="start-quiz-btn" class="coffee-reward-button" onclick="startQuiz()">Take a Quiz!</button>
      </div>
      
      <!-- Quiz Container - Questions will be generated dynamically -->
      <div id="quiz-container" style="display: none;">
        <!-- Questions will be inserted here -->
        <div id="question-container"></div>
        
        <!-- Quiz Results -->
        <div id="quiz-summary" style="display: none;">
          <p class="quiz-prompt">Your score: <span id="score">0</span>/<span id="total-questions">0</span></p>
          <p class="score-message" id="score-message"></p>

          <!-- Coffee reward section (shows only for perfect score) -->
          <div id="coffee-reward" class="coffee-reward">
            <p>Claim your free coffee:</p>
            <div class="qr-container">
              <img id="coffee-qr" src="" alt="QR code to claim coffee">
            </div>
          </div>

          <button id="try-again-btn" class="quiz-reset" onclick="resetQuiz()">Try Again</button>
        </div>
      </div>
    </div>

  </div>
</section>

<section id="contact" class="contact-section">
  <div class="contact-content">
    <h2>Contact</h2>
    <p class="intro-text">Get in touch for opportunities or just to say hi :)</p>
    <a href="mailto:yuanfengluna@gmail.com" class="contact-link">yuanfengluna@gmail.com</a>
  </div>
</section>
