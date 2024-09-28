<template>
  <main>
    <div class="bg-[#9DD6E9] md:hidden">
      <div>
        <img :src="image" alt="">
      </div>
    </div>

    <div class="hidden md:block">
      <div class="bg-white">
        <img :src="WebImage" class="mx-auto w-screen" alt="" srcset="">
      </div>
    </div>
  </main>
</template>

<script setup>
import image from '@/assets/Who_we_serve-Portrait.png'
import WebImage from '@/assets/Who_we_serve-desktop.svg' 
</script>