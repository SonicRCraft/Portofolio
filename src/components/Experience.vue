<template>
  <section id="experience" class="section exp-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header-row">
        <div class="section-header-left">
          <span class="section-tag">// 01 / WORK EXPERIENCE</span>
          <h2 class="section-heading">Work Experience</h2>
        </div>
        <span class="section-meta">2024 — PRESENT</span>
      </div>

      <!-- Experience Items List -->
      <div class="exp-list">
        <div
          v-for="exp in experiences"
          :key="exp.company + exp.period"
          class="exp-item animate-fade-up"
        >
          <!-- Left Column: Period & Company -->
          <div class="exp-company-col">
            <span class="exp-period-label">{{ exp.period }}</span>
            <h3 class="exp-company-name">{{ exp.company }}</h3>
            <span class="exp-type-tag">{{ exp.type }}</span>
          </div>

          <!-- Right Column: Detail Card -->
          <div class="exp-detail-card dark-panel">
            <div class="detail-header">
              <h4 class="exp-role-title">{{ exp.role }}</h4>
              <span class="exp-loc-badge">
                <i class="pi pi-map-marker"></i>
                {{ exp.location }}
              </span>
            </div>

            <!-- Bullet Points directly from CV -->
            <ul v-if="exp.bulletPoints && exp.bulletPoints.length" class="exp-bullet-list">
              <li v-for="(point, pIdx) in exp.bulletPoints" :key="pIdx" class="exp-bullet-item">
                <span class="bullet-marker">•</span>
                <span class="bullet-text">{{ point }}</span>
              </li>
            </ul>
            <p v-else class="exp-desc-text">{{ exp.desc }}</p>

            <!-- Tags -->
            <div class="exp-tags-row">
              <span v-for="tag in exp.tags" :key="tag" class="mono-chip">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { experiences } from '@/data'
</script>

<style scoped>
.exp-section {
  background: var(--bg-primary);
  width: 100%;
}

.exp-list {
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 100%;
}

.exp-item {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 48px;
  align-items: flex-start;
  width: 100%;
}

/* Left Company Col */
.exp-company-col {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 4px;
}

.exp-period-label {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--accent-orange);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.exp-company-name {
  font-family: var(--font-serif);
  font-size: 1.45rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
  margin: 0;
  line-height: 1.3;
}

.exp-type-tag {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
}

/* Right Detail Card */
.exp-detail-card {
  padding: 28px 32px;
  background: #111116;
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
}

.detail-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.exp-role-title {
  font-family: var(--font-main);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.exp-loc-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.74rem;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--glass-border);
  padding: 4px 12px;
  border-radius: 99px;
}

.exp-loc-badge i {
  font-size: 0.7rem;
  color: var(--accent-orange);
}

.exp-bullet-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.exp-bullet-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.94rem;
  color: var(--text-secondary);
  line-height: 1.68;
}

.bullet-marker {
  color: var(--accent-orange);
  font-weight: 700;
  line-height: 1.68;
}

.bullet-text {
  flex: 1;
}

.exp-desc-text {
  font-size: 0.94rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
}

.exp-tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 6px;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
}

@media (max-width: 960px) {
  .exp-item {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .exp-detail-card {
    padding: 22px;
  }
}
</style>
