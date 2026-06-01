<template>
  <section id="skills" class="section skills-section">
    <div class="container">
      <div class="section-header">
        <!-- <span class="section-label">Skills</span> -->
        <h2 class="section-title">Tech <span>Skills</span></h2>
        <!-- <p class="section-desc">Technologies and tools I use to build high-quality digital products.</p> -->
      </div>

      <!-- Category Tabs -->
      <div class="skill-tabs">
        <button
          v-for="cat in categories"
          :key="cat.name"
          class="skill-tab"
          :class="{ active: activeCategory === cat.name }"
          :style="activeCategory === cat.name ? { '--tab-color': cat.color } : {}"
          @click="activeCategory = cat.name"
        >
          <span class="tab-icon" v-html="cat.icon"></span>
          {{ cat.name }}
        </button>
      </div>

      <!-- Skills Grid -->
      <div class="skills-panel">
        <TransitionGroup name="skill-list" tag="div" class="skills-chips-grid">
          <div
            v-for="skill in activeSkills"
            :key="skill.name"
            class="skill-chip-card glass-card"
            :style="{ '--chip-color': activeColor }"
          >
            <div class="chip-icon" :style="{ background: activeColor + '15', color: activeColor }">
              <i :class="skill.icon"></i>
            </div>
            <div class="chip-info">
              <span class="chip-name">{{ skill.name }}</span>
              <span class="chip-level" :style="{ color: activeColor }">{{ skill.level }}</span>
            </div>
            <div class="chip-bar-track">
              <div class="chip-bar-fill" :style="{ width: skill.pct + '%', background: activeColor }"></div>
            </div>
          </div>
        </TransitionGroup>
      </div>

      <!-- Top Proficiency bars -->
      <div class="proficiency-section">
        <div class="proficiency-header">
          <h3 class="proficiency-title">Top Proficiencies</h3>
          <span class="proficiency-subtitle">Based on real-world experience &amp; projects</span>
        </div>
        <div class="prof-bars" ref="barsRef">
          <div v-for="skill in topSkills" :key="skill.name" class="prof-item">
            <div class="prof-info">
              <span class="prof-name">{{ skill.name }}</span>
              <span class="prof-pct" :style="{ color: skill.color }">{{ skill.pct }}%</span>
            </div>
            <div class="bar-track">
              <div
                class="bar-fill"
                :style="{
                  width: skill.animated ? skill.pct + '%' : '0%',
                  background: skill.gradient
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { skillCategories, topSkills as topSkillsData } from '@/data'

const activeCategory = ref('Frontend')

const categories = skillCategories

const activeSkills = computed(() => categories.find(c => c.name === activeCategory.value)?.skills ?? [])
const activeColor = computed(() => categories.find(c => c.name === activeCategory.value)?.color ?? '#8b5cf6')

// Import dari data/skills.js + tambahkan animated flag
const topSkills = ref(topSkillsData.map(s => ({ ...s, animated: false })))

const barsRef = ref(null)
let barObserver = null

onMounted(() => {
  if (barsRef.value) {
    barObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Use index to ensure Vue reactivity tracking
          topSkills.value.forEach((_, i) => {
            setTimeout(() => { topSkills.value[i].animated = true }, i * 180)
          })
          barObserver.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    barObserver.observe(barsRef.value)
  }
})

onUnmounted(() => { if (barObserver) barObserver.disconnect() })
</script>

<style scoped>
.skills-section {
  background: radial-gradient(ellipse at center, rgba(139,92,246,0.04) 0%, transparent 70%);
}

/* Tabs */
.skill-tabs {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.skill-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  border-radius: 99px;
  font-family: var(--font-main);
  font-size: 0.88rem;
  font-weight: 600;
  border: 1px solid var(--glass-border);
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: var(--transition);
}

.skill-tab:hover {
  color: var(--text-primary);
  border-color: rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.04);
}

.skill-tab.active {
  color: white;
  border-color: transparent;
  background: linear-gradient(135deg, var(--tab-color, #8b5cf6), color-mix(in srgb, var(--tab-color, #8b5cf6) 60%, #06b6d4));
  box-shadow: 0 4px 20px color-mix(in srgb, var(--tab-color, #8b5cf6) 50%, transparent);
}

.tab-icon { opacity: 0.8; display: flex; }

/* Skills Panel */
.skills-panel { margin-bottom: 64px; min-height: 240px; }

.skills-chips-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.skill-chip-card {
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: default;
  position: relative;
  overflow: hidden;
}

.skill-chip-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--chip-color, #8b5cf6) 0%, transparent 100%);
  opacity: 0;
  transition: var(--transition);
  border-radius: inherit;
}
.skill-chip-card:hover::after { opacity: 0.04; }

.chip-icon {
  width: 40px; height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}

.chip-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.chip-name {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-primary);
}

.chip-level {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.chip-bar-track {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: rgba(255,255,255,0.05);
  border-radius: 0 0 var(--radius-md) var(--radius-md);
}

.chip-bar-fill {
  height: 100%;
  border-radius: 0 0 var(--radius-md) var(--radius-md);
  transition: width 0.8s ease;
  opacity: 0.6;
}

/* Transitions */
.skill-list-enter-active,
.skill-list-leave-active {
  transition: all 0.35s ease;
}
.skill-list-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.skill-list-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
.skill-list-move { transition: transform 0.35s ease; }

/* Proficiency section */
.proficiency-section {
  background: var(--bg-card);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: 40px 48px;
}

.proficiency-header { margin-bottom: 32px; }
.proficiency-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}
.proficiency-subtitle {
  font-size: 0.82rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.prof-bars { display: flex; flex-direction: column; gap: 24px; }

.prof-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}
.prof-name { font-size: 0.9rem; font-weight: 500; color: var(--text-secondary); }
.prof-pct { font-family: var(--font-mono); font-size: 0.82rem; font-weight: 700; }

.bar-track {
  height: 10px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 99px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  border-radius: 99px;
  transition: width 1.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (max-width: 900px) {
  .skills-chips-grid { grid-template-columns: repeat(2, 1fr); }
  .proficiency-section { padding: 28px 24px; }
}
@media (max-width: 580px) {
  .skills-chips-grid { grid-template-columns: 1fr; }
}
</style>
