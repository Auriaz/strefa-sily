<script>
import Btn from '~/components/buttons/Btn';
import Logo from '~~/components/images/logo.vue';

export default {
    components: { Btn, Logo },
    name: 'Navbar',
}
</script>

<script setup>
const isGrafik = useGrafik();
</script>


<template>
    <div class="hidden md:block md:fixed z-50 font-bold w-full bg-dark bg-opacity-80 bg-clip-padding blur-backdrop-filter shadow-sm">
        <nav class="relative flex items-center w-full px-5 py-5 mx-auto lg:px-2 lg:shadow-none">
            <div class="absolute inset-0 z-0 block w-full h-full shadow-md opacity-50 lg:hidden"></div>

            <!-- <nuxt-link to="/" class="absolute z-10 w-10 sm:w-12 md:w-16 opacity-90">
                <logo src="logo/logo-sm.png" alt="Logo" class=""/> 
                <span class="text-xl font-bold" >Strefa siły</span>
            </nuxt-link> -->

            <div class="relative hidden mx-8 md:flex space-x-12 flex-1 justify-center items-center gap-12 text-blue uppercase text-xs lg:ml-auto">
                <a class="hover:text-purple" @click="isGrafik = !isGrafik" href="/#grafik">Grafik</a>
                <a class="hover:text-purple" href="/#information">Informacje</a>
                <a class="hover:text-purple" href="/#feature">Zajęcia </a>
                <a class="hover:text-purple" href="/#team">Trenerzy</a>
                <a class="hover:text-purple" href="/#price">Cennik</a>
            </div>

            <div class="md:hidden">
                <nuxt-link to="/" class="relative left-3 z-10 w-10 sm:w-12 md:w-16 md:hidden opacity-90 focus:outline-none">
                    <i class="text-2xl text-white fas fa-bars"></i>
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