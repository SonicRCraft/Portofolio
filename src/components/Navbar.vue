<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container nav-inner">
      <a href="#hero" class="nav-logo">
        <span class="logo-bracket">&lt;</span>
        <span class="logo-text">Porto</span>
        <span class="logo-bracket">/&gt;</span>
      </a>

      <ul class="nav-links" :class="{ open: menuOpen }">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="nav-link" @click="menuOpen = false">
            <span class="nav-num">{{ link.num }}</span>
            {{ link.label }}
          </a>
        </li>
        <li>
          <Button label="Hire Me" icon="pi pi-send" size="small" class="hire-btn" @click="menuOpen = false" as="a" href="#cv" />
        </li>
      </ul>

      <button class="hamburger" :class="{ active: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Button from 'primevue/button'

const isScrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { num: '01', label: 'About', href: '#about' },
  { num: '02', label: 'Experience', href: '#experience' },
  { num: '03', label: 'Skills', href: '#skills' },
  { num: '04', label: 'Projects', href: '#projects' },
  { num: '05', label: 'CV', href: '#cv' },
]

const handleScroll = () => { isScrolled.value = window.scrollY > 60 }
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 22px 0;
  transition: all 0.4s ease;
}

.navbar.scrolled {
  background: rgba(8, 8, 16, 0.88);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(139,92,246,0.1);
  padding: 14px 0;
  box-shadow: 0 4px 40px rgba(0,0,0,0.4);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: var(--font-mono);
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--text-primary);
  transition: var(--transition);
  letter-spacing: -0.02em;
}
.logo-bracket { color: var(--accent-primary); }
.nav-logo:hover { opacity: 0.75; }

.nav-links {
  display: flex;
  list-style: none;
  align-items: center;
  gap: 4px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 16px;
  border-radius: 99px;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  transition: var(--transition);
}
.nav-link:hover {
  color: var(--text-primary);
  background: rgba(255,255,255,0.05);
}
.nav-num {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--accent-primary);
  opacity: 0.7;
}

:deep(.hire-btn) {
  background: var(--accent-gradient) !important;
  border: none !important;
  font-size: 0.85rem !important;
  padding: 8px 20px !important;
  box-shadow: 0 4px 20px rgba(139,92,246,0.35) !important;
  margin-left: 8px;
}
:deep(.hire-btn:hover) {
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 32px rgba(139,92,246,0.55) !important;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 200;
}
.hamburger span {
  display: block;
  width: 24px; height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: var(--transition);
}
.hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 768px) {
  .hamburger { display: flex; }
  .nav-links {
    position: fixed;
    inset: 0;
    background: rgba(8, 8, 16, 0.97);
    backdrop-filter: blur(24px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    z-index: 100;
  }
  .nav-links.open { opacity: 1; pointer-events: all; }
  .nav-link { font-size: 1.3rem; padding: 14px 40px; }
}
</style>
