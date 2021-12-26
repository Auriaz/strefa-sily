<script>
import Flex from '~/components/flex/Flex';
import FxCol from '~/components/flex/FxCol';
import XImg from '~/components/images/XImg';
import Layout from '~/components/layouts/Layout';
import Btn from '~/components/buttons/Btn';
import FxRow from '~/components/flex/FxRow';

export default {
    name: 'FeatureCard',
    components: { Flex, XImg, FxCol, Layout, Btn, FxRow },
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
}
</script>

<template>
    <div class="relative mt-20 lg:mt-24">
        <layout class="flex-col lg:flex-row items-center justify-center gap-x-24">
            <!-- Picture -->
            <flex class="flex-1 justify-center z-10 mb-10 lg:mb-0">
                <x-img :src="item.image.src" :alt="item.image.alt" class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:f-full"/>
            </flex>

            <!-- Content -->
            <fx-col class="flex-1 items-center lg:items-start">
                <h3 class="text-3xl text-blue">{{ item.title }}</h3>

                <p :class="`text-gray my-4 text-center lg:text-${item.direction === 'right' ?   'right' : 'left'} sm:w-3/4 lg:w-full`">{{ item.content }}</p>
                
                <fx-row class="justify-center flex-wrap gap-6">
                    <btn class="btn-outlined-purple">Click</btn>
                    <btn class="btn-white">Click</btn>
                </fx-row>
            </fx-col>

            <!-- Rounded Rectangle -->
            <div :class="`hidden md:block overflow-hidden bg-purple rounded-${item.direction === 'right' ?   'r' : 'l'}-full absolute h-80 w-2/4 top-32 ${item.direction === 'right' ?   'right' : 'left'}-0 lg:-bottom-28 lg:-${item.direction === 'right' ?   'right' : 'left'}-36`"></div>
        </layout>

    </div>
</template>