<script>
import XImg from '~/components/images/XImg';
import Flex from '~/components/flex/Flex';
import FxCol from '~/components/flex/FxCol';
import FxRow from '~~/components/flex/FxRow.vue';

export default {
    name: 'Info',
    components: {
        XImg, Flex, FxCol, FxRow, 
    }
}
</script>

<script setup>
const isDark = useTheme();
</script>

<template>
    <fx-row class="relative w-full h-full" :class="`${isDark ? 'bg-dark': 'bg-white'}`">
        <!-- Background -->
        <div class="block overflow-hidden  h-full w-full absolute top-0 left-0 opacity-30 bottom-0 right-0" :class="`${isDark ? 'bg-gradient-to-tr  from-dark via-blue bg-blue' : ''}`"></div>

        <div class="overlay hidden md:block overflow-hidden h-screen w-screen opacity-80 absolute bottom-0 right-0 bg-blue" :class="`${isDark ? 'bg-gradient-to-tr from-dark via-blue' : ''}`"></div>

        <!-- Content -->
        <fx-row class="relative flex-wrap w-full h-full md:w-[45%]  2xl:h-[100%] 3xl:h-[70%] 
        md:mx-10 xl:mx-20 xl:mt-28 2xl:mt-40">
            <!-- Info Text -->
            <fx-col class="relative w-full text-xl xl:text-2xl 2xl:text-3xl lg:mt-40  xl:mt-20 mx-5">
                <p class=" text-blue-dark  xl:text-blue-dark" :class="`${isDark ? ' lg:text-white' : 'lg:text-blue-dark'}`" >
                    Strefa siły jest specjalnie przygotowana do prowadzenia zajęć, ale również do cięższych ćwiczeń siłowych. Możesz tutaj powyciskać ciężary na ławeczce, ale również serię ćwiczeń obwodowych czy nawet tanecznych.
                </p>
            </fx-col>

            <!-- Card info -->
            <fx-row class="card relative w-full h-[400px] overflow-hidden z-10 justify-center items-center text-indigo rounded-lg hover:scale-110">
                <span class="animate-snake1 absolute top-0 left-0 w-full h-[3px] animation-delay-1000" :class="{'flex': isDark}"></span>
                <span class="animate-snake2 absolute top-0 right-0 w-[3px] h-full"></span>
                <span class="animate-snake3 absolute bottom-0 left-0 w-full h-[3px] animation-delay-1000"></span>
                <span class="animate-snake4 absolute top-0 left-0 w-[3px] h-full"></span>
                
                <fx-col class="card_content  z-20 p-8">
                    <h2 class="py-2 text-xl xl:text-2xl" :class="`${isDark ? ' text-white' : 'text-blue-dark'}`" > Godziny otwarcia : </h2>
                    <!-- <h3 class="text-center text-xl">Strefy Siły</h3> -->
                    <!-- <a href="">Wiecej informacji tutaj</a> -->
                    <fx-col  class="flex-wrap justify-center items-start lg:text-md xl:text-lg px-3" :class="`${isDark ? ' text-gray-light' : 'text-dark'}`">
                        <p class="py-1 px-2">Poniedziałek: 9:00 - 20:00</p>
                        <p class="py-1 px-2">Wtorek : 9:00 - 20:00</p>
                        <p class="py-1 px-2">Środa :  9:00 - 20:00</p>
                        <p class="py-1 px-2">Środa :  9:00 - 20:00</p>
                        <p class="py-1 px-2">Czwartek : 9:00 - 20:00</p>
                        <p class="py-1 px-2">Piątek : 9:00 - 20:00</p>
                        <p class="py-1 px-2">Sobota : 10:00 - 20:00</p>
                        <p class="py-1 px-2">Niedziela : 10:00 - 20:00</p>
                    </fx-col>
                </fx-col>
            </fx-row>
        </fx-row>

        <!-- Next Content  -->
        <fx-row class="relation flex-wrap w-full h-full lg:w-[55%] 2xl:h-[100%] 3xl:h-[70%] md:mx-10 2xl:mx-20 2xl:mt-24  3xl:mt-72">
            <fx-col class=" relative overflow-hidden z-10 lg:w-[460px] xl:w-[560px] xl:h-[315px] justify-center items-center md:mt-16 mb-12 p-0">
                <iframe class="m-0 p-0" width="100%" height="100%" src="https://www.youtube.com/embed/C8bk9lkQp2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </fx-col>
            <!-- Card info -->
            <fx-col class="card relative h-[405px] overflow-hidden z-10 justify-center items-center hover:scale-110">
                <span class="animate-snake1 absolute top-0 left-0 w-full h-[3px] animation-delay-1000" :class="{'flex': isDark}"></span>
                <span class="animate-snake2 absolute top-0 right-0 w-[3px] h-full"></span>
                <span class="animate-snake3 absolute bottom-0 left-0 w-full h-[3px] animation-delay-1000"></span>
                <span class="animate-snake4 absolute top-0 left-0 w-[3px] h-full"></span>

                <div class="card_content relative z-20 px-6">
                    <h2 class="text-2xl"  :class="`${isDark ? ' text-white' : 'text-blue-dark'}`">Informacje o sprzęcie:</h2>

                    <fx-col class="flex-wrap justify-center items-start text-lg pl-3" :class="`${isDark ? ' text-gray-light' : 'text-dark'}`">
                        <p class="py-1 px-2"><span class="text-blue" >  ></span> Drążki przymocowane na stałe </p>
                        <p class="pb-1 px-2"><span class="text-blue" >  ></span >Hantle </p>
                        <p class="pb-1 px-2"><span class="text-blue" >  ></span> Kettle </p>
                        <p class="pb-1 px-2"><span class="text-blue" >  ></span> Gumy o różnej grubości </p>
                        <p class="pb-1 px-2"><span class="text-blue" >  ></span> Ławeczka do podnoszenia ciężarów </p>
                        <p class="pb-1 px-2"><span class="text-blue" >  ></span> Skakanki </p>
                        <p class="pb-1 px-2"><span class="text-blue" >  ></span> Piłki do Pilatesu </p>
                        <p class="pb-1 px-2"><span class="text-blue" >  ></span> Piłki o różnych ciężarach </p>
                        <p class="pb-1 px-2"><span class="text-blue" >  ></span> Sanki obciążeniowe z możliwością nałożenia na nie ciężaru do pchania </p>
                        <p class="pb-1 px-2"><span class="text-blue" >  ></span> Głośnik do puszczania własnej muzyki 😉 </p>
                    </fx-col>
                </div>
            </fx-col>
        </fx-row>
        
    </fx-row>
</template>

<style lang="scss" scoped>
@import '~/assets/css/abstracts/_variables/colors';
.overlay {
    clip-path: circle(50% at 3% -44%);
}

.card {
    // &::before {
    //     content: '';
    //     position: absolute;
    //     top: 2px;
    //     left: 2px;
    //     bottom: 2px;
    //     width: 50%;
    //     background: $mainDark;
    //     pointer-events: none;
    // }

    &:hover span {
        transition: 0.5s;

        &:nth-child(1) {
            background: linear-gradient(to right, transparent, $mainBlue);
        }

        &:nth-child(2) {
            background: linear-gradient(to bottom, transparent, $mainBlue);
        }

        &:nth-child(3) {
            background: linear-gradient(to left, transparent, $mainBlue);
        }

        &:nth-child(4) {
            background: linear-gradient(to top, transparent, $mainBlue);
        }
    }
}
</style>