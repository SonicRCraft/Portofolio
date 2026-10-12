<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header-row">
        <div class="section-header-left">
          <span class="section-tag">// 05 / GET IN TOUCH</span>
          <h2 class="section-heading">Start a Conversation</h2>
        </div>
        <span class="section-meta">PROJECT BRIEF &amp; GENERAL ENQUIRY</span>
      </div>

      <!-- 2-Column Contact Layout -->
      <div class="contact-layout animate-fade-up">
        <!-- Left Side: Narrative & Direct Contacts -->
        <div class="contact-narrative">
          <p class="contact-pitch">
            Open for full-time software engineering roles, backend development, and full-stack projects. Let’s connect and discuss how I can contribute to your engineering goals.
          </p>

          <div class="contact-details-list">
            <!-- Direct Email with Copy & Web Gmail Link (No Outlook Popups) -->
            <div class="contact-detail-row">
              <span class="detail-label">EMAIL</span>
              <div class="email-control-row">
                <a
                  :href="gmailDirectUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="detail-link"
                  title="Open directly in Gmail (Web)"
                >
                  {{ profile.email }} <span>↗</span>
                </a>
                <button
                  type="button"
                  class="btn-copy-chip"
                  @click="copyEmailOnly"
                  :title="copiedEmail ? 'Copied!' : 'Copy Email Address'"
                >
                  <i :class="copiedEmail ? 'pi pi-check' : 'pi pi-copy'"></i>
                  <span>{{ copiedEmail ? 'Copied!' : 'Copy' }}</span>
                </button>
              </div>
            </div>

            <div class="contact-detail-row">
              <span class="detail-label">LOCATION</span>
              <span class="detail-text">{{ profile.location }} (GMT+7)</span>
            </div>

            <div class="contact-detail-row">
              <span class="detail-label">PROFILES</span>
              <div class="detail-links-group">
                <a :href="profile.github" target="_blank" rel="noopener noreferrer" class="detail-link">GitHub <span>↗</span></a>
                <span class="sep">·</span>
                <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer" class="detail-link">LinkedIn <span>↗</span></a>
              </div>
            </div>

            <div class="contact-detail-row">
              <span class="detail-label">RESUME (PDF)</span>
              <a :href="profile.cvFile" download class="detail-link highlight-link">
                Download Complete CV (PDF) <span>↓</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Side: Enquiry Box -->
        <div class="contact-form-card dark-panel">
          <div class="form-header">
            <h3 class="form-title">{{ isSubmitted ? 'Message Prepared' : 'Project Brief or General Enquiry' }}</h3>
            <span class="form-subtitle">{{ isSubmitted ? '// READY TO TRANSMIT' : '// DIRECT TO INBOX' }}</span>
          </div>

          <!-- Active Form View -->
          <form v-if="!isSubmitted" @submit.prevent="handleSubmit" class="enquiry-form">
            <div class="form-field">
              <label for="name" class="field-label">FULL NAME</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                placeholder="e.g. Alex Mercer"
                class="field-input"
              />
            </div>

            <div class="form-field">
              <label for="email" class="field-label">COMPANY / EMAIL</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                placeholder="e.g. alex@company.com"
                class="field-input"
              />
            </div>

            <div class="form-field">
              <label for="message" class="field-label">PROJECT SCOPE OR MESSAGE</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="4"
                placeholder="Outline the scope of your team's backend needs, AI workflow goals, or timelines..."
                class="field-input field-textarea"
              ></textarea>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn-action btn-action-primary submit-btn">
                Send Message <span>↗</span>
              </button>
            </div>
          </form>

          <!-- Prepared / Success View (Never triggers Outlook) -->
          <div v-else class="transmission-ready-panel animate-fade-up">
            <div class="ready-badge-row">
              <span class="status-dot"></span>
              <span class="ready-badge-text">Prepared for {{ profile.name }} &lt;{{ profile.email }}&gt;</span>
            </div>

            <div class="transmission-preview-box">
              <div class="preview-item">
                <span class="prev-k">FROM</span>
                <span class="prev-v">{{ form.name }} ({{ form.email }})</span>
              </div>
              <div class="preview-item">
                <span class="prev-k">NOTE</span>
                <span class="prev-v">{{ form.message }}</span>
              </div>
            </div>

            <div class="delivery-actions-group">
              <a
                :href="gmailComposeUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-action btn-action-primary delivery-btn"
              >
                Open &amp; Send in Gmail (Web) <span>↗</span>
              </a>

              <button
                type="button"
                @click="copyFullTransmission"
                class="btn-action delivery-btn"
              >
                <i :class="copiedTransmission ? 'pi pi-check' : 'pi pi-copy'"></i>
                <span>{{ copiedTransmission ? 'Copied to Clipboard!' : 'Copy Message & Email' }}</span>
              </button>
            </div>

            <button type="button" @click="resetForm" class="btn-reset-form">
              ← Edit or Send Another Message
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { profile } from '@/data'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const isSubmitted = ref(false)
const copiedEmail = ref(false)
const copiedTransmission = ref(false)

