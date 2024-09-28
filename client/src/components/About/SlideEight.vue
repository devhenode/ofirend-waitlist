<template>
  <main>
    <div class="mb-9 md:hidden">
      <img :src="image" alt="">
    </div>

    <div class="hidden md:block mb-14">
      <img :src="WebImage" class="md:w-screen" alt="" srcset="">
    </div>
  </main>
</template>

<script setup>
import image from '@/assets/meet_the_team.png'
import WebImage from '@/assets/meet_the_team-web.svg'
</script>