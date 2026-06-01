<template>
  <section id="experience" class="section">
    <div class="container">
      <div class="section-header">
        <!-- <span class="section-label">Journey</span> -->
        <h2 class="section-title">Work <span>Experience</span></h2>
        <!-- <p class="section-desc">Track record of my professional journey that shaped me into the developer I am today.</p> -->
      </div>

      <Timeline :value="experiences" class="exp-timeline" align="alternate">
        <template #marker="slotProps">
          <div class="timeline-marker-custom" :style="{ background: slotProps.item.color }">
            <i :class="slotProps.item.icon"></i>
          </div>
        </template>

        <template #content="slotProps">
          <Card class="exp-card" :class="{ 'is-visible': slotProps.item.visible }">
            <template #header>
              <div class="exp-card-header" :style="{ background: slotProps.item.gradient }">
                <Tag :value="slotProps.item.type" :style="{ background: slotProps.item.color + '20', color: slotProps.item.color, border: '1px solid ' + slotProps.item.color + '40' }" />
                <span class="exp-period">
                  <i class="pi pi-calendar" style="font-size:0.75rem"></i>
                  {{ slotProps.item.period }}
                </span>
              </div>
            </template>
            <template #title>{{ slotProps.item.role }}</template>
            <template #subtitle>
              <span class="exp-company">
                <i class="pi pi-building" style="font-size:0.78rem; margin-right:5px"></i>
                {{ slotProps.item.company }}
                <span class="exp-location">
                  <i class="pi pi-map-marker" style="font-size:0.72rem; margin-left:10px; margin-right:4px"></i>
                  {{ slotProps.item.location }}
                </span>
              </span>
            </template>
            <template #content>
              <p class="exp-desc">{{ slotProps.item.desc }}</p>
              <div class="exp-tags">
                <span v-for="tag in slotProps.item.tags" :key="tag" class="skill-tag">{{ tag }}</span>
              </div>
            </template>
          </Card>
        </template>

        <template #opposite="slotProps">
          <div class="exp-year">{{ slotProps.item.year }}</div>
        </template>
      </Timeline>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Timeline from 'primevue/timeline'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import { experiences as experienceData } from '@/data'

// Tambahkan reactive visible flag ke setiap item
const experiences = ref(experienceData.map(e => ({ ...e, visible: false })))

const sectionRef = ref(null)
let observer = null

onMounted(() => {
  // Observe the whole section; stagger-reveal cards when section enters viewport
  const section = document.querySelector('#experience')
  if (!section) return

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        experiences.value.forEach((_, i) => {
          setTimeout(() => {
            experiences.value[i].visible = true
          }, i * 180)
        })
        observer.disconnect()
      }
    },
    { threshold: 0.1 }
  )
  observer.observe(section)
})

onUnmounted(() => { if (observer) observer.disconnect() })
</script>

<style scoped>
:deep(.exp-timeline) {
  padding: 0;
}

:deep(.p-timeline-event-opposite) {
  flex: 0 0 120px;
  max-width: 120px;
}

:deep(.p-timeline-event-content) {
  padding-bottom: 40px !important;
}

:deep(.p-timeline-event-connector) {
  background: linear-gradient(to bottom, rgba(139,92,246,0.4), rgba(6,182,212,0.2)) !important;
  width: 2px !important;
}

.timeline-marker-custom {
  width: 42px; height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.9rem;
  box-shadow: 0 0 0 6px rgba(139,92,246,0.1), 0 4px 16px rgba(0,0,0,0.3);
  flex-shrink: 0;
}

.exp-year {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--accent-primary);
  background: rgba(139,92,246,0.08);
  border: 1px solid rgba(139,92,246,0.2);
  padding: 6px 14px;
  border-radius: 99px;
  text-align: center;
  white-space: nowrap;
}

:deep(.exp-card) {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease, border-color 0.3s, box-shadow 0.3s, background 0.3s !important;
}

:deep(.exp-card.is-visible) {
  opacity: 1;
  transform: translateY(0);
}

:deep(.exp-card .p-card-body) { padding: 0 !important; }

.exp-card-header {
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--radius-md) var(--radius-md) 0 0;
  border-bottom: 1px solid var(--glass-border);
}

.exp-period {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
}

:deep(.exp-card .p-card-title) {
  padding: 16px 24px 4px !important;
  margin: 0 !important;
}

:deep(.exp-card .p-card-subtitle) {
  padding: 0 24px 12px !important;
}

.exp-company {
  display: flex;
  align-items: center;
  font-size: 0.88rem;
  color: var(--text-secondary);
}

.exp-location { color: var(--text-muted); font-size: 0.82rem; }

:deep(.exp-card .p-card-content) {
  padding: 0 24px 24px !important;
}

.exp-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 16px;
}

.exp-tags { display: flex; flex-wrap: wrap; gap: 7px; }

@media (max-width: 768px) {
  :deep(.p-timeline-event-opposite) { display: none !important; }
  :deep(.p-timeline) { padding-left: 0; }
}
</style>
