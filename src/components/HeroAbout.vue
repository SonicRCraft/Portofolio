<template>
  <section id="about" class="hero-section">
    <div class="container">
      <div class="hero-layout">
        <!-- Left: Statement & Vision -->
        <div class="hero-statement animate-fade-up">
          <div class="hero-kicker">
            <span class="kicker-tag">// SOFTWARE ENGINEER // BACKEND FOCUS &amp; FULL-STACK</span>
          </div>

          <h1 class="hero-headline">
            Software Engineer with a strong focus on backend development, AI automation, and full-stack systems.
          </h1>

          <p class="hero-summary">
            Experienced in building APIs, managing databases, and setting up automated workflows to simplify business processes. Comfortable working across the full development lifecycle using Go, Python, Django, FastAPI, ReactJS, NextJS, and tools like n8n and LangChain to solve real-world technical challenges.
          </p>

          <div class="hero-actions">
            <a :href="profile.cvFile" download class="btn-action btn-action-primary">
              Download Resume <span>↗</span>
            </a>
            <a href="#contact" class="hero-contact-inline">
              <span class="inline-label">Direct:</span>
              <span class="inline-value">{{ profile.email }}</span>
            </a>
          </div>
        </div>

        <!-- Right: Technical Dossier Card -->
        <div class="hero-dossier animate-fade-up" style="animation-delay: 0.15s">
          <div class="dossier-card dark-panel">
            <div class="dossier-header">
              <span class="dossier-id">ENGINEER DOSSIER // SHEET NO. 01</span>
              <span class="dossier-badge">ACTIVE</span>
            </div>

            <h3 class="dossier-name">{{ profile.name }}</h3>

            <div class="dossier-specs">
              <div class="spec-row">
                <span class="spec-key">CORE FOCUS</span>
                <span class="spec-val">Backend (Go, Python, FastAPI, Django) &amp; Full-Stack (React, Next.js)</span>
              </div>
              <div class="spec-row">
                <span class="spec-key">AI &amp; AUTOMATION</span>
                <span class="spec-val">n8n, LangChain, Generative AI, Workflow Automation</span>
              </div>
              <div class="spec-row">
                <span class="spec-key">DATABASE &amp; CLOUD</span>
                <span class="spec-val">PostgreSQL, Oracle Cloud (OCI), Docker, Prisma ORM, CI/CD</span>
              </div>
              <div class="spec-row">
                <span class="spec-key">CURRENT STATUS</span>
                <span class="spec-val status-val">
                  <span class="status-dot"></span> AVAILABLE FOR ROLES &amp; PROJECTS (JAKARTA)
                </span>
              </div>
            </div>

            <div class="dossier-quote">
              <p>“Comfortable working across the full development lifecycle using Go, Python, and modern web frameworks to solve real-world technical challenges.”</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom: 4 Key Production Metrics -->
      <div class="hero-metrics-grid animate-fade-up" style="animation-delay: 0.25s">
        <div class="metric-card dark-panel">
          <div class="metric-header">
            <span class="metric-label">TOTAL EXPERIENCE</span>
            <span class="metric-arrow">↗</span>
          </div>
          <div class="metric-val">2+ <span class="metric-unit">Years</span></div>
          <p class="metric-caption">Backend development &amp; full-stack applications</p>
        </div>

        <div class="metric-card dark-panel">
          <div class="metric-header">
            <span class="metric-label">ORACLE CLOUD (OCI)</span>
            <span class="metric-arrow">↗</span>
          </div>
          <div class="metric-val">4x <span class="metric-unit">Certified</span></div>
          <p class="metric-caption">DevOps, Developer, AI &amp; APEX</p>
        </div>

        <div class="metric-card dark-panel">
          <div class="metric-header">
            <span class="metric-label">FULL-STACK WEB</span>
            <span class="metric-arrow">↗</span>
          </div>
          <div class="metric-val">React &amp; Next.js</div>
          <p class="metric-caption">Modern responsive web applications</p>
        </div>

        <div class="metric-card dark-panel">
          <div class="metric-header">
            <span class="metric-label">AI &amp; PIPELINES</span>
            <span class="metric-arrow">↗</span>
          </div>
          <div class="metric-val">End-to-End</div>
          <p class="metric-caption">n8n &amp; LangChain automated workflows</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { profile } from '@/data'
