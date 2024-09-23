<script setup>
import NavBar from '@/components/AboutPage/NavBar.vue';
import HeroPage from '@/components/AboutPage/HeroPage.vue';
import VisionPage from '@/components/AboutPage/VisionPage.vue';
import ChallengePage from '@/components/AboutPage/ChallengePage.vue';
import SlideFour from '@/components/AboutPage/SlideFour.vue';
import SlideFive from '@/components/AboutPage/SlideFive.vue';
</script>

<template>
    <main class="w-screen">
      <nav-bar></nav-bar>
      <hr>
      <hero-page></hero-page>
      <vision-page></vision-page>
      <challenge-page></challenge-page>
      <slide-four></slide-four>
      <slide-five></slide-five>
    </main>
</template>