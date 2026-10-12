<template>
  <header class="site-header" :class="{ scrolled: isScrolled }">
    <div class="container nav-inner">
      <!-- Brand & Status -->
      <div class="nav-left">
        <a href="#about" class="nav-brand">
          <span class="brand-name">{{ profile.name }}</span>
          <span class="brand-role">// SOFTWARE ENGINEER (BACKEND &amp; FULL-STACK)</span>
        </a>

        <div class="status-indicator">
          <span class="status-dot"></span>
          <span class="status-text">Available for roles & projects</span>
        </div>
      </div>

      <!-- Navigation Links -->
      <nav class="nav-menu" :class="{ open: menuOpen }">
        <a href="#experience" class="nav-link" @click="menuOpen = false">Experience</a>
        <a href="#projects" class="nav-link" @click="menuOpen = false">Selected Systems</a>
        <a href="#skills" class="nav-link" @click="menuOpen = false">Capabilities</a>
        <a href="#certificates" class="nav-link" @click="menuOpen = false">Accreditations</a>
        <a href="#contact" class="btn-hire" @click="menuOpen = false">
          Get In Touch <span>↗</span>
        </a>
      </nav>

      <!-- Hamburger toggle on mobile -->
      <button class="hamburger" :class="{ active: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Toggle Navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { profile } from '@/data'

const isScrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(10, 10, 12, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--glass-border);
  padding: 16px 0;
  transition: all 0.3s ease;
}

.site-header.scrolled {
  background: rgba(10, 10, 12, 0.96);
  padding: 12px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.nav-brand {
  display: flex;
  align-items: baseline;
  gap: 10px;
  text-decoration: none;
}

.brand-name {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

.brand-role {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--text-muted);
  letter-spacing: 0.05em;
}

.status-indicator {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px;
  background: rgba(34, 197, 94, 0.06);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 99px;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: #4ade80;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-link {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  color: var(--text-secondary);
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--text-primary);
}

.btn-hire {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.74rem;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  padding: 7px 14px;
  border-radius: var(--radius-sm);
  background: var(--bg-card);
  border: 1px solid var(--glass-border);
  transition: var(--transition);
}

.btn-hire:hover {
  border-color: var(--accent-orange);
  color: var(--accent-orange);
  background: #181822;
}

.btn-hire span {
  font-size: 0.85rem;
  transition: transform 0.2s ease;
}

.btn-hire:hover span {
  transform: translate(2px, -2px);
}

/* Hamburger button */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  z-index: 120;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: var(--transition);
}

.hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 960px) {
  .status-indicator { display: none; }
}

@media (max-width: 820px) {
  .hamburger { display: flex; }
  .nav-menu {
    position: fixed;
    inset: 0;
    background: rgba(10, 10, 12, 0.98);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    z-index: 110;
  }
  .nav-menu.open { opacity: 1; pointer-events: all; }
  .nav-link { font-size: 1.1rem; padding: 10px 24px; }
  .btn-hire { font-size: 0.95rem; padding: 12px 28px; margin-top: 10px; }
}
</style>
