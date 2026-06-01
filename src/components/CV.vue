<template>
  <section id="cv" class="section cv-section">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Resume</span>
        <h2 class="section-title">Download <span>CV</span></h2>
        <p class="section-desc">Interested in collaborating? Download my full CV and let's build something amazing together.</p>
      </div>

      <div class="cv-wrapper">
        <!-- Main Download Card -->
        <div class="cv-card glass-card">
          <div class="cv-card-bg">
            <div class="cv-orb cv-orb-1"></div>
            <div class="cv-orb cv-orb-2"></div>
          </div>

          <div class="cv-card-content">
            <div class="cv-avatar">
              <div class="cv-avatar-ring">
                <i class="pi pi-file-pdf" style="font-size: 2.5rem; color: rgba(139,92,246,0.8)"></i>
              </div>
              <div class="cv-avatar-pulse"></div>
            </div>

            <div class="cv-info">
              <div class="cv-doc-label">
                <i class="pi pi-file"></i>
                Curriculum Vitae
              </div>
              <h3 class="cv-name">{{ profile.name }}</h3>
              <p class="cv-role">{{ profile.role }}</p>

              <div class="cv-meta-chips">
                <span class="cv-chip">
                  <i class="pi pi-map-marker"></i>
                  {{ profile.location }}
                </span>
                <span class="cv-chip">
                  <i class="pi pi-calendar"></i>
                  Updated {{ currentMonth }}
                </span>
                <span class="cv-chip">
                  <i class="pi pi-file-pdf"></i>
                  PDF · 2 pages
                </span>
              </div>
            </div>

            <div class="cv-actions">
              <Button
                as="a"
                :href="profile.cvFile"
                download
                label="Download CV"
                icon="pi pi-download"
                class="download-btn"
                size="large"
              />
              <Button
                as="a"
                :href="profile.cvFile"
                target="_blank"
                label="Preview"
                icon="pi pi-eye"
                outlined
                class="preview-btn"
                size="large"
              />
            </div>
          </div>
        </div>

        <!-- Stats Row -->
        <div class="cv-stats">
          <div class="cv-stat glass-card" v-for="stat in stats" :key="stat.label">
            <div class="stat-icon" :style="{ background: stat.color + '15', color: stat.color }">
              <i :class="stat.icon"></i>
            </div>
            <div>
              <div class="stat-num" :style="{ color: stat.color }">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Contact CTA -->
        <div class="contact-cta glass-card">
          <div class="cta-text">
            <h3 class="cta-title">Want to collaborate?</h3>
            <p class="cta-desc">I am open to full-time, freelance opportunities, or collaborative projects. Let's talk!</p>
          </div>
          <div class="cta-buttons">
            <Button as="a" :href="'mailto:' + profile.email" label="Send Email" icon="pi pi-envelope" class="email-btn" />
            <Button as="a" :href="profile.linkedin" target="_blank" label="LinkedIn" icon="pi pi-linkedin" outlined class="linkedin-btn" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from 'primevue/button'
import { profile, cvStats } from '@/data'

const currentMonth = new Intl.DateTimeFormat('id-ID', { month: 'long', year: 'numeric' }).format(new Date())

const stats = cvStats
</script>

<style scoped>
.cv-section {
  background: radial-gradient(ellipse at center bottom, rgba(139,92,246,0.06), transparent 60%);
}

.cv-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 800px;
  margin: 0 auto;
}

/* Main Card */
.cv-card {
  position: relative;
  overflow: hidden;
  padding: 52px 48px;
}

.cv-card-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.cv-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.12;
}

.cv-orb-1 {
  width: 300px; height: 300px;
  background: var(--accent-primary);
  top: -100px; right: -100px;
}

.cv-orb-2 {
  width: 200px; height: 200px;
  background: var(--accent-secondary);
  bottom: -80px; left: -60px;
}

.cv-card-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  text-align: center;
}

/* Avatar */
.cv-avatar {
  position: relative;
  width: 96px; height: 96px;
}

