<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <!-- Left: Brand / Title -->
      <div class="footer-left">
        <span class="footer-brand">{{ profile.name }}</span>
        <span class="footer-sub">// SOFTWARE ENGINEER</span>
      </div>

      <!-- Center: Colophon -->
      <div class="footer-center">
        <span class="footer-meta">Crafted with Vue 3 &amp; Vite · Jakarta, Indonesia</span>
      </div>

      <!-- Right: Links -->
      <div class="footer-right">
        <a :href="profile.github" target="_blank" class="footer-link">GitHub <span>↗</span></a>
        <a :href="profile.linkedin" target="_blank" class="footer-link">LinkedIn <span>↗</span></a>
        <a href="#about" class="footer-link top-link">Back to Top <span>↑</span></a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { profile } from '@/data'
</script>

<style scoped>
.site-footer {
  background: #070709;
  border-top: 1px solid var(--glass-border);
  padding: 32px 0;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.footer-left {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.footer-brand {
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
}

.footer-sub {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--text-muted);
  letter-spacing: 0.05em;
}

.footer-center {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
}

.footer-right {
  display: flex;
  align-items: center;
  gap: 18px;
}

.footer-link {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  color: var(--text-secondary);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s ease;
}

.footer-link span {
  color: var(--accent-orange);
  font-size: 0.8rem;
}

.footer-link:hover {
  color: var(--text-primary);
}

.top-link {
  color: var(--text-muted);
}
.top-link:hover {
  color: var(--accent-orange);
}

@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
</style>
