<script>
import Btn from '~/components/buttons/Btn';
import Logo from '~/components/images/logo.vue';
import XLink from '~/components/links/XLink'
import XImg from '~~/components/images/XImg';

export default {
    components: { Btn, Logo, XLink, XImg },
    name: 'Navbar',
}
</script>

<script setup>
const isGrafik = useGrafik();
const isDark = useTheme();
</script>


<template>
    <div class="hidden md:block md:fixed z-50 font-bold w-full bg-clip-padding blur-backdrop-filter shadow-sm" :class="`${isDark ? 'bg-dark bg-opacity-80' : 'bg-white'}`">
        <nav class="relative flex items-center w-full px-5 py-5 mx-auto lg:px-2 lg:shadow-none">
            <div class="absolute inset-0 z-0 block w-full h-full shadow-md opacity-50 lg:hidden"></div>

            <!-- <nuxt-link to="/" class="absolute z-10 w-10 sm:w-12 md:w-16 opacity-90">
                <logo src="logo/logo-sm.png" alt="Logo" class=""/> 
                <span class="text-xl font-bold" >Strefa siły</span>
            </nuxt-link> -->

            <div class="relative hidden font-extrabold mx-8 md:flex space-x-12 flex-1 md:justify-start lg:justify-center items-center md:gap-6 lg:gap-12  uppercase text-xs lg:ml-auto" >
                <a class="hover:scale-110" :class="`${isDark ? 'text-white hover:text-amber ' : 'text-blue-dark'}`" @click="isGrafik = !isGrafik" href="/#grafik">Grafik</a>
                <a class="hover:scale-110" :class="`${isDark ? 'text-white hover:text-amber ' : 'text-blue-dark'}`" href="/#information">Informacje</a>
                <a class="hover:scale-110" :class="`${isDark ? 'text-white hover:text-amber ' : 'text-blue-dark'}`" href="/#movie">Filmy</a>
                <a class="hover:scale-110" :class="`${isDark ? 'text-white hover:text-amber ' : 'text-blue-dark'}`" href="/#feature">Zajęcia </a>
                <a class="hover:scale-110" :class="`${isDark ? 'text-white hover:text-amber ' : 'text-blue-dark'}`" href="/#team">Trenerzy</a>
                <a class="hover:scale-110" :class="`${isDark ? 'text-white hover:text-amber ' : 'text-blue-dark'}`" href="/#price">Cennik</a>

                <div class="absolute top-0 right-0 flex flex-row flex-wrap items-center justify-center gap-4">
                    <span class="flex flex-row flex-wrap gap-4 border-l-[1px] border-gray px-2 ">
                        <a class="hover:scale-110 pl-4" :class="`${isDark ? 'text-white hover:text-amber ' : 'text-blue-dark'}`" href="https://www.instagram.com/strefasily_mas/" target="_blank">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" class="svg-inline--fa fa-instagram h-5 w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                        </a>
                        
                        <a class="hover:scale-110" :class="`${isDark ? 'text-white hover:text-amber ' : 'text-blue-dark'}`" href="https://www.facebook.com/Strefa-Si%C5%82y-Movement-Arena-Suwa%C5%82ki-104542102096153" target="_blank">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" class="svg-inline--fa fa-facebook h-5 w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z"></path></svg>
                        </a>
                        
                    </span>

                    <span class="flex flex-row flex-wrap gap-4 border-l-[1px] border-gray px-4">

                        <button @click="isDark = !isDark" class="hover:scale-110" :class="`${isDark ? 'text-white hover:text-amber ' : 'text-blue-dark hover:text-orange'}`">
                            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>

                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        </button>
                    </span>
                </div>


            </div>

            <div class="md:hidden">
                <nuxt-link to="/" class="relative left-3 z-10 w-10 sm:w-12 md:w-16 md:hidden opacity-90 focus:outline-none">
                    <!-- <i class="text-2xl text-white fas fa-bars"></i> -->
                </nuxt-link>

            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.blur-backdrop-filter {
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}
</style>