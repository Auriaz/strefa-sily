<script>
import Layout from '~/components/layouts/Layout';
import FxRowReverse from '~/components/flex/FxRowReverse';
import FxCol from '~/components/flex/FxCol';
import Btn from '~/components/buttons/Btn';
import XImg from '~/components/images/XImg';
import FxRow from '~/components/flex/FxRow';
import Flex from '~~/components/flex/Flex.vue';
import Logo from '~~/components/images/logo.vue';

export default {
    name: 'Hero',
    components: { Layout, FxRowReverse, FxCol, Btn, XImg, FxRow, Flex, Logo },
}
</script>

<template>
    <!-- Hero -->
    <div class="w-screen h-screen bg-dark">
        <!-- <nav class=" lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block mt-36">
            <div class="absolute left-50 transform -translate-x-1/2 space-y-6">
                <nuxt-link to="#" class="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-dark">
                    <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
                </nuxt-link>

                <nuxt-link to="#" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-dark">
                    <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
                </nuxt-link>

                <nuxt-link to="#" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-dark">
                    <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
                </nuxt-link>

                <nuxt-link to="#" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-dark">
                    <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
                </nuxt-link>
            </div>
        </nav> -->

        <flex class="relative flex-wrap justify-center w-full">
            <logo src="logo/logo.svg" alt="Logo" class="fixed top-10 left-10 z-20 w-48 h-48" />
            <!-- Content -->
            <fx-col class="z-20 absolute flex-1 lg:bottom-28 lg:left-28 text-center py-4 px-4">
                <h2 class="text-blue font-bold  text-3xl md:text-4xl lg:text-5xl text-center md:text-left mb-6">
                    Lorem ipsum dolor sit
                </h2>

                <p class="text-gray text-lg text-center lg:text-left mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ad quis quaerat.
                </p>

                <fx-row class="justify-center flex-wrap gap-6">
                    <btn class="btn-outlined-blue">Click</btn>
                    <btn class="btn-white">Click</btn>
                </fx-row>

                <!-- <div class="absolute top-0 left-0 w-full h-full bg-blue opacity-10"></div> -->
            </fx-col>

            <!-- Image -->
            <fx-row class=" w-screen h-screen justify-center flex-1">
                <div class="hero-box ">

                    <!-- Card 3D -->
                    <div class="card-3d ">
                        <span class="t_over"></span>
                        <span class="t_over"></span>
                        <span class="t_over"></span>
                        <span class="t_over"></span>
                        <span class="t_over"></span>
                        <span class="t_over"></span>
                        <span class="t_over"></span>
                        <span class="t_over"></span>
                        <span class="t_over"></span>
                        <div class="card-3d__box">
                            <div class="card-3d__box--image">
                                <x-img src="/hero/hero-bg.jpg" alt="Hero" />
                            </div>
                            <div class="card-3d__box--content">
                                <h2>Title box hover effects</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quam veritatis vel atque aliquid consequuntur delectus odit voluptates!</p>
                            </div>
                        </div>
                    </div>


                    <div class="hero-box-img">
                        <x-img src="/hero/hero-bg.jpg" alt="Hero" class="hero-box__image hero-box__image--2 " />
                    </div>
                    <div class="hero-box-img">
                        <x-img src="/hero/hero-bg.jpg" alt="Hero" class="hero-box__image hero-box__image--3" />
                    </div>
                </div>
            </fx-row>

            <div class="z-10 fixed top-0 left-0">
                <div class="absolute top-0 -left-4 w-72 h-72 bg-purple rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
                <div class="absolute top-0 -right-4 w-72 h-72 bg-orange rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-4000"></div>
                <div class="absolute top-0 -left-4 w-72 h-72 bg-blue rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000"></div>
            </div>

            <!-- Rounded Rectangle -->
            <div class="z-10 block overflow-hidden  h-full w-full absolute opacity-30 bottom-0 right-0 bg-gradient-to-tl from-blue via-purple bg-dark "></div>
            <!-- <div class="z-10 overlay1 block overflow-hidden opacity-20  h-full w-full absolute bottom-0 right-0 bg-gradient-to-tl from-blue via-purple bg-dark "></div> -->
            <div class="z-10 overlay2 block overflow-hidden  h-full w-full opacity-80 absolute bottom-0 right-0 bg-gradient-to-tl from-blue via-purple bg-dark "></div>

        </flex>
    </div>
