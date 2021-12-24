<script>
import Flex from '~/components/flex/Flex';
import Layout from '~/components/layouts/Layout';
import FeatureCard from '~/components/cards/home/FeatureCard';



export default {
    name: 'Features',
    components: {Layout, Flex, FeatureCard},
}
</script>

<script setup>
import { ref } from '#imports';

const items = ref([
    {
        id: 1,
        direction: 'left',
        image: {
            src: '/default.jpg',
            alt: 'default'
        },
        title: 'Powerlifting',
        content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga doloremque illum, quod autem veniam sint accusantium molestiae quaerat velit, dolore officia dicta sed. Accusantium, itaque? Distinctio dolores cumque incidunt!'
    },
    {
        id: 2,
        direction: 'right',
        image: {
            src: '/default.jpg',
            alt: 'default'
        },
        title: 'Cross-Training',
        content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga doloremque illum, quod autem veniam sint accusantium molestiae quaerat velit, dolore officia dicta sed. Accusantium, itaque? Distinctio dolores cumque incidunt!'
    },
    {
        id: 3,
        direction: 'left',
        image: {
            src: '/default.jpg',
            alt: 'default'
        },
        title: 'Cross Intro',
        content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga doloremque illum, quod autem veniam sint accusantium molestiae quaerat velit, dolore officia dicta sed. Accusantium, itaque? Distinctio dolores cumque incidunt!'
    },
    {
        id: 4,
        direction: 'right',
        image: {
            src: '/default.jpg',
            alt: 'default'
        },
        title: 'Wake Up Cross',
        content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga doloremque illum, quod autem veniam sint accusantium molestiae quaerat velit, dolore officia dicta sed. Accusantium, itaque? Distinctio dolores cumque incidunt!'
    },
]);
</script>

<template>
    <!-- Features -->
    <div class="bg-white py-20 mt-20 lg:mt-60">
        <!-- Heading -->
        <div class="sm:-3/4 lg:w-5/12 mx-auto px-2">
            <h2 class="text-3xl text-center text-blue">
                Zajęcia
            </h2>
            <p class="text-center text-grey mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga doloremque illum, quod autem veniam sint accusantium molestiae quaerat velit, dolore officia dicta sed. Accusantium, itaque? Distinctio dolores cumque incidunt!
            </p>
        </div>

        <!-- Feature Card -->
        <layout v-for="item in items" :key="item.id" >
            <feature-card v-if="item" :item="item" />

            <p v-else class="text-gray">Brak wyników</p>
        </layout>
    </div>
</template>