const gmailDirectUrl = computed(() => {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`
})

const gmailComposeUrl = computed(() => {
  const subject = encodeURIComponent(`Engineering Enquiry from ${form.name || 'Visitor'}`)
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail / Company: ${form.email}\n\nMessage:\n${form.message}`
  )
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${subject}&body=${body}`
})

function copyEmailOnly() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(profile.email)
    copiedEmail.value = true
    setTimeout(() => {
      copiedEmail.value = false
    }, 2200)
  }
}

function copyFullTransmission() {
  const text = `To: ${profile.email}\nFrom: ${form.name} (${form.email})\nMessage:\n${form.message}`
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
    copiedTransmission.value = true
    setTimeout(() => {
      copiedTransmission.value = false
    }, 2400)
  }
}

function handleSubmit() {
  isSubmitted.value = true
  // Copy to clipboard automatically as a convenience
  copyFullTransmission()
  // Open Gmail Web in a new tab without triggering native Outlook
  if (typeof window !== 'undefined') {
    window.open(gmailComposeUrl.value, '_blank', 'noopener,noreferrer')
  }
}

function resetForm() {
  isSubmitted.value = false
  form.name = ''
  form.email = ''
  form.message = ''
  copiedTransmission.value = false
}
</script>

<style scoped>
.contact-section {
  background: var(--bg-primary);
  width: 100%;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: flex-start;
  width: 100%;
}

/* Left Narrative */
.contact-narrative {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.contact-pitch {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0;
}

.contact-details-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--glass-border);
}

.contact-detail-row {
  display: grid;
  grid-template-columns: 140px 1fr;
  padding: 16px 0;
  border-bottom: 1px solid var(--glass-border);
  align-items: center;
}

.detail-label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
  letter-spacing: 0.06em;
}

.detail-text {
  font-size: 0.94rem;
  color: var(--text-primary);
}

.email-control-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.btn-copy-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--glass-border);
  color: var(--text-secondary);
  padding: 3px 10px;
  border-radius: 99px;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-copy-chip:hover {
  background: rgba(255, 85, 0, 0.1);
  border-color: rgba(255, 85, 0, 0.35);
  color: var(--accent-orange);
}

.detail-link {
  font-family: var(--font-mono);
  font-size: 0.88rem;
  color: var(--text-primary);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s ease;
}

.detail-link span {
  color: var(--accent-orange);
}

.detail-link:hover {
  color: var(--accent-orange);
}

.highlight-link {
  color: var(--accent-orange);
}

.detail-links-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.sep {
  color: var(--text-muted);
}

/* Right Form Card */
.contact-form-card {
  padding: 32px 30px;
  background: #111116;
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  width: 100%;
}

.form-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--glass-border);
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 8px;
}

.form-title {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.form-subtitle {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  color: var(--accent-orange);
  letter-spacing: 0.06em;
}

.enquiry-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field-label {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 0.06em;
}

.field-input {
  width: 100%;
  background: #09090c;
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-sm);
  padding: 10px 14px;
  font-family: var(--font-main);
  font-size: 0.88rem;
  color: var(--text-primary);
  outline: none;
  transition: border-color 0.2s ease;
}

.field-input:focus {
  border-color: var(--accent-orange);
}

.field-input::placeholder {
  color: #4b4b55;
  font-size: 0.82rem;
}

.field-textarea {
  resize: vertical;
  min-height: 96px;
  line-height: 1.5;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  padding-top: 6px;
}

.submit-btn {
  padding: 10px 24px;
  cursor: pointer;
}

/* Prepared / Transmission Ready View */
.transmission-ready-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.ready-badge-row {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: rgba(34, 197, 94, 0.06);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: var(--radius-sm);
  width: fit-content;
}

.ready-badge-text {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: #4ade80;
}

.transmission-preview-box {
  background: #09090c;
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-sm);
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.preview-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.prev-k {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  color: var(--text-muted);
  letter-spacing: 0.06em;
}

.prev-v {
  font-size: 0.88rem;
  color: var(--text-primary);
  line-height: 1.45;
}

.delivery-actions-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.delivery-btn {
  justify-content: center;
  padding: 12px 18px;
  gap: 8px;
  font-size: 0.82rem;
  width: 100%;
}

.btn-reset-form {
  background: none;
  border: none;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  cursor: pointer;
  padding: 6px 0;
  text-align: center;
  transition: color 0.2s ease;
}

.btn-reset-form:hover {
  color: var(--text-primary);
}

@media (max-width: 900px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .contact-form-card {
    padding: 24px 20px;
  }
  .contact-detail-row {
    grid-template-columns: 1fr;
    gap: 6px;
  }
}
</style>
