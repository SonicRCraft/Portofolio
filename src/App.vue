<template>

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
