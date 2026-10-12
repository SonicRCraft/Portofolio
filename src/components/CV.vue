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
            <div class="contact-detail-row">
              <span class="detail-label">EMAIL</span>
              <a :href="'mailto:' + profile.email" class="detail-link">
                {{ profile.email }} <span>↗</span>
              </a>
            </div>

            <div class="contact-detail-row">
              <span class="detail-label">LOCATION</span>
              <span class="detail-text">{{ profile.location }} (GMT+7)</span>
            </div>

            <div class="contact-detail-row">
              <span class="detail-label">PROFILES</span>
              <div class="detail-links-group">
                <a :href="profile.github" target="_blank" class="detail-link">GitHub <span>↗</span></a>
                <span class="sep">·</span>
                <a :href="profile.linkedin" target="_blank" class="detail-link">LinkedIn <span>↗</span></a>
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
            <h3 class="form-title">Project Brief or General Enquiry</h3>
            <span class="form-subtitle">// DIRECT TO INBOX</span>
          </div>

          <form @submit.prevent="handleSubmit" class="enquiry-form">
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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { profile } from '@/data'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

function handleSubmit() {
  const subject = encodeURIComponent(`Engineering Enquiry from ${form.name || 'Visitor'}`)
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail / Company: ${form.email}\n\nMessage:\n${form.message}`
  )
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
}
</script>

<style scoped>
.contact-section {
  background: var(--bg-primary);
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: flex-start;
}

/* Left Narrative */
.contact-narrative {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.contact-pitch {
  font-family: var(--font-serif);
  font-size: 1.35rem;
  font-weight: 400;
  color: var(--text-primary);
  line-height: 1.6;
  letter-spacing: -0.01em;
  margin: 0;
}

.contact-details-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 12px;
  border-top: 1px solid var(--glass-border);
}

.contact-detail-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.detail-label {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 0.08em;
}

.detail-text {
  font-family: var(--font-mono);
  font-size: 0.84rem;
  color: var(--text-secondary);
}

.detail-link {
  font-family: var(--font-mono);
  font-size: 0.84rem;
  color: var(--text-primary);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s ease;
}

.detail-link span {
  color: var(--accent-orange);
  font-size: 0.8rem;
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

@media (max-width: 900px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .contact-form-card {
    padding: 24px 20px;
  }
}
</style>
