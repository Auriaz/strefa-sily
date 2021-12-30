<script>
import Flex from '~/components/flex/Flex';
import FxCol from '~~/components/flex/FxCol.vue';
import Layout from '~/components/layouts/Layout';
import FeatureCard from '~/components/cards/home/FeatureCard';



export default {
    name: 'Features',
    components: {Layout, Flex, FeatureCard, FxCol},
    props: {
        x: {
            type: Number,
            default: 3
        },
        items: {
            type: Object,
            required: true,
        }
    }
}
</script>

<script setup>
import { ref } from '#imports';

</script>

<template>
    <!-- Features -->
    <div
        class="hidden md:flex lg:flex justify-between items-center sticky top-0 pt-8 pb-8 h-screen"
        style="will-change:transform;transform-style:preserve-3d"
        :style="{'transform' : 'translate3d('+ x + 'px ,0px ,0px)', 'width': `${items.length * 100}vw`}"
    >
        <!-- Feature Card -->
        <feature-card  v-for="item in items" :key="item.id" :item="item" />
    </div>
</template>