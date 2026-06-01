<template>
  <footer class="footer">
    <div class="footer-glow"></div>
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">
          <a href="#hero" class="footer-logo">
            <span class="logo-bracket">&lt;</span>
            <span>Porto</span>
            <span class="logo-bracket">/&gt;</span>
          </a>
          <p class="footer-tagline">Building meaningful digital experiences, one line of code at a time.</p>
          <div class="footer-socials">
            <a :href="profile.github" target="_blank" class="social-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a :href="profile.linkedin" target="_blank" class="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.227 24 22.222 0h.003z"/></svg>
            </a>
            <a :href="profile.twitter" target="_blank" class="social-link" aria-label="Twitter/X">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        <nav class="footer-nav">
          <div class="footer-nav-col" v-for="col in navCols" :key="col.title">
            <h4 class="footer-nav-title">{{ col.title }}</h4>
            <ul>
              <li v-for="link in col.links" :key="link.label">
                <a :href="link.href" class="footer-nav-link">{{ link.label }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="footer-bottom">
        <p class="footer-copy">
          © {{ currentYear }} {{ profile.name }} — Made with
          <span class="heart">♥</span>
          using Vue 3 + Vite
        </p>
        <a href="#hero" class="back-to-top" aria-label="Back to top">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { profile } from '@/data'

const currentYear = new Date().getFullYear()

const navCols = [
  {
    title: 'Navigation',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'CV', href: '#cv' },
    ],
  },
  {
    title: 'Others',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Open Source', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
]
</script>

<style scoped>
.footer {
  position: relative;
  padding: 72px 0 0;
  border-top: 1px solid var(--glass-border);
  overflow: hidden;
}

.footer-glow {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px; height: 300px;
  background: radial-gradient(ellipse, rgba(139, 92, 246, 0.08), transparent 70%);
  pointer-events: none;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 48px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.footer-brand {
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-logo {
  font-family: var(--font-mono);
  font-size: 1.3rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--text-primary);
  display: inline-block;
}

.logo-bracket { color: var(--accent-primary); }

.footer-tagline {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.7;
}

.footer-socials {
  display: flex;
  gap: 10px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px; height: 40px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 1px solid var(--glass-border);
  color: var(--text-muted);
  text-decoration: none;
  transition: var(--transition);
}

.social-link:hover {
  color: var(--accent-primary);
  border-color: var(--accent-primary);
  background: rgba(139, 92, 246, 0.1);
  transform: translateY(-2px);
}

.footer-nav {
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
}

.footer-nav-col { min-width: 120px; }

.footer-nav-title {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  font-family: var(--font-mono);
  margin-bottom: 16px;
}

.footer-nav-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }

.footer-nav-link {
  font-size: 0.88rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: var(--transition);
  display: inline-block;
}

.footer-nav-link:hover {
  color: var(--accent-primary);
  transform: translateX(4px);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-top: 1px solid var(--glass-border);
}

.footer-copy {
  font-size: 0.82rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.heart {
  color: #ef4444;
  animation: heartbeat 1.5s ease infinite;
  display: inline-block;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.3); }
}

.back-to-top {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px; height: 40px;
  border-radius: 50%;
  background: var(--accent-gradient);
  color: white;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(139, 92, 246, 0.4);
  transition: var(--transition);
}

.back-to-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(139, 92, 246, 0.6);
}

@media (max-width: 640px) {
  .footer-inner { flex-direction: column; }
  .footer-brand { max-width: 100%; }
  .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
}
</style>
