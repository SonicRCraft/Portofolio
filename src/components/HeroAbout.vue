<template>
  <section id="about" class="section hero-section">
    <div class="container">
      <div class="hero-grid">
        <!-- Content -->
        <div class="hero-content">
          <div class="hero-greeting animate-fade-up" style="animation-delay:0.1s">
            <span class="greeting-dot"></span>
            Available for new opportunities
          </div>

          <h1 class="hero-title animate-fade-up" style="animation-delay:0.2s">
            Hello, I'm
            <span class="name-highlight">{{ profile.name }}</span>
          </h1>

          <div class="hero-role animate-fade-up" style="animation-delay:0.3s">
            <span class="role-text">{{ displayedRole }}</span>
            <span class="cursor-blink">|</span>
          </div>

          <p class="hero-bio animate-fade-up" style="animation-delay:0.4s">
            {{ profile.bio }}
          </p>

          <div class="hero-actions animate-fade-up" style="animation-delay:0.5s">
            <Button as="a" href="#projects" label="Projects" icon="pi pi-arrow-right" icon-pos="right" class="hero-btn-primary" />
            <Button as="a" :href="profile.cvFile" download label="CV" icon="pi pi-download" outlined class="hero-btn-outline" />
          </div>

          <div class="hero-socials animate-fade-up" style="animation-delay:0.6s">
            <a :href="profile.github" target="_blank" class="social-link" aria-label="GitHub">
              <i class="pi pi-github"></i>
            </a>
            <a :href="profile.linkedin" target="_blank" class="social-link" aria-label="LinkedIn">
              <i class="pi pi-linkedin"></i>
            </a>
            <a :href="profile.twitter" target="_blank" class="social-link" aria-label="Twitter/X">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        <!-- Visual -->
        <div class="hero-visual animate-fade-up" style="animation-delay:0.3s">
          <div class="avatar-ring">
            <div class="avatar-container">
              <div class="avatar-placeholder">
                <i class="pi pi-user" style="font-size: 4rem; color: rgba(139, 92, 246, 0.5)"></i>
              </div>
            </div>
            <div class="ring-decoration ring-1"></div>
            <div class="ring-decoration ring-2"></div>
          </div>

          <div
            v-for="(stat, i) in profile.stats"
            :key="stat.label"
            class="stat-card glass-card"
            :class="`stat-${i + 1}`"
          >
            <span class="stat-num">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="scroll-indicator">
      <div class="scroll-line"></div>
      <span>Scroll</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Button from 'primevue/button'
import { profile } from '@/data'

const displayedRole = ref('')
let roleIndex = 0
let charIndex = 0
let isDeleting = false
let timer = null

function typeWriter() {
  const current = profile.roles[roleIndex]
  if (!isDeleting) {
    displayedRole.value = current.substring(0, charIndex + 1)
    charIndex++
    if (charIndex === current.length) {
      isDeleting = true
      timer = setTimeout(typeWriter, 1800)
      return
    }
  } else {
    displayedRole.value = current.substring(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      isDeleting = false
      roleIndex = (roleIndex + 1) % profile.roles.length
    }
  }
  timer = setTimeout(typeWriter, isDeleting ? 60 : 90)
}

onMounted(() => { timer = setTimeout(typeWriter, 500) })
onUnmounted(() => clearTimeout(timer))
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 100px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.hero-greeting {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.88rem;
  color: var(--text-secondary);
  margin-bottom: 20px;
  opacity: 0;
}

.greeting-dot {
  width: 8px; height: 8px;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse-glow 2s infinite;
  box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);
}

.hero-title {
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: 12px;
  opacity: 0;
}

.name-highlight {
  display: block;
  background: var(--accent-gradient-full);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-role {
  font-size: 1.15rem;
  color: var(--text-secondary);
  margin-bottom: 24px;
  min-height: 2rem;
  opacity: 0;
}
.role-prefix { color: var(--text-muted); }
.role-text { color: var(--accent-secondary); font-weight: 600; }
.cursor-blink { color: var(--accent-primary); animation: blink 1s step-end infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

.hero-bio {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 32px;
  opacity: 0;
  max-width: 480px;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 36px;
  opacity: 0;
}

:deep(.hero-btn-primary) {
  background: var(--accent-gradient) !important;
  border: none !important;
  border-radius: 99px !important;
  padding: 13px 32px !important;
  font-size: 0.95rem !important;
  font-weight: 700 !important;
  box-shadow: 0 6px 28px rgba(139,92,246,0.45) !important;
}
:deep(.hero-btn-primary:hover) {
  transform: translateY(-3px) !important;
  box-shadow: 0 12px 40px rgba(139,92,246,0.65) !important;
}

:deep(.hero-btn-outline) {
  border-radius: 99px !important;
  padding: 13px 28px !important;
  font-size: 0.95rem !important;
  font-weight: 600 !important;
  border-color: var(--glass-border) !important;
  color: var(--text-primary) !important;
}
:deep(.hero-btn-outline:hover) {
  border-color: var(--accent-primary) !important;
  color: var(--accent-primary) !important;
  background: rgba(139,92,246,0.06) !important;
}

.hero-socials {
  display: flex;
  gap: 10px;
  opacity: 0;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px; height: 44px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 1px solid var(--glass-border);
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1rem;
  transition: var(--transition);
}
.social-link:hover {
  color: var(--accent-primary);
  border-color: var(--accent-primary);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.3);
}

/* Visual */
.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 480px;
  opacity: 0;
}

.avatar-ring { position: relative; width: 260px; height: 260px; }

.avatar-container {
  width: 260px; height: 260px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(139,92,246,0.15), rgba(6,182,212,0.15));
  border: 2px solid rgba(139, 92, 246, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.ring-decoration {
  position: absolute;
  border-radius: 50%;
  border: 1px dashed rgba(139, 92, 246, 0.18);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}
.ring-1 { width: 320px; height: 320px; animation: spin 20s linear infinite; }
.ring-2 { width: 390px; height: 390px; animation: spin 30s linear infinite reverse; }
@keyframes spin { to { transform: translate(-50%, -50%) rotate(360deg); } }

.stat-card {
  position: absolute;
  padding: 14px 20px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 140px;
}
.stat-1 { top: 40px; right: -10px; }
.stat-2 { bottom: 80px; right: -20px; }
.stat-3 { bottom: 40px; left: -10px; }

.stat-num {
  font-size: 1.8rem;
  font-weight: 800;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}
.stat-label { font-size: 0.78rem; color: var(--text-secondary); }

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 32px; left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  animation: fadeIn 1s 1.5s both;
}
.scroll-line {
  width: 1px; height: 40px;
  background: linear-gradient(to bottom, transparent, var(--accent-primary));
  animation: scrollDown 2s ease infinite;
}
@keyframes scrollDown {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

@media (max-width: 900px) {
  .hero-grid { grid-template-columns: 1fr; gap: 48px; text-align: center; }
  .hero-bio { max-width: 100%; }
  .hero-actions, .hero-socials { justify-content: center; }
  .hero-visual { height: 360px; order: -1; }
  .avatar-ring { width: 200px; height: 200px; }
  .avatar-container { width: 200px; height: 200px; }
  .ring-1 { width: 260px; height: 260px; }
  .ring-2 { width: 320px; height: 320px; }
  .stat-1 { top: 20px; right: 10px; }
  .stat-2 { bottom: 60px; right: 0px; }
  .stat-3 { bottom: 20px; left: 10px; }
  .scroll-indicator { display: none; }
}
</style>
