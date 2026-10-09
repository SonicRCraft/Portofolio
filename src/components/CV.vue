<template>
  <section id="cv" class="section cv-section">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Resume</span>
        <h2 class="section-title">Download <span>CV</span></h2>
        <p class="section-desc">If you want to know more about me — my CV has the full story. Feel free to reach out too.</p>
      </div>

      <div class="cv-wrapper">
        <!-- Main Download Card -->
        <div class="cv-card glass-card">
          <div class="cv-card-bg">
            <div class="cv-pattern"></div>
          </div>

          <div class="cv-card-content">
            <div class="cv-avatar">
              <div class="cv-avatar-ring">
                <i class="pi pi-file-pdf" style="font-size: 2.2rem; color: var(--text-primary)"></i>
              </div>
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

        <!-- Certificates -->
        <div class="cv-certificates">
          <h3 class="certs-title">Certifications</h3>
          <div class="certs-grid">
            <a v-for="cert in certificates" :key="cert.name" :href="cert.file" target="_blank" class="cert-card glass-card">
              <div class="cert-image-wrapper">
                <iframe :src="cert.file + '#toolbar=0&navpanes=0&scrollbar=0'" class="cert-iframe" scrolling="no" tabindex="-1"></iframe>
                <div class="cert-overlay-glass"></div>
              </div>
              <div class="cert-info">
                <div class="cert-name">{{ cert.name }}</div>
                <div class="cert-view">
                  <i :class="cert.icon" style="margin-right: 4px; color: var(--text-secondary)"></i>
                  View Certificate <i class="pi pi-external-link" style="font-size: 0.65rem; margin-left: 2px"></i>
                </div>
              </div>
            </a>
          </div>
        </div>

        <!-- Contact CTA -->
        <div class="contact-cta glass-card">
          <div class="cta-text">
            <h3 class="cta-title">Got a project in mind?</h3>
            <p class="cta-desc">I'm open to full-time roles, freelance work, or just a good tech conversation. Either way, say hi.</p>
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
import { profile, cvStats, certificates } from '@/data'

const currentMonth = new Intl.DateTimeFormat('id-ID', { month: 'long', year: 'numeric' }).format(new Date())

const stats = cvStats
</script>

<style scoped>
.cv-section {
  background: var(--bg-primary);
}

.cv-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1100px;
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

.cv-pattern {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: radial-gradient(var(--text-primary) 1px, transparent 1px);
  background-size: 24px 24px;
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
  width: 80px; height: 80px;
  border-radius: 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--glass-border);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 24px rgba(0,0,0,0.2);
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
  color: var(--text-primary);
  background: var(--bg-secondary);
  border: 1px solid var(--glass-border);
  padding: 5px 14px;
  border-radius: 99px;
  margin-bottom: 10px;
}

.cv-name {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-primary);
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

.cv-chip i { font-size: 0.72rem; color: var(--text-secondary); }

/* Action Buttons */
.cv-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

:deep(.download-btn) {
  background: var(--text-primary) !important;
  color: var(--bg-primary) !important;
  border: none !important;
  border-radius: 8px !important;
  padding: 14px 36px !important;
  font-size: 0.95rem !important;
  font-weight: 600 !important;
  transition: var(--transition) !important;
}
:deep(.download-btn:hover) {
  background: var(--text-secondary) !important;
  transform: translateY(-2px) !important;
}

:deep(.preview-btn) {
  border-radius: 8px !important;
  padding: 14px 32px !important;
  font-size: 0.95rem !important;
  font-weight: 500 !important;
  border-color: var(--glass-border) !important;
  color: var(--text-primary) !important;
  transition: var(--transition) !important;
}
:deep(.preview-btn:hover) {
  border-color: var(--text-secondary) !important;
  background: var(--bg-card-hover) !important;
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

/* Certificates */
.cv-certificates {
  margin-top: 10px;
}
.certs-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--text-primary);
}
.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
.cert-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  transition: transform 0.3s ease, border-color 0.3s ease;
  overflow: hidden;
  padding: 0;
}
.cert-card:hover {
  transform: translateY(-4px);
  border-color: var(--text-secondary);
}

.cert-image-wrapper {
  width: 100%;
  height: 180px;
  position: relative;
  overflow: hidden;
  background: #f8f8f8;
  border-bottom: 1px solid var(--glass-border);
}

.cert-iframe {
  width: 500%;
  height: 500%;
  transform: scale(0.2);
  transform-origin: 0 0;
  border: none;
  pointer-events: none;
}

.cert-overlay-glass {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 60%, rgba(20,20,20,0.8));
  z-index: 10;
  pointer-events: none;
}

.cert-info {
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: var(--bg-card);
}

.cert-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.cert-view {
  font-size: 0.75rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  font-weight: 500;
}

/* Contact CTA */
.contact-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 32px 40px;
  background: var(--bg-card) !important;
  border: 1px solid var(--glass-border) !important;
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
  background: var(--text-primary) !important;
  color: var(--bg-primary) !important;
  border: none !important;
  border-radius: 8px !important;
  font-weight: 500 !important;
}
:deep(.email-btn:hover) {
  background: var(--text-secondary) !important;
  transform: translateY(-2px) !important;
}

:deep(.linkedin-btn) {
  border-radius: 8px !important;
  border-color: var(--glass-border) !important;
  color: var(--text-primary) !important;
  font-weight: 500 !important;
}
:deep(.linkedin-btn:hover) {
  border-color: var(--text-secondary) !important;
  background: var(--bg-card-hover) !important;
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
