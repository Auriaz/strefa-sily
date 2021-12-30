<script>
import Layout from '~/components/layouts/Layout';
import FxRowReverse from '~/components/flex/FxRowReverse';
import FxCol from '~/components/flex/FxCol';
import Btn from '~/components/buttons/Btn';
import XImg from '~/components/images/XImg';
import FxRow from '~/components/flex/FxRow';
import Flex from '~~/components/flex/Flex.vue';
import Logo from '~~/components/images/logo.vue';
import TiltCard from '~/components/cards/tiltCard';

export default {
    name: 'Hero',
    components: { Layout, FxRowReverse, FxCol, Btn, XImg, FxRow, Flex, Logo, TiltCard },
}
</script>

<template>
    <!-- Hero -->
    <div class="w-screen h-screen bg-dark">
        <flex class="relative flex-wrap justify-center  w-full">
            <logo src="logo/logo.svg" alt="Logo" class="relative md:fixed md:top-10 md:left-10 z-20 w-48 h-48" />
            
            <!-- Image -->
            <fx-row class="w-screen h-screen justify-center md:flex-1">
                <div class="hero-box ">
                    <!-- Card 3D Tilt -->
                    <tilt-card class="hero-box__image hero-box__image--1" img-src="/hero/hero-bg.jpg" img-alt="Hero image" title="Nowy tytuł" width="100%" height="100%"/>

                    <tilt-card class="hero-box__image hero-box__image--2" img-src="/hero/hero-bg.jpg" img-alt="Hero image" title="Nowy tytuł" width="10rem" height="5rem"/>

                    <tilt-card class="hero-box__image hero-box__image--3" img-src="/hero/hero-bg.jpg" img-alt="Hero image" title="Nowy tytuł" width="20rem" height="12rem"/>
                </div>
            </fx-row>
            
            <!-- Content -->
            <fx-col class="hero-content z-30 absolute flex-wrap text-center py-4 px-4">

                <!-- <tilt-card class="md:hidden w-72 h-72" img-src="/hero/hero-bg.jpg" img-alt="Hero image" title="Nowy tytuł" width="100%" height="100%" /> -->

                <h2 class="text-white font-bold  text-3xl md:text-4xl lg:text-5xl text-center md:text-left mb-6">
                    <span class="text-blue">S</span>trefa
                    <span class="text-blue">S</span>iły
                </h2>

                <p class="text-dark text-lg text-center lg:text-left mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ad quis quaerat.
                </p>

                <fx-row class="justify-center flex-wrap gap-6">
                    <btn class="btn-outlined-blue">Grafik</btn>
                    <btn class="btn-white">Kup bilet online</btn>
                </fx-row>
            </fx-col>

            <div class="z-10 fixed top-0 left-0">
                <div class="absolute top-0 -left-4 w-72 h-72 bg-purple rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>

                <div class="absolute top-0 -left-4 w-72 h-72 bg-blue rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000"></div>
            </div>

            <!-- Rounded Rectangle -->
            <div class="z-10 block overflow-hidden  h-full w-full absolute opacity-30 bottom-0 right-0 bg-gradient-to-tl from-blue via-purple bg-dark "></div>

            <div class="z-10 overlay hidden md:block overflow-hidden  h-full w-full opacity-80 absolute bottom-0 right-0 bg-gradient-to-tl from-blue via-purple bg-dark "></div>

        </flex>
    </div>
</template>

<style lang="scss" scoped>
@import '~/assets/css/abstracts/_mixins/breakpoints';
.overlay {
  clip-path: ellipse(42% 100% at 0% 50%);
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