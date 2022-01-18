<script>
import Flex from '~/components/flex/Flex';
import XImg from '~/components/images/XImg';
import Btn from '~/components/buttons/Btn';
import FxRow from '~/components/flex/FxRow';


export default {
    name: 'FeatureCard',
    components: { Flex, XImg, Btn, FxRow },
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
}
</script>

<script setup>
const isDark = useTheme();
</script>

<template>
    <div class="feature-card mt-20 justify-center items-center relative z-20 mx-4" :class="`feature-card-${item.id}`">
        <flex class=" feature-card col-row flex-wrap w-screen h-screen lg:flex-row items-center justify-center">     
            <!-- Picture -->
            <div class="feature-card-image absolute shadow-gray shadow hidden xs:block top-[25%] w-[45%] left-[55%] lg:top-[25%] lg:w-[35%] lg:left-[55%] z-20" :class="`feature-card-image-${item.id}`">
                <x-img :src="item.image.src" :alt="item.image.alt" class="w-full border-blue"/>
            </div>
            <!-- Small image -->
            <div  class="feature-card-image2 absolute  opacity-0 shadow-gray shadow hidden lg:block lg:top-[55%] lg:w-[20%] lg:left-[40%]  xl:top-[65%] xl:w-[20%] xl:left-[40%] z-10"  :class="`feature-card-image2-${item.id}`">
                <x-img :src="item.image.src" :alt="item.image.alt" class="w-full border-blue"/>
            </div>

                <!-- Content -->
            <div class="feature-card-content absolute p-3 rounded shadow-gray shadow-2xl min-w-[280px] max-w-[320px] h-[380px] left-0  top-10 md:left-[20%] lg:left-[27%] lg:top-[-22%] lg:mt-[20%] xl:left-[32%] xl:top-[-10%] xl:mt-[15%] z-10"  :class="`feature-card-content-${item.id}  ${isDark ? 'bg-dark' : 'bg-white'}`">
                <!-- Title -->
                <h3 class="absolute bottom-[320px] left-[0] text-4xl w-[100%] h-[60px] text-center p-3 rounded z-20" :class="`${isDark ? 'text-dark bg-gray' : 'bg-blue-dark text-blue'}`">{{ item.title }}</h3>

                <!-- Text -->
                <p class="text-gray mt-[55px] mb-4 px-2 text-center lg:text-left sm:w-3/4 lg:w-full">{{ item.content }}</p>

                <!-- Actions -->
                <fx-row class=" absolute bottom-5 justify-center left-0 right-0  flex-wrap gap-6">
                    <!-- <btn class="btn-outlined-blue"><NuxtLink :to="`/activities/${item.title}`">Więcej</NuxtLink></btn> -->
                    <btn class="btn-blue">Kup online</btn>
                </fx-row>
            </div>
        </flex>
    </div>
</template>