<script>
import XImg from '~/components/images/XImg';
import PersonalCard from '~/components/cards/home/PersonalCard';

export default {
    name: 'Teams',
    components: {
        XImg, PersonalCard
        
    },
    props: {
        teams: {
            type: Object,
            required: true,
        }
    }
}
</script>

<script setup>
import { ref, onMounted } from '#imports';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const isDark = useTheme();

const props = defineProps({
    teams: Object,
});

onMounted(() => {

    let elements = gsap.utils.toArray('.team-cart__container');

    elements.forEach(el => {

        gsap.fromTo(el, {
            opacity: 0,
            width: 0,
            x: '-=360'
        }, {
            opacity: 1,
            width: '100%',
            duration: 1,
            delay: .2,
            x: '0',
            // stagger: 0.2,
            ease: 'ease',
            scrollTrigger: {
                trigger: '.team-cart',
                start: '-300px top',
                end: "top 350px",
                // scrub: true,
                // // markers: true,
                // toggleActions: 'restart pause reverse pause',
            },
        });
    });


    document.addEventListener('mousemove', function(event) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const positionX = (event.clientX/width) - 0.55;
        const positionY = (event.clientY/height) - 0.55;
        
        elements.forEach(element =>{
            gsap.to(element, {
                rotationY: positionX * 30,
                rotationX: -positionY * 20,
                ease: "ease",
                scale: 1.05,
                duration: .3,
            })
        })
    });

});
</script>

<template>
    <div class="team-cart h-auto w-full py-8 md:py-16 px-5 xs:px-10 relative" :class="`${isDark ? 'bg-blue-dark' : 'bg-white'}`">
        <div class="text-center w-full my-3 md:my-12">
            <h2 class="font-extrabold tracking-tight mb-2 text-3xl xl:text-5xl lg:text-4xl">Nasi trenerzy</h2>
        </div>

        <ul class="team-cart__container mt-10 w-full flex justify-center items-center gap-8 snap-x" :class="teams.length > 3 ? 'sm:overflow-x-scroll lg:overflow-x-hidden': 'flex-col md:flex-row'">
            <!-- Coach cards -->
            <personal-card v-for="(coach, index) in teams" :key="index" :coach="coach" :index="index" />
        </ul>
    </div>
</template>