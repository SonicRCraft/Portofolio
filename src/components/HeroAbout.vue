<template>
  <section id="about" class="section hero-section">
    <div class="container">
      <div class="hero-grid">
        <!-- Content -->
        <div class="hero-content">
          <div class="hero-greeting animate-fade-up" style="animation-delay:0.1s">
            <span class="greeting-dot"></span>
            Open to work — Jakarta, Indonesia
          </div>

          <h1 class="hero-title animate-fade-up" style="animation-delay:0.2s">
            Hey, I'm
            <span class="name-highlight">{{ profile.name }}</span>
          </h1>

          <div class="hero-role animate-fade-up" style="animation-delay:0.3s">
            <span class="role-text">{{ profile.role }}</span>
          </div>

          <p class="hero-bio animate-fade-up" style="animation-delay:0.4s">
            {{ profile.bio }}
          </p>

          <div class="hero-actions animate-fade-up" style="animation-delay:0.5s">
            <a href="#projects" class="btn btn-primary">See my work</a>
            <a :href="profile.cvFile" download class="btn btn-outline">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Resume
            </a>
          </div>

          <div class="hero-socials animate-fade-up" style="animation-delay:0.6s">
            <a :href="profile.github" target="_blank" class="social-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a :href="profile.linkedin" target="_blank" class="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a :href="profile.twitter" target="_blank" class="social-link" aria-label="Twitter/X">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        <!-- Visual — avatar + bento cards -->
        <div class="hero-visual animate-fade-up" style="animation-delay:0.3s">
          <!-- Profile Avatar -->
          <div class="avatar-wrap">
            <div class="avatar-container">
              <img src="/PasFoto%20Roland%20Rudiyanto.jpeg" alt="Roland Rudiyanto" class="profile-img" />
            </div>
          </div>

          <!-- Bento-style mini cards -->
          <div class="bento-cards">
            <div
              v-for="(stat, i) in profile.stats"
              :key="stat.label"
              class="bento-card glass-card"
              :class="`bento-${i + 1}`"
            >
              <span class="bento-num">{{ stat.value }}</span>
              <span class="bento-label">{{ stat.label }}</span>
            </div>

            <div class="bento-card bento-location glass-card">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Jakarta, ID</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="scroll-indicator">
      <div class="scroll-line"></div>
      <span>scroll</span>
    </div>
  </section>
</template>

<script setup>
import { profile } from '@/data'
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 100px;
}

.hero-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

.hero-content {
  flex: 0 1 55%;
}

.hero-visual {
  flex: 0 1 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: relative;
  opacity: 0;
}

/* --- Greeting --- */
.hero-greeting {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 0.82rem;
  color: var(--text-secondary);
  margin-bottom: 20px;
  opacity: 0;
  letter-spacing: 0.01em;
}

.greeting-dot {
  width: 6px; height: 6px;
  background: var(--text-primary);
  border-radius: 50%;
  flex-shrink: 0;
}

/* --- Title --- */
.hero-title {
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: 14px;
  opacity: 0;
}

.name-highlight {
  display: block;
  color: var(--text-primary);
}

/* --- Role Typewriter --- */
.hero-role {
  font-size: 1.05rem;
  color: var(--text-secondary);
  margin-bottom: 22px;
  min-height: 1.8rem;
  opacity: 0;
}
.role-text { color: var(--text-primary); font-weight: 500; }

/* --- Bio --- */
.hero-bio {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 30px;
  opacity: 0;
  max-width: 500px;
}

/* --- Actions --- */
.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 32px;
  opacity: 0;
}

/* --- Socials --- */
.hero-socials {
  display: flex;
  gap: 8px;
  opacity: 0;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px; height: 36px;
  border-radius: var(--radius-sm);
  background: transparent;
  border: 1px solid var(--glass-border);
  color: var(--text-secondary);
  text-decoration: none;
  transition: var(--transition);
}
.social-link:hover {
  color: var(--bg-primary);
  border-color: var(--text-primary);
  background: var(--text-primary);
}

/* --- Visual Side --- */

/* --- Avatar (Initials) --- */
.avatar-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-container {
  width: 180px; height: 180px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 1px solid var(--glass-border);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.avatar-container:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
  border-color: var(--text-secondary);
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* --- Bento Cards --- */
.bento-cards {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 300px;
}

.bento-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px;
  border-radius: var(--radius-sm);
  background: var(--bg-card);
  border: 1px solid var(--glass-border);
  min-width: 110px;
  flex: 1;
}

.bento-num {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: -0.02em;
}

.bento-label {
  font-size: 0.72rem;
  color: var(--text-secondary);
  line-height: 1.3;
}

.bento-location {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  font-size: 0.78rem;
  color: var(--text-secondary);
  padding: 12px 16px;
  flex: none;
  width: 100%;
  justify-content: center;
}

.bento-location svg {
  color: var(--text-primary);
  flex-shrink: 0;
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 28px; left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: lowercase;
  animation: fadeIn 1s 1.5s both;
}
.scroll-line {
  width: 1px; height: 36px;
  background: linear-gradient(to bottom, transparent, var(--text-muted));
  animation: scrollDown 2s ease infinite;
}
@keyframes scrollDown {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

@media (max-width: 900px) {
  .hero-grid { grid-template-columns: 1fr; gap: 40px; text-align: center; }
  .hero-bio { max-width: 100%; margin-left: auto; margin-right: auto; }
  .hero-actions, .hero-socials { justify-content: center; }
  .hero-visual { order: -1; }
  .bento-cards { max-width: 280px; }
  .scroll-indicator { display: none; }
}
</style>
