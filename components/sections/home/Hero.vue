<script>
import Layout from '~/components/layouts/Layout';
import FxRowReverse from '~/components/flex/FxRowReverse';
import FxCol from '~/components/flex/FxCol';
import Btn from '~/components/buttons/Btn';
import XImg from '~/components/images/XImg';
import FxRow from '~/components/flex/FxRow';
import Flex from '~~/components/flex/Flex.vue';
import Logo from '~~/components/images/logo.vue';
import HeroCard from '~/components/cards/home/HeroCard';
import BtnIcon from '~/components/buttons/BtnIcon.vue';

export default {
    name: 'Hero',
    components: { Layout, FxRowReverse, FxCol, Btn, BtnIcon, XImg, FxRow, Flex, Logo, HeroCard },
    props: {
        imagesHero: {
            type: Object,
            required: true,
        }
    }
}
</script>


<script setup>
import { ref } from "#imports";

const isGrafik  = useGrafik();
const isDark = useTheme();
const isFullscreen = ref(false);
</script>

<template>
    <!-- Hero -->
    <flex class="relative flex-wrap justify-center w-full h-full" :class="`${isDark ? 'bg-dark': 'bg-white'}`">
        <!-- logo -->
        <logo src="/images/logo/logo.svg" alt="Logo" class="relative bg-none top-0 z-20 w-36 h-36 sm:top-5 md:fixed md:left-5 xl:w-40 xl:h-40" />
        
        <!-- Image -->
        <fx-row class="hidden md:flex w-screen h-screen justify-center md:flex-1">
            <div class="hero-box ">
    
                <!-- Card Hero-->
                <hero-card v-for="(image, index) in imagesHero" :key="index" :class="`hero-box__image hero-box__image--${index + 1}`" :img-src="image.src" :img-alt="image.title" :title="image.title" :content="image.content" :width="image.width" :height="image.height"/>
            </div>
        </fx-row>
        
        <!-- Content -->
        <fx-col class="hero-content z-30 absolute flex-wrap py-4 px-4">
            <h2 class="mb-6 font-bold text-4xl md:text-left lg:text-5xl xl:text-6xl" :class="`${isDark ? 'text-white': 'text-blue-dark'}`">              
                <span :class="`${isDark ? 'text-blue': 'text-dark'}`">S</span>trefa
                <span :class="`${isDark ? 'text-blue': 'text-dark'}`">S</span>iły
            </h2>

            <p class="w-[87%] ml-[10%] text-dark text-lg text-center lg:text-left mb-6">
                "Prawdziwa siła nie pochodzi z fizycznych zdolności. Pochodzi z niezłomnej woli"
                <!-- <p class="absolute  right-0 bottom-0">Mahatma Gandhi</p> -->
            </p>

            <fx-row class="justify-center flex-wrap gap-6">
                <btn @click="isGrafik = !isGrafik" class="btn-blue">Grafik</btn>
                <btn class="btn-white">
                    <a href="https://movementarenasuwalki.gymmanager.com.pl/Buypass/Passes" target="_blank" >
                        Kup bilet online
                    </a>
                </btn>
            </fx-row>
        </fx-col>

        <div v-if="isDark" class="z-10 fixed top-0 left-0">
            <div class="hidden md:block absolute top-0 -left-4 md:w-40 md:h-40 lg:w-60 lg:h-60 bg-purple rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>

            <div class="hidden md:block absolute top-0 -left-4 w-60 h-60 bg-blue rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000"></div>
        </div>

        <!-- Background -->
        <div class="z-10 block overflow-hidden h-full w-full absolute opacity-30 bottom-0 right-0" :class="`${isDark ? 'bg-gradient-to-tl from-blue via-blue bg-dark' : ''}`"></div>

        <div class="z-10 overlay block overflow-hidden h-screen w-screen absolute bottom-0 right-0" :class="`${isDark ? 'bg-gradient-to-tl from-blue via-blue bg-dark ' : 'bg-blue'}`" ></div>

        <!-- Grafik file -->
        <div id="grafik" class="absolute w-screen h-screen md:w-[90%] md:h-[85%] hidden rounded scroll-mt-28 z-40 text-center transition-all bg-opacity-75 bg-dark duration-75 ease-in md:top-[100px] md:left-16 md:right-16" :class="{isGrafik: isGrafik, 'shadow-gray-light shadow-2xl': isDark, fullscreen: isFullscreen}">
            <h2 v-if="isGrafik" class="absolute top-0 left-0 py-2 w-full text-center text-2xl text-white">Grafik - Strefy Siły</h2>
            <btn-icon v-if="isGrafik" @click="isGrafik = !isGrafik" class="absolute right-0 top-0 text-blue hover:text-xl hover:text-orange transition-all duration-75 ease-in">
                <svg xmlns="http://www.w3.org/2000/svg bg-opacity-0 " class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </btn-icon>

            <btn-icon v-if="isGrafik" @click="isFullscreen = !isFullscreen" class="absolute hidden md:block right-12 top-1 text-blue hover:text-xl hover:text-orange transition-all duration-75 ease-in">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
            </btn-icon>

             <iframe width="100% " height="100%" class="p-14" style="padding-top:-100px; font-size: 16px !important;" src="https://movementarenasuwalki.gymmanager.com.pl/Reservations/Index" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <!-- <x-img v-if="isGrafik" src="/images/info/grafik.jpg" alt="Grafik" class="w-full p-14"/> -->
            <!-- <div class="absolute top-0 left-0 w-full h-full bg-dark opacity-50 "></div> -->
        </div>

    </flex>
