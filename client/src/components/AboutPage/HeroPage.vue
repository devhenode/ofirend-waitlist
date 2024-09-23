<template>
  <div class="px-6 py-8 mb-16">
   <div>
     <h2 class="pb-2 text-blue-300 font-bold">Who are we</h2>
 
     <h1 class="pb-2 text-blue-950 font-bold">Learn and Earn</h1>
 
     <p class="pb-8 text-gray-500">
       Ofriend Edu is a dynamic online platform connecting 
       individuals for collaborative learning, problem-solving, 
       and earning opportunities. We facilitate idea sharing, skill development,
       and mutual support among like-minded learners, creating a vibrant community for growth, 
       learning, and success.
 
     </p>
   </div>

   <div class="rounded ">
    <img :src="image" alt="" srcset="">
   </div>
  </div> 
 </template>

<script setup>
  import image from '@/assets/hero-image.png'
</script>