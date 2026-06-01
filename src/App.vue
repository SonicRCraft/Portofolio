<template>
  <div class="bg-grid"></div>
  <div class="bg-orbs">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
  </div>
  <Navbar />
  <main>
    <HeroAbout />
    <Experience />
    <Skills />
    <Projects />
    <CV />
  </main>
  <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroAbout from './components/HeroAbout.vue'
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import CV from './components/CV.vue'
import Footer from './components/Footer.vue'
</script>
