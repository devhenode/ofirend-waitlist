<template>
  <div class="px-6 py-8 mb-16 md:px-0 md:mb-4 md:flex md:justify-center md:items-center">
   <div class="md:px-8 md:items-center">
     <h2 class="pb-2 text-blue-light font-bold md:text-xl">Who are we</h2>

     <h1 class="pb-2 text-lg md:text-4xl text-blue-deepp font-">Learn and Earn</h1>
     <p class="pb-8 md:pb-0  text-gray md:w-2/3">
      Ofriend Edu is a dynamic online platform connecting individuals for collaborative learning, problem-solving, and earning opportunities. We facilitate idea sharing, skill development, and mutual support among like-minded learners, creating a vibrant community for growth, learning, and success.
     </p>
   </div>

   <div class="rounded">
    <img :src="image"  class="md:hidden" alt="" srcset="">
    <img :src="HeroImage" class="hidden md:block md:w-[2500px] md:px-8 md:right-0" alt="">
   </div>
  </div> 
 </template>

<script setup>
  import image from '@/assets/hero-image.png'
  import HeroImage from '@/assets/hero-image-web.svg'
</script>