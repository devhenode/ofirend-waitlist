<template>
  <main>
    <div class="md:hidden">
      <img :src="image" alt="">
    </div>

    <div class="hidden md:block ">
      <img :src="WebImage" class="w-screen" alt="" srcset="">
    </div>
  </main>
</template>

<script setup>
  import image from '@/assets/Our_collaborators.png'
  import WebImage from '@/assets/Our_collaborators-web.svg'
</script>