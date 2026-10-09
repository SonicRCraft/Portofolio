<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container nav-inner">
      <a href="#about" class="nav-logo">
        <span class="logo-mark">{{ profile.name.split(' ')[0] }}</span>
      </a>

      <ul class="nav-links" :class="{ open: menuOpen }">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="nav-link" @click="menuOpen = false">
            {{ link.label }}
          </a>
        </li>
        <li>
          <a href="#cv" class="hire-btn-raw" @click="menuOpen = false">Let's talk →</a>
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
import { profile } from '@/data'

const isScrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'CV', href: '#cv' },
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
  padding: 20px 0;
  transition: all 0.4s ease;
}

.navbar.scrolled {
  background: var(--bg-primary);
  border-bottom: 1px solid var(--glass-border);
  padding: 14px 0;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  transition: var(--transition);
}

.logo-mark {
  font-family: var(--font-mono);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.03em;
}

.logo-dot {
  width: 6px; height: 6px;
  background: var(--text-primary);
  border-radius: 50%;
  margin-bottom: 2px;
}

.nav-logo:hover { opacity: 0.8; }

.nav-links {
  display: flex;
  list-style: none;
  align-items: center;
  gap: 2px;
}

.nav-link {
  display: block;
  padding: 7px 14px;
  border-radius: var(--radius-sm);
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  transition: var(--transition);
  letter-spacing: 0.01em;
}
.nav-link:hover {
  color: var(--text-primary);
  background: var(--bg-card-hover);
}

.hire-btn-raw {
  display: block;
  padding: 7px 18px;
  margin-left: 6px;
  border-radius: var(--radius-sm);
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  border: 1px solid var(--glass-border);
  background: transparent;
  transition: var(--transition);
  letter-spacing: 0.01em;
}
.hire-btn-raw:hover {
  background: var(--text-primary);
  border-color: var(--text-primary);
  color: var(--bg-primary);
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
  width: 22px; height: 2px;
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
    background: var(--bg-primary);
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
  .hire-btn-raw { font-size: 1.1rem; padding: 12px 36px; margin-left: 0; }
}
</style>

