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

export default {
    name: 'Hero',
    components: { Layout, FxRowReverse, FxCol, Btn, XImg, FxRow, Flex, Logo, HeroCard },
}
</script>


<script setup>
const isGrafik  = useGrafik();

</script>

<template>
    <!-- Hero -->
    <div class="relative w-screen h-screen bg-dark">
        <flex class="relative flex-wrap justify-center w-full">
            <logo src="/images/logo/logo.svg" alt="Logo" class="relative md:fixed md:top-20 md:left-10 z-20 w-48 h-48" />
            
            <!-- Image -->
            <fx-row class="w-screen h-screen justify-center md:flex-1">
                <div class="hero-box ">
     
                    <!-- Card Hero-->
                    <hero-card class="hero-box__image hero-box__image--1" img-src="https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-7-1024x683.jpg" img-alt="Hero image" title="Nowy tytuł" width="100%" height="100%"/>

                    <hero-card class="hero-box__image hero-box__image--2" img-src="https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-5-1024x683.jpg" img-alt="Hero image" title="Nowy tytuł" width="10rem" height="5rem"/>

                    <hero-card class="hero-box__image hero-box__image--3" img-src="https://movementarena.pl/suwalki/wp-content/uploads/2020/06/MG_0530-1024x683.jpg" img-alt="Hero image" title="Nowy tytuł" width="20rem" height="12rem"/>
                </div>
            </fx-row>
            
            <!-- Content -->
            <fx-col class="hero-content z-30 absolute flex-wrap text-center py-4 px-4">
                <h2 class="text-white font-bold  text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center md:text-left mb-6">
                    
                    <span class="text-blue">S</span>trefa
                    <span class="text-blue">S</span>iły
                </h2>

                <p class=" text-gray md:text-dark text-lg text-center lg:text-left mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ad quis quaerat.
                </p>

                <fx-row class="justify-center flex-wrap gap-6">
                    <btn @click="isGrafik = !isGrafik" class="btn-outlined-blue">Grafik</btn>
                    <btn class="btn-white">Kup bilet online</btn>
                </fx-row>
            </fx-col>

            <div class="z-10 fixed top-0 left-0">
                <div class="hidden md:block absolute top-0 -left-4 w-72 h-72 bg-purple rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>

                <div class="hidden md:block absolute top-0 -left-4 w-72 h-72 bg-blue rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000"></div>
            </div>

            <!-- Background -->
            <div class="z-10 block overflow-hidden  h-full w-full absolute opacity-30 bottom-0 right-0 bg-gradient-to-tl from-blue via-purple bg-dark "></div>

            <div class="z-10 overlay hidden md:block overflow-hidden  h-full w-full opacity-80 absolute bottom-0 right-0 bg-gradient-to-tl from-blue via-purple bg-dark "></div>

            <div id="grafik" class="absolute scroll-mt-28 top-36 left-[500px] rounded-full skew-y-12 shadow-gray-light shadow-2xl z-40 w-14 h-14 text-center transition-all duration-75 ease-in" :class="{isGrafik: isGrafik}">
                <btn v-if="isGrafik" @click="isGrafik = !isGrafik" class="absolute -right-3 top-0 text-blue hover:text-xl hover:text-orange transition-all duration-75 ease-in"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></btn>
                <x-img v-if="isGrafik" src="/images/info/grafik.jpg" alt="Grafik" class="w-full p-14"/>
                <!-- <div class="absolute top-0 left-0 w-full h-full bg-dark opacity-50 "></div> -->
                <h2 v-if="isGrafik" class="text-3xl mb-6">Grafik - Strefy Siły</h2>
            </div>

        </flex>
    </div>
</template>

<style lang="scss" scoped>
@import '~/assets/css/abstracts/_mixins/breakpoints';
.overlay {
    clip-path: circle(50% at 3% 56%);
}

.isGrafik {
    left: 4rem ;
    right: 4rem ;
    top: 100px;
    width: 90%;
    height: 85%;
    border-radius: 5px;
    transform: skewY(0);
    transition: all .1s ease-in;
}

.hero {
    &-content {
        justify-content: center;
        align-items: center;
        top: 13rem;

        @include atMedium {
            top: 50%;
            width: 32%;
            left: 5%;
        }

        @include atLarge {
            top: 40%;
            left: 8%;
            width: 30%;
        }

        @include atExtraLarge {
            top: 50%;
            left: 5%;
            width: 28%;
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