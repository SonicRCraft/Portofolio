<template>
  <section id="projects" class="section projects-section">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Portfolio</span>
        <h2 class="section-title">Featured <span>Projects</span></h2>
        <p class="section-desc">Some of the projects I am most proud of — built with passion and attention to detail.</p>
      </div>

      <!-- Filter -->
      <div class="filter-row">
        <SelectButton v-model="activeTab" :options="tabs" class="project-filter" />
      </div>

      <!-- Grid -->
      <TransitionGroup name="proj-list" tag="div" class="projects-grid">
        <div
          v-for="project in filteredProjects"
          :key="project.title"
          class="project-card glass-card"
        >
          <!-- Image Header -->
          <div class="project-image" :style="{ background: project.gradient }">
            <div class="project-mockup">
              <div class="mockup-dots"><span></span><span></span><span></span></div>
              <div class="mockup-icon" :style="{ color: project.accentColor }">
                <i :class="project.piIcon" style="font-size:3rem; opacity:0.7"></i>
              </div>
            </div>
            <div class="project-overlay">
              <Button :href="project.demo" as="a" target="_blank" label="Live Demo" icon="pi pi-external-link" size="small" class="overlay-demo-btn" />
              <Button :href="project.github" as="a" target="_blank" label="GitHub" icon="pi pi-github" size="small" severity="secondary" outlined class="overlay-gh-btn" />
            </div>
            <Tag v-if="project.featured" value="⭐ Featured" class="featured-tag" />
          </div>

          <!-- Body -->
          <div class="project-body">
            <div class="project-meta">
              <span class="project-cat" :style="{ color: project.accentColor }">
                <i :class="project.catIcon" style="font-size:0.75rem"></i>
                {{ project.category }}
              </span>
              <span class="project-year">{{ project.year }}</span>
            </div>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.desc }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="skill-tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </TransitionGroup>

      <div class="cta-row">
        <Button as="a" href="https://github.com" target="_blank" label="View All on GitHub" icon="pi pi-github" outlined class="github-cta-btn" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import SelectButton from 'primevue/selectbutton'
import { projects } from '@/data'

const tabs = ['All', 'Web App', 'Mobile', 'UI/UX']
const activeTab = ref('All')

const filteredProjects = computed(() =>
  activeTab.value === 'All' ? projects : projects.filter(p => p.category === activeTab.value)
)
</script>

<style scoped>
.projects-section {
  background: radial-gradient(ellipse at 80% 50%, rgba(6,182,212,0.04), transparent 60%);
}

.filter-row {
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
}

:deep(.project-filter .p-selectbutton) {
  background: var(--bg-card) !important;
  border: 1px solid var(--glass-border) !important;
  border-radius: 99px !important;
  overflow: hidden;
  padding: 4px !important;
  gap: 2px !important;
}

:deep(.project-filter .p-togglebutton) {
  border-radius: 99px !important;
  font-family: var(--font-main) !important;
  font-size: 0.85rem !important;
  font-weight: 500 !important;
  padding: 8px 22px !important;
  border: none !important;
  color: var(--text-secondary) !important;
  background: transparent !important;
  transition: var(--transition) !important;
}

:deep(.project-filter .p-togglebutton:hover) {
  color: var(--text-primary) !important;
  background: rgba(255,255,255,0.05) !important;
}

:deep(.project-filter .p-togglebutton.p-highlight) {
  background: var(--accent-gradient) !important;
  color: white !important;
  box-shadow: 0 2px 16px rgba(139,92,246,0.3) !important;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 52px;
}

.project-card {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0;
}

.project-image {
  position: relative;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.project-mockup {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.mockup-dots {
  display: flex;
  gap: 5px;
}
.mockup-dots span {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.12);
}

.mockup-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  opacity: 0;
  transition: var(--transition);
}
.project-card:hover .project-overlay { opacity: 1; }

:deep(.overlay-demo-btn) {
  background: var(--accent-gradient) !important;
  border: none !important;
  border-radius: 99px !important;
  font-size: 0.82rem !important;
}

:deep(.overlay-gh-btn) {
  border-radius: 99px !important;
  font-size: 0.82rem !important;
  border-color: rgba(255,255,255,0.3) !important;
  color: white !important;
}

:deep(.overlay-gh-btn:hover) {
  background: rgba(255,255,255,0.1) !important;
}

.featured-tag {
  position: absolute;
  top: 12px; left: 12px;
  background: rgba(139,92,246,0.2) !important;
  color: #c4b5fd !important;
  border: 1px solid rgba(139,92,246,0.35) !important;
  border-radius: 99px !important;
  font-size: 0.72rem !important;
  backdrop-filter: blur(8px);
}

.project-body {
  padding: 20px 22px 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.project-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.project-cat {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.75rem;
  font-family: var(--font-mono);
  font-weight: 600;
}

.project-year {
  font-size: 0.72rem;
  font-family: var(--font-mono);
  color: var(--text-muted);
}

.project-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
}

.project-desc {
  font-size: 0.86rem;
  color: var(--text-secondary);
  line-height: 1.65;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.cta-row { text-align: center; }

:deep(.github-cta-btn) {
  border-radius: 99px !important;
  border-color: var(--glass-border) !important;
  color: var(--text-primary) !important;
  padding: 12px 32px !important;
  font-size: 0.95rem !important;
  font-weight: 600 !important;
}
:deep(.github-cta-btn:hover) {
  border-color: var(--accent-primary) !important;
  color: var(--accent-primary) !important;
  background: rgba(139,92,246,0.06) !important;
}

/* Transition */
.proj-list-enter-active, .proj-list-leave-active { transition: all 0.3s ease; }
.proj-list-enter-from { opacity: 0; transform: scale(0.95) translateY(10px); }
.proj-list-leave-to { opacity: 0; transform: scale(0.95); }
.proj-list-move { transition: transform 0.35s ease; }

@media (max-width: 1024px) { .projects-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .projects-grid { grid-template-columns: 1fr; } }
</style>
