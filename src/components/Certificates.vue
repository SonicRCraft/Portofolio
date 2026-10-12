<template>
  <section id="certificates" class="section certs-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header-row">
        <div class="section-header-left">
          <span class="section-tag">// 04 / ACCREDITATIONS</span>
          <h2 class="section-heading">Certifications</h2>
        </div>
        <span class="section-meta">OFFICIAL &amp; VERIFIED CREDENTIALS</span>
      </div>

      <!-- Certifications Table / Grid -->
      <div class="certs-table dark-panel animate-fade-up">
        <!-- Table Header (Desktop) -->
        <div class="cert-row cert-header-row">
          <span class="col-code">ID</span>
          <span class="col-name">CREDENTIAL TITLE</span>
          <span class="col-issuer">ISSUING BODY</span>
          <span class="col-action">VERIFICATION</span>
        </div>

        <!-- Table Body Rows -->
        <a
          v-for="(cert, index) in certificates"
          :key="cert.name"
          :href="cert.file"
          target="_blank"
          rel="noopener noreferrer"
          class="cert-row cert-data-row"
        >
          <!-- Code -->
          <span class="col-code cert-code">[ 0{{ index + 1 }} ]</span>

          <!-- Name -->
          <div class="col-name cert-title-cell">
            <span class="cert-name-text">{{ cert.name }}</span>
            <span class="cert-issuer-mobile">{{ cert.issuer }}</span>
          </div>

          <!-- Issuer -->
          <span class="col-issuer cert-issuer-text">{{ cert.issuer }}</span>

          <!-- Action -->
          <div class="col-action cert-link-cell">
            <span class="cert-verify-btn">
              Verified Credential <span>↗</span>
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { certificates } from '@/data'
</script>

<style scoped>
.certs-section {
  background: var(--bg-primary);
}

.certs-table {
  background: #111116;
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.cert-row {
  display: grid;
  grid-template-columns: 90px 1.8fr 1.2fr 180px;
  align-items: center;
  padding: 18px 24px;
  border-bottom: 1px solid var(--glass-border);
  text-decoration: none;
  transition: var(--transition);
}

.cert-row:last-child {
  border-bottom: none;
}

.cert-header-row {
  background: #0d0d10;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 0.08em;
  padding: 14px 24px;
}

.cert-data-row {
  color: inherit;
}

.cert-data-row:hover {
  background: #171720;
  border-color: rgba(245, 158, 11, 0.25);
}

.cert-code {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  color: var(--accent-orange);
  font-weight: 600;
}

.cert-title-cell {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.cert-name-text {
  font-family: var(--font-main);
  font-size: 0.96rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: color 0.2s ease;
}

.cert-data-row:hover .cert-name-text {
  color: var(--accent-orange);
}

.cert-issuer-mobile {
  display: none;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
}

.cert-issuer-text {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-secondary);
}

.cert-link-cell {
  text-align: right;
}

.cert-verify-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: var(--font-mono);
  font-size: 0.74rem;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--glass-border);
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  transition: var(--transition);
}

.cert-data-row:hover .cert-verify-btn {
  color: var(--text-primary);
  border-color: var(--accent-orange);
  background: rgba(245, 158, 11, 0.1);
}

.cert-verify-btn span {
  font-size: 0.82rem;
  color: var(--accent-orange);
}

@media (max-width: 820px) {
  .cert-header-row {
    display: none;
  }
  .cert-row {
    grid-template-columns: 60px 1fr auto;
    gap: 12px;
    padding: 16px 18px;
  }
  .col-issuer {
    display: none;
  }
  .cert-issuer-mobile {
    display: inline;
  }
  .cert-name-text {
    font-size: 0.88rem;
  }
  .cert-verify-btn {
    font-size: 0.7rem;
    padding: 4px 8px;
  }
}
</style>
