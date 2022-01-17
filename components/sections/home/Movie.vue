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
    const movie = [
        { src: "10XjhfUvW-4"},
        { src: "rBPktD5ck1k"},
        { src: "zfCMD9tsorg"},
        { src: "C8bk9lkQp2g"},
        { src: "LJxfojXsLzk"},
        { src: "-mxJDBQdURI"},
        { src: "YVFCezwHqNo"},
        { src: "Zk076tZBnMI"},
    ]
</script>

<template>
    <fx-row class="relative w-full h-full" :class="`${isDark ? 'bg-dark': 'bg-white'}`">
        <!-- Background -->
        <!-- <div class="block overflow-hidden  h-full w-full absolute top-0 left-0 opacity-30 bottom-0 right-0" :class="`${isDark ? 'bg-gradient-to-tr  from-dark via-blue bg-blue' : ''}`"></div> -->

        <fx-col class="relative w-screen h-full">
            <slider-scale :items="movie"/>
        </fx-col>       
    </fx-row>
</template>