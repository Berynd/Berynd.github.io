import './style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <div class="terminal-header">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <h1>$ whoami</h1>
    <p class="subtitle">Développeur Full Stack<span class="cursor"></span></p>
  </header>

  <main>
    <section id="about">
      <h2>À propos</h2>
      <p>Passionné par le développement web et la création d'expériences numériques innovantes. Je transforme des idées en code fonctionnel et élégant.</p>
    </section>

    <section id="skills">
      <h2>Compétences</h2>
      <div class="skills-grid">
        <div class="skill">JavaScript</div>
        <div class="skill">React</div>
        <div class="skill">Node.js</div>
        <div class="skill">Python</div>
        <div class="skill">Git</div>
        <div class="skill">SQL</div>
      </div>
    </section>

    <section id="projects">
      <h2>Projets</h2>
      <div class="projects-grid">
        <div class="project">
          <h3>Application Web E-commerce</h3>
          <p>Plateforme complète avec gestion de panier et paiement sécurisé</p>
          <div class="tech-stack">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">MongoDB</span>
          </div>
        </div>
        <div class="project">
          <h3>Dashboard Analytics</h3>
          <p>Tableau de bord interactif pour visualiser des données en temps réel</p>
          <div class="tech-stack">
            <span class="tech-tag">Vue.js</span>
            <span class="tech-tag">D3.js</span>
            <span class="tech-tag">API REST</span>
          </div>
        </div>
        <div class="project">
          <h3>App Mobile Fitness</h3>
          <p>Application de suivi d'entraînement et de nutrition</p>
          <div class="tech-stack">
            <span class="tech-tag">React Native</span>
            <span class="tech-tag">Firebase</span>
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <div class="contact-links">
        <a href="https://github.com" class="contact-link" target="_blank">GitHub</a>
        <a href="https://linkedin.com" class="contact-link" target="_blank">LinkedIn</a>
        <a href="mailto:contact@example.com" class="contact-link">Email</a>
      </div>
    </section>
  </main>

  <footer>
    <p>&lt;/&gt; avec passion | © 2025</p>
  </footer>
`;

const skills = document.querySelectorAll('.skill');
skills.forEach((skill, index) => {
  skill.style.animationDelay = `${index * 0.1}s`;
});
