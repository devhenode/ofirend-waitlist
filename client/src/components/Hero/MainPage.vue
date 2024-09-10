<template>
  <section class="h-svh md:w-full md:overflow-hidden">
    <div>
      <img :src="imge" class="h-svh md:bg-no-repeat absolute md:bg-cover md:w-full" alt="" />

    </div>
    <div class="mx-auto parent grid sm:p-1 md:flex 
      relative sm:justify-between md:px-12"
    >
      <div class="text-area px-5 md:mx-9 md:px-5 
        py-14 md:mt-10"
      >
        <h1 class="text-auto mb-2 text-4xl md:text-7xl font-black text-blue-950 mt-2 leading-tight md:leading-none md:">Why go solo when learning is better <br> together?</h1>
        <p class="text-auto max-w-xs text-md leading-relaxed px-2 py-3 text-blue-1000 md:px-3 md:text-lg md:">Connect with like-minded nerds has never been easier
          
          say hello to a new era of social studying
        </p>
        <div class="p-2 md:py-8 flex space-x-2">
          <input type="email" placeholder="Enter your email" name="" class="block h-8 px-1 py-1 md:px-3 md:py-2 md:h-14 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"> 
          <button class="bg-blue-950 text-[10px] h-8 px-2 py-1 md:text-[20px] md:h-14 md:py-2 md:px-3 font-bold text-white rounded-md md:font-extrabold ">Join Waitlist</button>
        </div> 
        
      </div>

      <div class="mx-auto items-center justify-center text-center md:py-8">
        <img :src="vector"  class="vec md:w-[30%] w-[59%] bottom-1 md:top-[155px] inline absolute  mx-3 md:right-36">
          <img :src="profile" class="prof w-[200px] -top-1 z-10  inline relative mx-9 md:w-[97%] md:top-[-5px] md:right-24" alt="">
        </img>
      </div>

      <div class="right-0 bottom-0 mt-10 absolute animate-bounce">
        <img :src="icon" alt="" srcset="" class="backdrop-opacity">
        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="29" viewBox="0 0 448 512" class="bottom-11 -right-3 relative">
          <path fill="#ffffff" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
      </div>  
        
    </div>
    
    
    <!-- <info-view></info-view> -->
  </section>
  <br>
</template>

<script setup>
import imge from '@/assets/bground.png';
import vector from '@/assets/vector.png';
import profile from '@/assets/girl.png';
import icon from '@/assets/wtvec.png'
// import InfoView from '@/components/Hero/InfoView.vue'
</script>

<style scoped>

</style>
