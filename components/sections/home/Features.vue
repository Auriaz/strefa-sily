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
            default: 0
        },
        y: {
            type: Number,
            default: 0
        },
        activities: {
            type: Object,
            required: true,
        }
    },
}
</script>

<script setup>
import { onMounted } from '#imports'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const isDark = useTheme();

onMounted(() => {
    const cards = gsap.utils.toArray('.feature-card');
    const images1 = gsap.utils.toArray('.feature-card-image');
    const images2 = gsap.utils.toArray('.feature-card-image2');
    const contents = gsap.utils.toArray('.feature-card-content');
    const duration = 1;

    images1.forEach((image, index) => {
        gsap.fromTo(image, {
            opacity: 0,
            x: 400,
            scale: 0,
        }, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: duration,
            // delay: .4,
            ease: 'easeInOut',
            scrollTrigger: {
                trigger: cards[index],
                // horizontal: true,
                start: '-200px top',
                end: "-150px",
                // pin:true,
                // scrub: true,
                // markers: true,
                // snap: (cards[index] + 1)/(cards.length -1),
                // toggleActions: 'restart pause reverse pause',
            },
        }
        );
    });

    images2.forEach((image, index) => {

        gsap.fromTo(image, {
            x: -300,
            opacity: 0,
            scale: 0,
        }, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: duration,
            // delay: .2,
            scrollTrigger: {
                trigger:  cards[index],
                // horizontal: true,
                start: '-200px top',
                end: "-150px",
                // pin:true,
                // scrub: true,
                // markers: true,
                // snap: (cards[index] + 1)/(cards.length -1),
                // toggleActions: 'restart pause reverse pause',
            },
        });
    });

    contents.forEach((content, index )=> {

        gsap.fromTo(content, {
            opacity: 0,
            y: -400,
            scale: 0,
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: duration,
            // delay: .2,
            ease: 'easeInOut',
            scrollTrigger: {
                trigger: cards[index],
                // horizontal: true,
                start: '-200px top',
                end: "-150px",
                // pin:true,
                // scrub: true,
                // snap: (cards[index] + 1)/(cards.length -1),
                // // markers: true,
                // toggleActions: 'restart pause reverse pause',
            },
        });
    });
});

</script>

<template>
    <!-- Features -->
    <div class="features-container snap-x snap-mandatory justify-between items-center sticky top-0 py-8 h-screen"
        :class="`${isDark ? 'bg-dark' : 'bg-blue'}`"
        style="will-change:transform;transform-style:preserve-3d"
        :style="{'transform' : 'translate('+ x + 'px)', 'width': `${activities.length * 100}vw`}"
    >
        <!-- Feature Card -->
        <feature-card  v-for="(item, index) in activities" :key="index" :item="item" :index="index" />
    </div>
</template>