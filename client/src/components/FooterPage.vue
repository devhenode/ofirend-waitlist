<template>
  <!-- Input Box section to collect data -->
  <section class="mx-4 w-[90%] md:mx-20 rounded-3xl bg-white dark:bg-blue-deep ">
    <div class="py-4 md:max-w-full md:py-8 md:px-2">
      <div class=" md:mx-10">
        <h2 class="mb-2 text-sm text-center whitespace-nowrap italic font-bold text-white md:text-5xl">Subscribe to get notified on new updates</h2>
        <p class="mb-8 font-light whitespace-nowrap md:text-2xl md:mb-12 text-center text-[9px] text-white">Stay in touch, so we can reach out to you with our latest <br> news and exclusive offers.</p>
        
        <form @submit.prevent="submitForm">
          <div class="items-center mb-3 space-y-2 max-w-screen-sm flex sm:space-y-0">
            <div class="relative w-5/6 md:w-[40%] mx-auto">

              <div>
                <label for="name" class="hidden mb-2 text-sm font-medium">Name</label>
                <input 
                  class="p-2 mb-2 md:p-3 text-sm md:pl-4 md:text-lg w-full text-black rounded-xl border border-gray focus:ring-primary-500 focus:border-primary-500 bg-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  type="text" 
                  placeholder="Enter your name"
                  v-model="name" 
                  id="name"
                  
                >
              </div>
              <label for="email" class="hidden mb-2 text-sm font-medium">Email address</label>
                <div class="relative flex items-center">
                  <input
                    class="block p-2 md:p-3 text-sm md:pl-4 md:text-lg w-full text-black rounded-xl border border-gray focus:ring-primary-500 focus:border-primary-500 bg-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter your email"
                    v-model="email"
                    type="email"
                    id="email"
                    
                  >
                  <button
                    type="submit"
                    class="absolute text-sm md:text-lg right-0 top-0 h-full px-3 md:px-5 font-medium text-center text-white bg-blue-light rounded-lg cursor-pointer hover:bg-blue-light focus:ring-4 focus:ring-sky-300 dark:bg-blue-light dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                    
                  >
                    Subscribe
                  </button>

                  <p v-if="responseMessage" class="absolute text-red-800 mt-10">{{ responseMessage }}</p>
                </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  </section>

  <footer class="w-full">
    <div class="flex justify-between py-3 px-2 w-3/4 md:py-6 md:px-0 md:mx-auto bg-white">
      <div>
        <div class="my-4">        
          <svg width="120" height="40" viewBox="0 0 64 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="md:w-[60%]">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.61419 3.37002C13.6734 2.47369 14.4841 10.6841 8.50564 11.4728C1.37882 12.3692 0.3656 4.19469 6.61419 3.37002ZM0.0278106 8.21021C0.3656 12.6918 3.7432 15.1298 8.30299 14.7714C12.5588 14.4845 15.3622 11.4728 14.9569 6.56101C14.5854 2.11528 11.2077 -0.286936 6.68169 0.0716245C2.45969 0.394283 -0.309978 3.37017 0.0278106 8.21036V8.21021Z" fill="#00132B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M58.5281 6.30999C61.7706 5.37777 62.3448 11.9031 59.5077 12.5485C57.8527 12.9428 56.9406 11.6163 56.7718 10.0388C56.5692 8.2102 57.1096 6.70446 58.5283 6.30999H58.5281ZM61.2978 5.80798C60.9938 5.48532 60.8587 5.12676 60.4872 4.7682C59.4063 3.76432 57.6837 3.65676 56.3665 4.30208C53.1577 5.91553 53.1241 12.7994 56.299 14.4843C57.1772 14.9863 58.4269 15.058 59.4402 14.6994C60.521 14.3409 60.7573 13.7672 61.3316 13.0143C61.3991 14.0899 61.8044 15.058 62.9866 14.7711C64.0336 14.5201 63.9998 13.4803 63.9998 12.2972V1.75641C63.9998 0.609073 63.5607 -0.179699 62.3785 0.0354065C61.3315 0.21461 61.2976 1.29029 61.2976 2.47338C61.2976 3.58481 61.2976 4.69624 61.2976 5.80767L61.2978 5.80798Z" fill="#00132B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M36.4387 6.05898C38.4992 5.52121 40.0865 8.28184 37.6548 8.31774C36.9117 8.31774 35.4255 8.6045 35.1216 7.81573C34.7838 6.8835 35.7633 6.23818 36.4387 6.05898ZM34.7161 10.0745C35.6957 10.0745 41.1337 10.3255 41.539 9.75183C42.0119 9.14226 41.539 7.31371 41.3025 6.66839C40.1203 3.72841 36.5062 3.11899 34.1757 4.62473C31.3385 6.48919 31.1359 12.7276 34.6148 14.4486C38.195 16.2771 42.4847 13.0861 41.0324 11.7237C40.7621 11.4727 39.9853 11.4369 39.5462 11.5443C39.0733 11.6519 38.8706 12.0822 38.5667 12.3331C37.6548 13.1937 34.6823 13.3011 34.7161 10.0743V10.0745Z" fill="#00132B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M45.7946 5.87975C45.7946 5.16263 45.7609 4.73242 45.3555 4.33811C45.0177 4.0512 44.4436 3.9079 43.9706 4.123C42.9573 4.58912 43.1937 5.87975 43.1937 7.13479C43.1937 8.42543 43.1937 9.71622 43.1937 11.0069C43.1937 12.1183 42.9236 13.7317 43.599 14.4129C44.3758 15.2376 45.7608 14.7356 45.8621 13.5525C46.166 10.9352 45.2878 7.88766 46.7065 6.66868C47.4157 6.05926 48.8344 6.09501 49.4423 6.91969C50.388 8.13867 49.4085 12.9072 50.0164 14.1262C50.4894 15.0584 51.9755 15.0225 52.4145 14.0545C52.6848 13.445 52.5496 11.1146 52.5496 10.2899C52.5496 7.63665 52.7185 5.30639 50.827 4.26661C50.0164 3.8364 48.7329 3.72869 47.7534 4.05151C46.301 4.55352 46.5712 5.05538 45.7943 5.88006L45.7946 5.87975Z" fill="#00132B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4903 14.6638C18.0645 13.4089 17.5241 8.64054 17.6929 6.91954C17.828 5.77221 18.6723 6.48933 19.2804 6.02322C19.6857 5.73631 19.7195 4.33812 19.1116 4.08711C18.5036 3.8361 17.5578 4.30222 17.6592 3.04733C17.7605 2.00755 18.5711 2.43776 19.2129 2.00755C19.7196 1.68489 19.6858 0.465907 19.1116 0.214899C18.6724 0.0356957 17.3551 0.143249 16.8485 0.28655C13.6735 1.03942 15.6325 4.73243 15.7676 5.41365C16.5445 9.24996 14.9909 10.8992 14.9909 12.2975C14.9571 13.1938 14.8896 13.9826 15.1935 14.6638C15.8353 14.8789 16.8485 14.8789 17.4903 14.6638Z" fill="#00132B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4216 14.8071C23.8064 14.8071 23.4686 13.7674 23.4686 12.4051C23.4686 10.0388 23.0633 7.31387 24.6508 6.561C25.6979 6.09489 26.6436 6.84776 26.6436 5.16266C26.6436 3.83613 25.968 3.62102 24.8535 4.08713C23.9416 4.48144 23.8739 5.01936 23.4348 5.84388C23.2997 4.73245 23.5361 4.01533 22.3203 4.01533C21.4759 4.01533 20.7666 3.94368 20.7666 5.16266V13.5882C20.7666 14.9147 21.2394 14.8071 22.4216 14.8071Z" fill="#00132B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.494 13.8034C30.6629 13.1581 30.5615 8.13853 30.5615 7.0271C30.5615 5.95141 30.7304 4.83998 29.9535 4.26647C29.2105 3.72855 28.2309 4.15892 27.9269 4.91179C27.7243 5.48545 27.8256 10.6483 27.8256 11.724C27.8256 12.8354 27.6567 13.9111 28.3661 14.5205C29.2105 15.2017 30.2238 14.664 30.494 13.8034Z" fill="#00132B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.8387 0.107372C27.0486 0.609234 27.8255 3.29836 29.6156 2.7247C31.2706 2.22268 30.5614 -0.394491 28.8387 0.107372Z" fill="#11C8F3"/>
          </svg>
        </div>

        <div class="flex justify-between">
          <div class="grid whitespace-nowrap text-[10px] md:px-4 md:text-[16px] justify-between">
            <p>Phone number</p>
            <p>09018699546</p>
          </div>

          <div class="grid pl-2 text-[10px] md:text-[16px] md:mx-3 justify-between">
            <p>Email</p>
            <a class="underline">ofriend@gmail.com</a>
          </div>

        </div>
      </div>
      <div class="flex my-5 h-2/3 ml-9 space-y-4 space-x-2 justify-between">
        <div class="grid text-[10px] md:text-[16px] mt-5 text-nowrap space-y-6">
          <a v-for="link in footerOne" :key="link.name" :href="link.href">{{ link.name }}</a>
        </div>

        <div class="grid text-[10px] md:text-[16px]  space-y-6">
          <a v-for="link in footerTwo" :key="link.name" :href="link.href">{{ link.name }}</a>
        </div>

        <div class="grid text-nowrap text-[10px] md:text-[16px] space-y-6">
          <a v-for="link in footerThree" :key="link.name" :href="link.href">{{ link.name }}</a>
        </div>     
      </div>
    </div>
    <hr class="h-px my-8 bg-gray border-0 dark:bg-gray">
     
    <div class="flex justify-between px-4">
      <div>
        <p class="text-gray">copyright 2024 ofriend Inc.</p>
      </div>

      <div class="flex justify-evenly">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47717 4.47717 0 10 0C15.5228 0 20 4.47717 20 10C20 15.5228 15.5228 20 10 20C4.47717 20 0 15.5228 0 10ZM7.06687 8.28242H4.80067V15.0915H7.06687V8.28242ZM7.21617 6.17612C7.20146 5.5085 6.72404 5 5.94875 5C5.1735 5 4.66667 5.5085 4.66667 6.17612C4.66667 6.82992 5.15854 7.35304 5.91933 7.35304H5.93383C6.72404 7.35304 7.21617 6.82992 7.21617 6.17612ZM15.2397 11.1874C15.2397 9.09596 14.1217 8.12254 12.6305 8.12254C11.4272 8.12254 10.8886 8.78342 10.5878 9.24704V8.28262H8.32129C8.35117 8.92154 8.32129 15.0917 8.32129 15.0917H10.5878V11.2889C10.5878 11.0854 10.6025 10.8824 10.6624 10.7367C10.8262 10.3302 11.1991 9.90925 11.8252 9.90925C12.6456 9.90925 12.9735 10.5336 12.9735 11.4486V15.0915H15.2397L15.2397 11.1874Z" fill="#00132B"/>
        </svg>

        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 0C4.47745 0 0 4.50447 0 10.0604C0 15.081 3.65637 19.2424 8.43784 20V12.9691H5.89759V10.0604H8.43784V7.84383C8.43784 5.32044 9.93099 3.92896 12.2142 3.92896C13.3083 3.92896 14.4544 4.12515 14.4544 4.12515V6.59924H13.1903C11.9502 6.59924 11.5622 7.37597 11.5622 8.17188V10.0584H14.3334L13.8904 12.9671H11.5622V19.998C16.3436 19.2444 20 15.082 20 10.0604C20 4.50447 15.5225 0 10 0Z" fill="#00132B"/>
        </svg>

        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47717 4.47717 0 10 0C15.5228 0 20 4.47717 20 10C20 15.5228 15.5228 20 10 20C4.47717 20 0 15.5228 0 10ZM10.0005 4.66667C8.55204 4.66667 8.37025 4.673 7.80138 4.69887C7.23358 4.72487 6.84604 4.81479 6.50692 4.94667C6.15613 5.08287 5.85858 5.26512 5.56212 5.56167C5.26546 5.85812 5.08321 6.15567 4.94654 6.50633C4.81433 6.84558 4.72433 7.23325 4.69879 7.80079C4.67333 8.36971 4.66667 8.55158 4.66667 10C4.66667 11.4485 4.67312 11.6297 4.69887 12.1986C4.725 12.7664 4.81487 13.154 4.94667 13.4931C5.083 13.8439 5.26521 14.1414 5.56179 14.4379C5.85812 14.7345 6.15567 14.9172 6.50625 15.0535C6.84558 15.1853 7.23325 15.2752 7.80092 15.3012C8.36983 15.3271 8.5515 15.3335 9.99983 15.3335C11.4484 15.3335 11.6296 15.3271 12.1985 15.3012C12.7663 15.2752 13.1543 15.1853 13.4937 15.0535C13.8443 14.9172 14.1414 14.7345 14.4377 14.4379C14.7344 14.1414 14.9167 13.8439 15.0533 13.4932C15.1845 13.154 15.2745 12.7663 15.3011 12.1987C15.3267 11.6298 15.3333 11.4485 15.3333 10C15.3333 8.55158 15.3267 8.36983 15.3011 7.80092C15.2745 7.23313 15.1845 6.84558 15.0533 6.50646C14.9167 6.15567 14.7344 5.85812 14.4377 5.56167C14.1411 5.265 13.8444 5.08279 13.4933 4.94667C13.1533 4.81479 12.7655 4.72487 12.1977 4.69887C11.6288 4.673 11.4478 4.66667 9.99883 4.66667H10.0005Z" fill="#00132B"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.52197 5.62877C9.66397 5.62857 9.82242 5.62877 10.0004 5.62877C11.4244 5.62877 11.5932 5.6339 12.1555 5.65944C12.6755 5.68323 12.9578 5.77011 13.1458 5.84311C13.3947 5.93977 13.5721 6.05532 13.7587 6.24198C13.9453 6.42865 14.0609 6.60644 14.1578 6.85536C14.2308 7.04311 14.3178 7.32536 14.3415 7.84536C14.367 8.40757 14.3726 8.57648 14.3726 9.99982C14.3726 11.4232 14.367 11.5921 14.3415 12.1543C14.3177 12.6743 14.2308 12.9565 14.1578 13.1443C14.0611 13.3932 13.9453 13.5704 13.7587 13.757C13.572 13.9437 13.3948 14.0592 13.1458 14.1559C12.958 14.2292 12.6755 14.3159 12.1555 14.3397C11.5933 14.3652 11.4244 14.3707 10.0004 14.3707C8.5763 14.3707 8.40751 14.3652 7.8453 14.3397C7.3253 14.3156 7.04305 14.2287 6.85497 14.1557C6.60605 14.0591 6.42826 13.9435 6.24159 13.7569C6.05492 13.5702 5.93938 13.3929 5.84251 13.1439C5.76951 12.9561 5.68251 12.6739 5.65884 12.1539C5.63326 11.5916 5.62817 11.4227 5.62817 9.99848C5.62817 8.57423 5.63326 8.40623 5.65884 7.84402C5.68259 7.32402 5.76951 7.04177 5.84251 6.85377C5.93917 6.6049 6.05492 6.42711 6.24159 6.24044C6.42826 6.05377 6.60605 5.93823 6.85497 5.84132C7.04297 5.76798 7.3253 5.68132 7.8453 5.65744C8.3373 5.63523 8.52797 5.62857 9.52197 5.62744V5.62877ZM12.8473 6.51432C12.494 6.51432 12.2073 6.80069 12.2073 7.15411C12.2073 7.50744 12.494 7.79411 12.8473 7.79411C13.2007 7.79411 13.4873 7.50744 13.4873 7.15411C13.4873 6.80077 13.2007 6.51432 12.8473 6.51432ZM10.0004 7.26211C8.48784 7.26211 7.26151 8.48848 7.26151 10.001C7.26151 11.5136 8.48784 12.7394 10.0004 12.7394C11.513 12.7394 12.7389 11.5136 12.7389 10.001C12.7389 8.48848 11.513 7.26211 10.0004 7.26211Z" fill="#00132B"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0004 8.22266C10.9822 8.22266 11.7782 9.01857 11.7782 10.0004C11.7782 10.9822 10.9822 11.7782 10.0004 11.7782C9.01853 11.7782 8.22266 10.9822 8.22266 10.0004C8.22266 9.01857 9.01853 8.22266 10.0004 8.22266Z" fill="#00132B"/>
        </svg>


      </div>
    </div>
  </footer>
</template>

<script setup>
import logoIcon from '@/assets/logo-icon.png' 
import { ref } from 'vue'
import axiosInstance from '@/axios';

const name = ref('');
const email = ref('');
const responseMessage = ref('');

const submitForm = async () => {
  try {
    const response = await axiosInstance.post('/wishlist/submit', {
      name: name.value,
      email: email.value,
    });

    // Handle succesful response
    responseMessage.value = `Success: ${response.data.message}`;
    console.log("Successful")
  } catch (error) {
    // Handle error Message 
    responseMessage.value = `Error: ${error.message}`;
    console.log("Failed")
  }
}

const footerOne = [
  {name: 'Home', href: '#'},
  {name: 'Service', href: '#'},
  {name: 'About Us', href: '#'},
  {name: 'Training', href: '#'}

]

const footerTwo = [
  {name: 'Blog', href: '#'},
  {name: 'Terms', href: '#'},
  {name: 'Cookies', href: '#'},
  {name: 'Privacy', href: '#'},

]

const footerThree = [
{name: 'News', href: '#'},
{name: 'Features', href: '#'},
{name: 'Company', href: '#'},
{name: 'Plans & Pricing', href: '#'},

]
</script>