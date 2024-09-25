<script setup>
import NavBar from '@/components/AboutPage/NavBar.vue';
import HeroPage from '@/components/AboutPage/HeroPage.vue';
import VisionPage from '@/components/AboutPage/SlideTwo.vue';
import ChallengePage from '@/components/AboutPage/SlideThree.vue';
import SlideFour from '@/components/AboutPage/SlideFour.vue';
import SlideFive from '@/components/AboutPage/SlideFive.vue';
import SlideSix from '@/components/AboutPage/SlideSix.vue';
import SlideSeven from '@/components/AboutPage/SlideSeven.vue';
import SlideEight from '@/components/AboutPage/SlideEight.vue';
import FooterPage from '@/components/FooterPage.vue';
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
      <slide-six></slide-six>
      <slide-seven></slide-seven>
      <slide-eight></slide-eight>
      <footer-page></footer-page>
    </main>
</template>