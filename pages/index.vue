<script>
import Btn from '~/components/buttons/Btn';
import Hero from '~/components/sections/home/Hero';
import Features from '~/components/sections/home/Features';
import FxCol from '~/components/flex/FxCol';
import Layout from '~~/components/layouts/Layout.vue';

export default {
  components: { Btn, Hero, Features, FxCol, Layout },
    name: 'Homepage',
    layouts: 'default',
}
</script>

<script setup>
import { ref, onMounted } from '#imports';

const X = ref(null);
const heroSection = ref(null);
const featureSection = ref(null);
const bgColor = ref('');

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

function handleScroll() {
    
    if (window.scrollY >= (heroSection.value.offsetHeight )) {
    
        X.value = -(window.scrollY - heroSection.value.offsetHeight);
    }

    if (X.value <= - (featureSection.value.offsetHeight - window.innerWidth)) {
    
        X.value = -(featureSection.value.offsetHeight - window.innerWidth);
    }

    if (window.scrollY < heroSection.value.offsetHeight) {
    
        X.value = 0;
    }
}

function handleScroll2() {
    
    if (window.scrollY <= heroSection.value.offsetHeight) {
        bgColor.value = 'bg-white';
    }

    if (window.scrollY >= heroSection.value.offsetHeight) {
        bgColor.value = 'bg-dark';
    }

    if (window.scrollY >= featureSection.value.offsetHeight) {
        bgColor.value = 'bg-white';
    }
}

onMounted(() => {
    document.addEventListener('scroll',handleScroll);
    document.addEventListener('scroll',handleScroll2);
})
</script>

<template>
    <flex class="flex-wrap justify-center relative w-full transition duration-500 ease-in-out">
        <section ref="heroSection" class="relative h-screen w-full"> 
            <hero  />
        </section>

        <section ref="featureSection" class="relative block m-auto w-full" :style="{'height': `${items.length * 100}vw`}" >
            <features :class="bgColor" :x="X" :items="items"/>
        </section>
    </flex>
</template>