</template>

<style lang="scss" scoped>
@import '~/assets/css/abstracts/_mixins/breakpoints';
.overlay {
    clip-path: circle(50% at 3% 56%);
}

.fullscreen{
    width: 100vw !important;
    height: 100vh !important;
    position: fixed;
    top: 0 !important;
    left: 0 !important;
    z-index: 60;
    transition: all .3s ease-in;
}
.isGrafik {
    display: block;
}

.hero {
    &-content {
        justify-content: center;
        // align-items: center;
        top: 25%;

        @include atSmaller {
            top: 30%;
            width: 60%;
            // left: 5%;
        }

        @include atSmall {
            top: 40%;
            width: 40%;
            // left: 5%;
        }

        @include atMedium {
            top: 50%;
            width: 32%;
            left: 5%;
        }

        @include atLarge {
            top: 40%;
            left: 8%;
            width: 25%;
        }

        @include atExtraLarge {
            top: 50%;
            left: 0;
            width: 25%;
        }
    } 

    &-box {
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
    
        &__image {
            position: absolute;
            transform: skew(-15deg);
        
            &--1 {
                display: none;
                z-index: 30;
                
                @include atMedium {
                    display: flex;
                    width: 25rem;
                    height: 14rem;
                    top: 30%;
                    right: 5%;
                }
    
                @include atLarge {
                    display: flex;
                    width: 30rem;
                    height: 20rem;
                    top: 35%;
                    right: 7%;
                }
    
                @include atExtraLarge {
                    display: flex;
                    width: 40rem;
                    height: 30rem;
                    top: 30%;
                    right: 5rem;
                }
            }
        
            &--2 {
                z-index: 28;
                display: none;
                top: 0;
    
                
                @include atMedium {
                    display: flex;
                    width: 15rem;
                    height: 10rem;
                    right: 60%;
                }
    
                @include atLarge {
                    display: flex;
                    width: 12rem;
                    height: 10rem;
                    right: 70%;
                }
    
                @include atExtraLarge {
                    display: flex;
                    width: 30rem;
                    height: 20rem;
                    right: 75%;
                }
            }
        
            &--3 {
                display: none;
                z-index: 29;
    
                @include atMedium {
                    display: flex;
                    width: 12rem;
                    height: 9rem;
                    top: 9%;
                    right: 35%;
                }
    
                @include atLarge {
                    display: flex;
                    width: 15rem;
                    height: 12rem;
                    top: 12%;
                    right: 40%;
                }
    
                @include atExtraLarge {
                    display: flex;
                    width: 35rem;
                    height: 22rem;
                    top: 10%;
                    right: 45%;
                }
            }
        }
    }
}

</style>