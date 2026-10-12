<template>

  <Navbar />
  <main>
    <HeroAbout />
    <Experience />
    <Projects />
    <Skills />
    <Certificates />
    <CV />
  </main>
  <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroAbout from './components/HeroAbout.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Certificates from './components/Certificates.vue'
import CV from './components/CV.vue'
import Footer from './components/Footer.vue'
</script>
