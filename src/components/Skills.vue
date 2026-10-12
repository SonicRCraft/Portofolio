<template>
  <section id="skills" class="section skills-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header-row">
        <div class="section-header-left">
          <span class="section-tag">// 03 / CAPABILITIES</span>
          <h2 class="section-heading">Technical Competencies</h2>
        </div>
        <span class="section-meta">INDEXED BY PRODUCTION USE &amp; PROFICIENCY</span>
      </div>

      <!-- 3-Column Competencies Grid -->
      <div class="competencies-grid">
        <!-- Card 1: Backend (Core Focus) -->
        <div class="competency-card dark-panel animate-fade-up">
          <div class="card-top-tag">
            <span class="category-index">[ 01 ]</span>
            <span class="category-name">BACKEND &amp; PROGRAMMING LANGUAGES</span>
          </div>

          <p class="category-desc">
            Primary focus: High-throughput RESTful endpoints, microservices, business logic integration, and ORM persistence.
          </p>

          <div class="chips-container">
            <span class="tech-badge highlight-badge">Go (Golang)</span>
            <span class="tech-badge highlight-badge">Python</span>
            <span class="tech-badge">FastAPI</span>
            <span class="tech-badge">Django</span>
            <span class="tech-badge">Node.js</span>
            <span class="tech-badge">RESTful APIs</span>
            <span class="tech-badge">Microservices</span>
            <span class="tech-badge">Prisma ORM</span>
            <span class="tech-badge">GORM</span>
          </div>
        </div>

        <!-- Card 2: Full-Stack & Frontend Development -->
        <div class="competency-card dark-panel animate-fade-up" style="animation-delay: 0.1s">
          <div class="card-top-tag">
            <span class="category-index">[ 02 ]</span>
            <span class="category-name">FRONTEND &amp; FULL-STACK DEVELOPMENT</span>
          </div>

          <p class="category-desc">
            Full-stack delivery: Building responsive web interfaces, interactive components, and connecting frontend to backend services.
          </p>

          <div class="chips-container">
            <span class="tech-badge highlight-badge">React.js</span>
            <span class="tech-badge highlight-badge">Next.js</span>
            <span class="tech-badge">JavaScript (ES6+)</span>
            <span class="tech-badge">HTML5 &amp; CSS3</span>
            <span class="tech-badge">Vue.js / Vite</span>
            <span class="tech-badge">Component Architecture</span>
            <span class="tech-badge">Responsive Design</span>
            <span class="tech-badge">API Integration</span>
          </div>
        </div>

        <!-- Card 3: Database, Cloud & AI Automation -->
        <div class="competency-card dark-panel animate-fade-up" style="animation-delay: 0.2s">
          <div class="card-top-tag">
            <span class="category-index">[ 03 ]</span>
            <span class="category-name">DATABASE, CLOUD &amp; AI AUTOMATION</span>
          </div>

          <p class="category-desc">
            Infrastructure &amp; AI: Relational schemas, cloud DevOps, and automated workflow pipelines that eliminate manual tasks.
          </p>

          <div class="chips-container">
            <span class="tech-badge highlight-badge">PostgreSQL</span>
            <span class="tech-badge">Oracle Cloud (OCI)</span>
            <span class="tech-badge">Docker</span>
            <span class="tech-badge">n8n Automation</span>
            <span class="tech-badge">LangChain</span>
            <span class="tech-badge">CI/CD (GitLab, Jenkins)</span>
            <span class="tech-badge">Microservices</span>
            <span class="tech-badge">Linux Administration</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.skills-section {
  background: var(--bg-primary);
  width: 100%;
}

.competencies-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  width: 100%;
}

.competency-card {
  padding: 32px 28px;
  background: #111116;
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: var(--transition);
}

.competency-card:hover {
  border-color: rgba(245, 158, 11, 0.35);
  transform: translateY(-2px);
}

.card-top-tag {
  display: flex;
  align-items: center;
  gap: 8px;
}

.category-index {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--accent-orange);
}

.category-name {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: 0.05em;
}

.category-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.62;
  margin: 0;
  min-height: 48px;
}

.chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.tech-badge {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.74rem;
  color: #d1d5db;
  background: #0d0d10;
  border: 1px solid var(--glass-border);
  padding: 5px 12px;
  border-radius: var(--radius-sm);
  transition: var(--transition);
}

.tech-badge:hover {
  color: #ffffff;
  border-color: var(--glass-border-hover);
  background: #171720;
}

.highlight-badge {
  border-color: rgba(245, 158, 11, 0.25);
  color: #ffffff;
}

@media (max-width: 1024px) {
  .competencies-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .competency-card {
    padding: 24px;
  }
}
</style>
