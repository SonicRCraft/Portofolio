<template>
  <section id="certificates" class="section certs-section">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Credentials</span>
        <h2 class="section-title">Licenses & <span>Certifications</span></h2>
        <p class="section-desc">
          Official credentials and verified certifications across cloud infrastructure, development, and enterprise technologies.
        </p>
      </div>

      <!-- Filter Controls -->
      <div class="certs-filter-row">
        <button
          v-for="cat in filterOptions"
          :key="cat"
          class="filter-pill"
          :class="{ active: activeFilter === cat }"
          @click="activeFilter = cat"
        >
          {{ cat }}
          <span class="filter-count">{{ getCount(cat) }}</span>
        </button>
      </div>

      <!-- Certs Grid -->
      <div class="certs-wrapper">
        <TransitionGroup name="cert-fade" tag="div" class="certs-grid">
          <a
            v-for="cert in filteredCertificates"
            :key="cert.name"
            :href="cert.file"
            target="_blank"
            rel="noopener noreferrer"
            class="cert-card glass-card"
          >
            <!-- Preview Frame -->
            <div class="cert-image-wrapper">
              <iframe
                :src="cert.file + '#toolbar=0&navpanes=0&scrollbar=0'"
                class="cert-iframe"
                scrolling="no"
                tabindex="-1"
                title="Certificate Preview"
              ></iframe>
              <div class="cert-overlay-glass"></div>

              <!-- Badges over preview -->
              <div class="cert-top-bar">
                <span class="cert-issuer-badge">
                  <i :class="cert.icon" :style="{ color: cert.color || 'var(--text-primary)' }"></i>
                  {{ cert.badge }}
                </span>
                <span class="cert-status-badge">
                  <span class="verified-dot"></span>
                  Verified
                </span>
              </div>

              <!-- Hover prompt -->
              <div class="cert-hover-prompt">
                <span class="hover-btn">
                  <i class="pi pi-external-link"></i>
                  View Certificate
                </span>
              </div>
            </div>

            <!-- Content / Meta -->
            <div class="cert-info">
              <div class="cert-meta-row">
                <span class="cert-issuer-name">{{ cert.issuer }}</span>
                <span class="cert-date-chip">{{ cert.date }}</span>
              </div>

              <h3 class="cert-name">{{ cert.name }}</h3>

              <div class="cert-footer">
                <span class="cert-view-link">
                  <span>Open Document</span>
                  <i class="pi pi-arrow-up-right"></i>
                </span>
                <span class="cert-format-badge">
                  <i class="pi pi-file-pdf"></i> PDF
                </span>
              </div>
            </div>
          </a>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { certificates } from '@/data'

const activeFilter = ref('All')
const filterOptions = ['All', 'Oracle Cloud', 'OutSystems']

const getCount = (cat) => {
  if (cat === 'All') return certificates.length
  return certificates.filter(c => c.issuerCategory === cat).length
}

const filteredCertificates = computed(() => {
  if (activeFilter.value === 'All') return certificates
  return certificates.filter(c => c.issuerCategory === activeFilter.value)
})
</script>

<style scoped>
.certs-section {
  background: var(--bg-primary);
  border-top: 1px solid rgba(255, 255, 255, 0.03);
}

.certs-wrapper {
  max-width: 1440px;
  margin: 0 auto;
}

/* Filter */
.certs-filter-row {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.filter-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border-radius: 99px;
  font-family: var(--font-main);
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid var(--glass-border);
  background: var(--bg-card);
  color: var(--text-secondary);
  cursor: pointer;
  transition: var(--transition);
}

.filter-pill:hover {
  color: var(--text-primary);
  border-color: rgba(255, 255, 255, 0.2);
  background: var(--bg-card-hover);
}

.filter-pill.active {
  background: var(--text-primary);
  color: var(--bg-primary);
  border-color: var(--text-primary);
}

.filter-count {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  opacity: 0.85;
  padding: 1px 7px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.08);
}

.filter-pill.active .filter-count {
  background: rgba(0, 0, 0, 0.15);
  color: var(--bg-primary);
}

/* Grid */
.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 28px;
}

/* Card */
.cert-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--glass-border);
  background: var(--bg-card);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.3s ease,
              box-shadow 0.3s ease;
  position: relative;
}

.cert-card:hover {
  transform: translateY(-6px);
  border-color: var(--glass-border-hover);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
}

/* Image preview container */
.cert-image-wrapper {
  width: 100%;
  height: 240px;
  position: relative;
  overflow: hidden;
  background: #0f0f0f;
  border-bottom: 1px solid var(--glass-border);
}

.cert-iframe {
  width: 500%;
  height: 500%;
  transform: scale(0.2);
  transform-origin: 0 0;
  border: none;
  pointer-events: none;
  background: #ffffff;
}

.cert-overlay-glass {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(10, 10, 10, 0.08) 40%, rgba(15, 15, 15, 0.85) 100%);
  z-index: 2;
  pointer-events: none;
}

/* Badges */
.cert-top-bar {
  position: absolute;
  top: 14px;
  left: 14px;
  right: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  pointer-events: none;
}

.cert-issuer-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-primary);
  background: rgba(14, 14, 14, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 5px 12px;
  border-radius: 99px;
}

.cert-status-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.72rem;
  font-family: var(--font-mono);
  color: #22c55e;
  background: rgba(34, 197, 94, 0.12);
  border: 1px solid rgba(34, 197, 94, 0.3);
  padding: 4px 10px;
  border-radius: 99px;
  backdrop-filter: blur(8px);
}

.verified-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 6px #22c55e;
}

/* Hover Overlay */
.cert-hover-prompt {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
  opacity: 0;
  transition: opacity 0.25s ease;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
}

.cert-card:hover .cert-hover-prompt {
  opacity: 1;
}

.hover-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #ffffff;
  background: rgba(20, 20, 20, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 9px 20px;
  border-radius: 99px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

/* Info Section */
.cert-info {
  padding: 24px 26px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: var(--bg-card);
  flex-grow: 1;
  justify-content: space-between;
}

.cert-meta-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
}

.cert-issuer-name {
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-weight: 500;
  letter-spacing: 0.02em;
}

.cert-date-chip {
  color: var(--text-secondary);
  font-size: 0.72rem;
  background: rgba(255, 255, 255, 0.04);
  padding: 3px 9px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.07);
}

.cert-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.35;
  letter-spacing: -0.01em;
}

.cert-footer {
  margin-top: 10px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cert-view-link {
  font-size: 0.84rem;
  color: var(--text-secondary);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  transition: color 0.2s ease;
}

.cert-card:hover .cert-view-link {
  color: var(--text-primary);
}

.cert-card:hover .cert-view-link i {
  transform: translate(2px, -2px);
  transition: transform 0.2s ease;
}

.cert-format-badge {
  font-size: 0.72rem;
  color: var(--text-muted);
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: var(--font-mono);
}

/* Animations */
.cert-fade-enter-active,
.cert-fade-leave-active {
  transition: all 0.3s ease;
}
.cert-fade-enter-from,
.cert-fade-leave-to {
  opacity: 0;
  transform: scale(0.96);
}

/* Responsive */
@media (max-width: 1200px) {
  .certs-grid {
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .certs-grid {
    grid-template-columns: 1fr;
  }
  .cert-image-wrapper {
    height: 210px;
  }
  .cert-info {
    padding: 20px 22px;
  }
}
</style>
