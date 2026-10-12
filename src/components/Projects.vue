<template>
  <section id="projects" class="section systems-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header-row">
        <div class="section-header-left">
          <span class="section-tag">// 02 / SELECTED ARCHITECTURE &amp; SYSTEMS</span>
          <h2 class="section-heading">Selected Architecture &amp; Systems</h2>
        </div>
        <span class="section-meta">LOGISTICS, INVENTORY &amp; MOBILE SYSTEMS</span>
      </div>

      <!-- Featured System 01 (Full-Stack Decoupled System) -->
      <div v-if="featuredProject" class="featured-system-card dark-panel animate-fade-up">
        <div class="system-tag-line">
          <span class="system-index-tag">{{ featuredProject.systemTag }}</span>
          <span class="system-status-pill">{{ featuredProject.statusNote }}</span>
        </div>

        <div class="featured-header-content">
          <h3 class="system-title">{{ featuredProject.title }}</h3>
          <p class="system-desc">{{ featuredProject.desc }}</p>
        </div>

        <!-- Key Metrics Row -->
        <div class="system-metrics-row">
          <div
            v-for="metric in featuredProject.metrics"
            :key="metric.label"
            class="sys-metric-box"
          >
            <span class="sys-metric-label">{{ metric.label }}</span>
            <span class="sys-metric-value">{{ metric.value }}</span>
          </div>
        </div>

        <!-- Tags -->
        <div class="system-tags-wrap">
          <span v-for="tag in featuredProject.tags" :key="tag" class="mono-chip">
            {{ tag }}
          </span>
        </div>

        <!-- Actions: Frontend & Backend GitHub Links -->
        <div class="system-actions-row">
          <a
            v-if="featuredProject.githubFE"
            :href="featuredProject.githubFE"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-action"
          >
            Frontend Repo (React.js) <span>↗</span>
          </a>
          <a
            v-if="featuredProject.githubBE"
            :href="featuredProject.githubBE"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-action btn-action-primary"
          >
            Backend Repo (FastAPI) <span>↗</span>
          </a>
        </div>
      </div>

      <!-- Secondary Systems Grid (2 Columns) -->
      <div class="secondary-systems-grid">
        <div
          v-for="project in secondaryProjects"
          :key="project.id"
          class="sub-system-card dark-panel animate-fade-up"
        >
          <div class="system-tag-line">
            <span class="system-index-tag">{{ project.systemTag }}</span>
            <span class="system-status-pill">{{ project.statusNote }}</span>
          </div>

          <h3 class="sub-system-title">{{ project.title }}</h3>
          <p class="system-desc">{{ project.desc }}</p>

          <!-- Key Metrics -->
          <div class="system-metrics-row">
            <div
              v-for="metric in project.metrics"
              :key="metric.label"
              class="sys-metric-box"
            >
              <span class="sys-metric-label">{{ metric.label }}</span>
              <span class="sys-metric-value">{{ metric.value }}</span>
            </div>
          </div>

          <!-- Tags -->
          <div class="system-tags-wrap">
            <span v-for="tag in project.tags" :key="tag" class="mono-chip">
              {{ tag }}
            </span>
          </div>

          <!-- Actions if any, or status badge -->
          <div class="system-actions-row">
            <span class="archive-status-badge">
              <span class="status-dot-orange"></span>
              {{ project.year }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { projects } from '@/data'

const featuredProject = computed(() => projects.find(p => p.featured) || projects[0])
const secondaryProjects = computed(() => projects.filter(p => p.id !== featuredProject.value?.id))
</script>

<style scoped>
.systems-section {
  background: var(--bg-primary);
  width: 100%;
}

/* Featured System Card */
.featured-system-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 38px 42px;
  background: #111116;
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  margin-bottom: 28px;
  width: 100%;
  transition: border-color 0.25s ease;
}

.featured-system-card:hover {
  border-color: rgba(255, 255, 255, 0.15);
}

.system-tag-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.system-index-tag {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--accent-orange);
  letter-spacing: 0.06em;
}

.system-status-pill {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--glass-border);
  padding: 3px 10px;
  border-radius: 99px;
  letter-spacing: 0.04em;
}

.featured-header-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.system-title {
  font-family: var(--font-serif);
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.015em;
  margin: 0;
  line-height: 1.25;
}

.system-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
  max-width: 1100px;
}

/* Metrics Row */
.system-metrics-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  padding: 4px 0;
}

.sys-metric-box {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 10px 16px;
  background: #0d0d10;
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-sm);
  min-width: 130px;
}

.sys-metric-label {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  color: var(--text-muted);
  letter-spacing: 0.06em;
}

.sys-metric-value {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-primary);
}

.system-tags-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.system-actions-row {
  display: flex;
  gap: 14px;
  padding-top: 6px;
  align-items: center;
  flex-wrap: wrap;
}

.archive-status-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
}

/* Secondary Systems Grid */
.secondary-systems-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
  width: 100%;
}

.sub-system-card {
  padding: 32px 34px;
  background: #111116;
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: 18px;
  transition: border-color 0.25s ease;
}

.sub-system-card:hover {
  border-color: rgba(255, 255, 255, 0.15);
}

.sub-system-title {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  line-height: 1.3;
}

@media (max-width: 1024px) {
  .featured-system-card {
    padding: 24px;
  }
  .secondary-systems-grid {
    grid-template-columns: 1fr;
  }
  .sub-system-card {
    padding: 24px;
  }
}
</style>