</script>

<style scoped>
.hero-section {
  padding-top: 140px;
  padding-bottom: 72px;
  background: var(--bg-primary);
  position: relative;
  width: 100%;
}

.hero-layout {
  display: grid;
  grid-template-columns: 1.35fr 0.85fr;
  gap: 56px;
  align-items: flex-start;
  margin-bottom: 56px;
  width: 100%;
}

/* Statement */
.hero-statement {
  display: flex;
  flex-direction: column;
}

.hero-kicker {
  margin-bottom: 18px;
}

.kicker-tag {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  font-weight: 600;
  color: var(--accent-orange);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-headline {
  font-family: var(--font-serif);
  font-size: clamp(2.4rem, 3.8vw, 3.6rem);
  font-weight: 500;
  color: var(--text-primary);
  line-height: 1.14;
  letter-spacing: -0.025em;
  margin-bottom: 24px;
}

.hero-summary {
  font-size: 1.02rem;
  color: var(--text-secondary);
  line-height: 1.75;
  max-width: 820px;
  margin-bottom: 34px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.hero-contact-inline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.hero-contact-inline:hover {
  color: var(--accent-orange);
}

.inline-label {
  color: var(--text-muted);
}

.inline-value {
  color: var(--text-primary);
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: var(--glass-border);
}

/* Dossier Card */
.hero-dossier {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.dossier-card {
  width: 100%;
  max-width: 520px;
  padding: 30px;
  border-radius: var(--radius-md);
  background: #111116;
  border: 1px solid var(--glass-border);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.4);
}

.dossier-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--glass-border);
  margin-bottom: 20px;
}

.dossier-id {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--text-muted);
  letter-spacing: 0.08em;
}

.dossier-badge {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  font-weight: 700;
  color: var(--accent-orange);
  background: var(--accent-orange-dim);
  border: 1px solid var(--accent-orange-border);
  padding: 2px 8px;
  border-radius: 99px;
  letter-spacing: 0.06em;
}

.dossier-name {
  font-family: var(--font-serif);
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
  margin-bottom: 18px;
}

.dossier-specs {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.spec-row {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.spec-key {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 0.06em;
}

.spec-val {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-primary);
  line-height: 1.45;
}

.status-val {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #4ade80;
}

.dossier-quote {
  padding-top: 14px;
  border-top: 1px dashed var(--glass-border);
}

.dossier-quote p {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.55;
  margin: 0;
}

/* Metrics Row (spans full wide width) */
.hero-metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-top: 24px;
  width: 100%;
}

.metric-card {
  padding: 20px 24px;
  border-radius: var(--radius-sm);
  background: #111116;
  border: 1px solid var(--glass-border);
  transition: var(--transition);
}

.metric-card:hover {
  border-color: rgba(245, 158, 11, 0.35);
  transform: translateY(-2px);
}

.metric-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.metric-label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 0.06em;
}

.metric-arrow {
  color: var(--accent-orange);
  font-size: 0.82rem;
}

.metric-val {
  font-family: var(--font-mono);
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  margin-bottom: 4px;
}

.metric-unit {
  font-size: 0.85rem;
  color: var(--accent-orange);
  font-weight: 500;
}

.metric-caption {
  font-size: 0.78rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.4;
}

@media (max-width: 1100px) {
  .hero-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .hero-dossier {
    justify-content: flex-start;
  }
  .dossier-card {
    max-width: 100%;
  }
  .hero-metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .hero-section {
    padding-top: 110px;
    padding-bottom: 48px;
  }
  .hero-headline {
    font-size: 2.1rem;
  }
  .hero-metrics-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .dossier-card {
    padding: 20px;
  }
}
</style>
