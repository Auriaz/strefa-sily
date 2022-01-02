<script>
import XImg from '~/components/images/XImg';

export default {
    name: 'Teams',
    components: {
        XImg,
        
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

const isAction = ref(false);
const target = ref(null);

function event(el) {
    isAction.value = !isAction.value;
    target.value = el.target
    console.log(el.target, isAction.value) 
}

onMounted(() => {

    let elements = gsap.utils.toArray('.team-cart__container');

    elements.forEach(el => {

        gsap.fromTo(el, {
            opacity: 0,
            width: 0,
        }, {
            opacity: 1,
            width: '100%',
            duration: 1,
            delay: .2,
            // stagger: 0.2,
            ease: 'ease',
            scrollTrigger: {
                trigger: '.team-cart__container',
                start: '-250px top',
                end: "top 350px",
                scrub: true,
                // markers: true,
                toggleActions: 'restart pause reverse pause',
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
    <div class="w-screen mt-32 relative">
        <div class="text-center w-full my-10">
            <h2 class="font-extrabold tracking-tight mb-2 text-3xl xl:text-5xl lg:text-4xl">Nasi trenerzy</h2>
            <h4 class="text-gray mb-5">This is a simple TailwindCSS pricing table.</h4>
        </div>

        <ul class="team-cart__container mt-10 w-full flex justify-center items-center gap-8 snap-x" :class="teams.length > 3 ? 'sm:overflow-x-scroll lg:overflow-x-hidden': 'flex-col md:flex-row'">
            <!-- Coach cards -->
            <li v-for="coach in teams" :key="coach.id" class="tilt-card rounded-lg hover:bg-dark hover:border-2 hover:border-blue px-8 py-14 relative snap-center hover:shadow-xl" :class="`tilt-card-${coach.id}`">
                <x-img :src="coach.image" :alt="coach.name" class="tilt-card__image2 absolute inset-0 opacity-0 h-full w-full object-cover object-bottom"/>
                <h2 class="tilt-card__title text-gray text-center text-xl font-medium uppercase transition-all duration-500 opacity-0 z-10 absolute top-0 left-0 w-full">
                    {{ coach.name }} {{ coach.surname }}
                </h2>

                <nuxt-link to="#" class="tilt-card--action bottom-10 absolute text-blue hover:text-orange bg-dark  px-2 py-2 font-medium rounded-full transition-all duration-500 opacity-0 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                    </svg>
                </nuxt-link>
                
                <div class="tilt-card__box relative flex-shrink-0 max-w-[30vw] overflow-hidden rounded-3xl" :class="`box-image-${coach.id}`">

                    <x-img :src="coach.image" :alt="coach.name" class="tilt-card__image absolute inset-0  h-[350px] w-[250px] object-cover object-bottom"/>

                    <div class="absolute inset-0 h-full w-full bg-gradient-to-br from-blue opacity-25"></div>

                    <div class="relative h-[300px] w-[200px] p-12 flex flex-col justify-between items-start"></div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import '~/assets/css/abstracts/_variables/colors';
.tilt-card {
    transform-style: preserve-3d;
    // margin-top: 200px;

    &__title {
        transform: translate3d(0, 0, 50px);
        transform-style: preserve-3d;
    }

    &:hover .tilt-card__title {
        top: 1rem;
        opacity: 1;
    }

    &--action {
        left: 50%;
        transform: translate3d(-50%, 0, 50px);
        transform-style: preserve-3d;
    }

    &:hover .tilt-card--action {
        bottom: 1.5rem;
        opacity: .8;
    }

    &__image {
        transform-style: preserve-3d;
    }

    &:hover .tilt-card__image {
        transform: translate3d(0, 0, 50px);
        transform-style: preserve-3d; 
    }

    .tilt-card__image2 {
        border-radius: 0.25rem;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        transition: all 0.5s ease;
    }

    &:hover .tilt-card__image2 {
        opacity: .2;
    }
}

.isActive{
    @apply scale-110;
}

</style>