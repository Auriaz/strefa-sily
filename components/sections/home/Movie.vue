<script>
import XImg from '~/components/images/XImg';
import Flex from '~/components/flex/Flex';
import FxCol from '~/components/flex/FxCol';
import FxRow from '~/components/flex/FxRow';
import SliderScale from '~/components/sliders/SliderScale';

export default {
    name: 'Movie',
    components: {
        XImg, Flex, FxCol, FxRow,
        SliderScale, 
    }
}
</script>

<script setup>
    const isDark = useTheme();
    const props = defineProps({
        movies: Object,
    });
</script>

<template>
    <fx-row class="relative justify-center items-end w-full h-full " :class="`${isDark ? 'bg-dark': 'bg-white'}`">
        <!-- <div class="absolute top-10 text-center w-full my-3 md:my-12 z-10">
            <h2 class="font-extrabold tracking-tight mb-2 text-3xl xl:text-5xl lg:text-4xl">Nasze filmy</h2>
            <h4 class="text-gray mb-5">This is a simple TailwindCSS pricing table.</h4>
        </div> -->

        <fx-row class="relative z-10  w-screen h-full">
            <slider-scale :items="movies"/>
        </fx-row>
        
        <div class="overlay hidden md:block overflow-hidden h-screen w-screen absolute left-0 top-0" :class="`${isDark ? 'bg-gradient-to-tl from-blue via-blue bg-dark ' : 'bg-blue'}`" ></div>
        <!-- <div class="overlay hidden md:block overflow-hidden h-screen w-screen absolute opacity-30 bottom-0 right-0" :class="`${isDark ? 'bg-gradient-to-tl from-blue via-blue bg-dark' : ''}`"></div> -->
    </fx-row>
</template>

<style lang="scss" scoped>
.overlay {
    clip-path: circle(50% at 103% 0);
}
</style>