.cv-avatar-ring {
  width: 96px; height: 96px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(139,92,246,0.15), rgba(6,182,212,0.15));
  border: 2px solid rgba(139,92,246,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cv-avatar-pulse {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 2px solid rgba(139,92,246,0.2);
  animation: pulse-ring 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
}

@keyframes pulse-ring {
  0% { transform: scale(0.95); opacity: 0.7; }
  70% { transform: scale(1.1); opacity: 0; }
  100% { transform: scale(0.95); opacity: 0; }
}

/* Info */
.cv-doc-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-primary);
  background: rgba(139,92,246,0.1);
  border: 1px solid rgba(139,92,246,0.2);
  padding: 5px 14px;
  border-radius: 99px;
  margin-bottom: 10px;
}

.cv-name {
  font-size: 2rem;
  font-weight: 800;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 4px;
  letter-spacing: -0.02em;
}

.cv-role {
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: 500;
  margin-bottom: 20px;
}

.cv-meta-chips {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.cv-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-family: var(--font-mono);
  color: var(--text-muted);
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  padding: 5px 14px;
  border-radius: 99px;
}

.cv-chip i { font-size: 0.72rem; color: var(--accent-primary); }

/* Action Buttons */
.cv-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

:deep(.download-btn) {
  background: var(--accent-gradient) !important;
  border: none !important;
  border-radius: 99px !important;
  padding: 14px 36px !important;
  font-size: 1rem !important;
  font-weight: 700 !important;
  box-shadow: 0 8px 32px rgba(139,92,246,0.5) !important;
  transition: var(--transition) !important;
}
:deep(.download-btn:hover) {
  transform: translateY(-3px) !important;
  box-shadow: 0 14px 48px rgba(139,92,246,0.7) !important;
}

:deep(.preview-btn) {
  border-radius: 99px !important;
  padding: 14px 32px !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
  border-color: var(--glass-border) !important;
  color: var(--text-primary) !important;
  transition: var(--transition) !important;
}
:deep(.preview-btn:hover) {
  border-color: var(--accent-secondary) !important;
  color: var(--accent-secondary) !important;
  background: rgba(6,182,212,0.06) !important;
}

/* Stats */
.cv-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.cv-stat {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px 20px;
}

.stat-icon {
  width: 44px; height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.stat-num {
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 3px;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  line-height: 1.3;
}

/* Contact CTA */
.contact-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 32px 40px;
  background: linear-gradient(135deg, rgba(139,92,246,0.08), rgba(6,182,212,0.06)) !important;
  border-color: rgba(139,92,246,0.2) !important;
  flex-wrap: wrap;
}

.cta-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.cta-desc {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 10px;
  flex-shrink: 0;
  flex-wrap: wrap;
}

:deep(.email-btn) {
  background: var(--accent-gradient) !important;
  border: none !important;
  border-radius: 99px !important;
  font-weight: 600 !important;
  box-shadow: 0 4px 20px rgba(139,92,246,0.35) !important;
}
:deep(.email-btn:hover) {
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 32px rgba(139,92,246,0.55) !important;
}

:deep(.linkedin-btn) {
  border-radius: 99px !important;
  border-color: var(--glass-border) !important;
  color: var(--text-primary) !important;
  font-weight: 600 !important;
}
:deep(.linkedin-btn:hover) {
  border-color: #06b6d4 !important;
  color: #06b6d4 !important;
  background: rgba(6,182,212,0.06) !important;
}

@media (max-width: 768px) {
  .cv-card { padding: 36px 24px; }
  .cv-stats { grid-template-columns: repeat(2, 1fr); }
  .contact-cta { flex-direction: column; text-align: center; padding: 28px 24px; }
  .cta-buttons { justify-content: center; }
}

@media (max-width: 480px) {
  .cv-stats { grid-template-columns: 1fr 1fr; }
  .cv-meta-chips { flex-direction: column; align-items: center; }
}
</style>
