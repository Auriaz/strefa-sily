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
import { onMounted, ref } from '#imports';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const isDark = useTheme();
const props = defineProps({
    information: Object,
});

// const config = useRuntimeConfig();
// const url = config.API_URL + props.information.image.data.attributes.formats.medium.url;
onMounted(() => {
    let elements = gsap.utils.toArray('.info-container-1');
    let elements2 = gsap.utils.toArray('.info-container-2');

    elements.forEach((el, index )=> {
        gsap.fromTo(el, {
            x: '-=300',
            opacity: 0,
        }, {
            opacity: 1,
            x: 0,
            delay: index,
            duration: 2,
            ease: 'elastic',
            scrollTrigger: {
                trigger: '.info-container-1',
                start: '-200px top',
                end: "150px 350px",
            },
        });
    });

    elements2.forEach((el, index )=> {
        gsap.fromTo(el, {
            x: '+=300',
            opacity: 0,
        }, {
            opacity: 2,
            x: 0,
            delay: index,
            duration: 1,
            ease: 'elastic',
            scrollTrigger: {
                trigger: '.info-container-2',
                start: '-150px top',
                end: "150px 350px",
            },
        });
    });
});


</script>

<template>
    <fx-row class="relative w-full h-full" :class="`${isDark ? 'bg-dark': 'bg-white'}`">
        <!-- Background -->
        <div class="hidden md:block overflow-hidden  h-full w-full absolute top-0 left-0 opacity-30 bottom-0 right-0" :class="`${isDark ? 'bg-gradient-to-tr  from-dark via-blue bg-blue' : ''}`"></div>
        
        <div class="overlay-1 block overflow-hidden h-screen w-screen absolute bottom-0 right-0 bg-blue" :class="`${isDark ? 'bg-gradient-to-tr from-dark via-blue' : ''}`"></div>
        <div class="overlay-2 hidden md:block overflow-hidden h-screen w-screen absolute top-0 left-0 bg-blue" :class="`${isDark ? 'bg-gradient-to-tr from-dark via-blue' : 'bg-blue'}`" ></div>

        <!-- Content -->
        <div class="info-container-1 relative flex flex-col md:flex-row flex-wrap justify-center items-center sm:w-[100vw] md:h-full md:w-[45%]  2xl:h-[100%] 3xl:h-[70%] 
        md:mx-10 xl:mx-20 xl:mt-12 2xl:mt-20">
            <!-- Info Text -->
            <fx-col class="relative w-full text-xl  mt-0 xl:text-2xl 2xl:text-3xl lg:mt-40 xl:mt-20 p-1 md:p-0 md:mx-5">
                <p v-html="information.content" class=" text-blue-dark xl:text-blue-dark" :class="`${isDark ? ' lg:text-white' : 'lg:text-blue-dark'}`" ></p>
            </fx-col>

            <!-- Card info -->
            <fx-row class="card relative w-[300px] h-[200px] overflow-hidden z-10 justify-center items-center text-indigo rounded-lg hover:scale-110">
                <span class="hidden md:inline-block animate-snake1 absolute top-0 left-0 w-full h-[3px] animation-delay-1000" :class="{'flex': isDark}"></span>
                <span class="hidden md:inline-block animate-snake2 absolute top-0 right-0 w-[3px] h-full"></span>
                <span class="hidden md:inline-block animate-snake3 absolute bottom-0 left-0 w-full h-[3px] animation-delay-1000"></span>
                <span class="hidden md:inline-block animate-snake4 absolute top-0 left-0 w-[3px] h-full"></span>
                
                <fx-col class="card_content z-20 py-2 px-4">
                    <h2 class="pb-2 text-xl xl:text-2xl" :class="`${isDark ? ' text-white' : 'text-blue-dark'}`" > Godziny otwarcia : </h2>

                    <fx-col  class="flex-wrap justify-center items-start lg:text-md xl:text-lg px-3" :class="`${isDark ? ' text-gray-light' : 'text-dark'}`">
                        <p v-html="information.openHours" class="py-1 px-2"></p>
                    </fx-col>
                </fx-col>
            </fx-row>
        </div>

        <!-- Next Content  -->
        <div class="info-container-2 relation hidden md:flex flex-col md:flex-row flex-wrap w-full h-full lg:w-[55%] 2xl:h-[100%] 3xl:h-[70%] md:mx-10 2xl:mx-20 2xl:mt-5  3xl:mt-32">
            <fx-col class="relative hidden lg:block overflow-hidden z-10 lg:w-[460px] xl:w-[560px] xl:h-[315px] justify-center items-center md:mt-16 mb-12 p-0">
               <x-img :src="information.image.url" :alt="information.image.name" />

            </fx-col>
            <!-- Card info -->
            <fx-col class="card relative w-[420px] h-[405px] overflow-hidden z-10 justify-center items-center hover:scale-110">
                <span class="animate-snake1 absolute top-0 left-0 w-full h-[3px] animation-delay-1000" :class="{'flex': isDark}"></span>
                <span class="animate-snake2 absolute top-0 right-0 w-[3px] h-full"></span>
                <span class="animate-snake3 absolute bottom-0 left-0 w-full h-[3px] animation-delay-1000"></span>
                <span class="animate-snake4 absolute top-0 left-0 w-[3px] h-full"></span>

                <div class="card_content relative z-20 px-6">
                    <h2 class="text-2xl"  :class="`${isDark ? ' text-white' : 'text-blue-dark'}`">Informacje o sprzęcie:</h2>

                    <fx-col class="flex-wrap justify-center items-start text-lg pl-3" :class="`${isDark ? ' text-gray-light' : 'text-dark'}`">
                        <p class="py-1 px-2"><span class="text-blue" >  ></span> Drążki przymocowane na stałe </p>
                        <p class="pb-1 px-2"><span class="text-blue" >  ></span >Hantle, kettle, sztangi </p>
                        <p class="pb-1 px-2"><span class="text-blue" >  ></span> Brama do ćwiczeń, wyciąg górny oraz dolny</p>
                        <p class="pb-1 px-2"><span class="text-blue" >  ></span> Gumy o różnej grubości, rollery</p>
                        <p class="pb-1 px-2"><span class="text-blue" >  ></span> Ławki do podnoszenia ciężarów</p>
                        <p class="pb-1 px-2"><span class="text-blue" >  ></span> Liny do wspinaczki, kółka gimnastyczne</p>
                        <p class="pb-1 px-2"><span class="text-blue" >  ></span> Skakanki, worki treningowe</p>
                        <p class="pb-1 px-2"><span class="text-blue" >  ></span> Piłki o różnych ciężarach oraz do pilatesu </p>
                        <p class="pb-1 px-2"><span class="text-blue" >  ></span> Sanki obciążeniowe, Ergometr, Air Bike </p>
                        <p class="pb-1 px-2"><span class="text-blue" >  ></span> Głośnik do puszczania własnej muzyki 😉 </p>
                    </fx-col>
                </div>
            </fx-col>
        </div>
    </fx-row>
</template>

<style lang="scss" scoped>
@import '~/assets/css/abstracts/_variables/colors';
.overlay-1 {
    clip-path: circle(50% at 3% -44%);
}

.overlay-2 {
    clip-path: circle(50% at 103% 100%);
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