</template>

<style lang="scss" scoped>
.overlay1 {
    clip-path: circle(34.6% at 100% 0);
}

.overlay2 {
  clip-path: ellipse(42% 100% at 0% 50%);
}

.hero-box {
    width: 70%;
    height: 70%;
    position: absolute;
    top: 0;
    right: 0;

    &__image {
        position: absolute;
        transform: skew(-20deg);
    
        &--1 {
            height: 70%;
            z-index: 11;
            top: 5rem;
            right: 5rem;
        }
    
        &--2 {
            height: 25%;
            z-index: 12;
            top: 30rem;
            right: 5rem;
        }
    
        &--3 {
            height: 25%;
            z-index: 10;
            top: .1rem;
            right: 30rem;
        }
    }
}

.card-3d {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px 0;
    transform-style: preserve-3d;
    transition: all 0.5s ease-in-out;
    perspective: 1000px;
    transform: skew(-20deg);

    :hover {
        transition: all 0.3s linear;
    }

    &__box {
        position: relative;
        width: 450px;
        height: 300px;
        margin: 60px 0;
        background: #000;
        background: #000;
        cursor: pointer;
        perspective: 1000px;
        transform-style: preserve-3d;
        transition: all 0.5s ease-in-out;
        transform: rotateX(0deg) rotateY(0deg);

        &:hover {
            box-shadow: 0 50px 80px rgba($color: #000000, $alpha: 0.2);
        }
    
        &--image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    
        &--content {
            position: absolute;
            top: 50%;
            left: 50px;
            right: 50px;
            background: #fff;
            transform:  translateZ(20px) scaleY(0);
            padding: 40px 25px;
            transform-origin: top;
            transition: 0.5s;
            transform-style: preserve-3d;
        }
    
        &:hover .card-3d__box--content {
            z-index: 44;
            transform:  translateZ(30px) scaleY(1);
        }
    }
}
.t_over {
    width: 33.333%;
    height: 33.333%;
    position: absolute;
    z-index: 41;
}

.t_over:nth-child(1) { left: 0; top: 0;}
.t_over:nth-child(2) { left: 33.333%; top: 0;}
.t_over:nth-child(3) { left: 66.666%; top: 0;}
.t_over:nth-child(4) { left: 0; top: 33.333%;}
.t_over:nth-child(5) { left: 33.333%; top: 33.333%;}
.t_over:nth-child(6) { left:  66.666%; top: 33.333%;}
.t_over:nth-child(7) { left: 0; top: 66.666%;}
.t_over:nth-child(8) { left: 33.333%; top: 66.666%;}
.t_over:nth-child(9) { left:  66.666%; top: 66.666%;}


.t_over:nth-child(1):hover ~ .card-3d__box {transform: rotateX(-20deg) rotateY(20deg);}
.t_over:nth-child(2):hover ~ .card-3d__box {transform: rotateX(-20deg) rotateY(0);}
.t_over:nth-child(3):hover ~ .card-3d__box {transform: rotateX(-20deg) rotateY(-20deg);}
.t_over:nth-child(4):hover ~ .card-3d__box {transform: rotateX(0) rotateY(20deg);}
.t_over:nth-child(5):hover ~ .card-3d__box {transform: rotateX(0) rotateY(0);}
.t_over:nth-child(6):hover ~ .card-3d__box {transform: rotateX(0) rotateY(-20deg);}
.t_over:nth-child(7):hover ~ .card-3d__box {transform: rotateX(20deg) rotateY(20deg);}
.t_over:nth-child(8):hover ~ .card-3d__box {transform: rotateX(20deg) rotateY(0);}
.t_over:nth-child(9):hover ~ .card-3d__box {transform: rotateX(20deg) rotateY(20deg);}
</style>