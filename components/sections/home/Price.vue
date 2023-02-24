<script>
import Btn from '~/components/buttons/Btn';

export default {
    name: 'Price',
    components: {
        Btn, 
    },
}
</script>

<script setup>
import { onMounted, ref } from '#imports';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const isDark = useTheme();
const props = defineProps({
    prices: Object,
    personalPrices: Object,
});

// const basicPrices = ref([]);
// const personalPrices = ref([]);


// props.prices.forEach(price => {
//     if(!price.attributes.isPersonal) {
//         basicPrices.value.push({
//             title: price.title,
//             price: price.price,
//             single: price.attributes.isSingle,
//             package: price.attributes.price_packages.data
//         });
//     } 

//     if(price.attributes.isPersonal) {
//         personalPrices.value.push({
//             title: price.attributes.title,
//             price: price.attributes.price,
//             single: price.attributes.isSingle,
//             package: price.attributes.price_packages.data
//         });
//     }
// })

onMounted(() => {
    let elements = gsap.utils.toArray('.price__box');

    elements.forEach(el => {

        gsap.fromTo(el, {
            y: '-=300',
            opacity: 0,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: .2,
            ease: 'easeInOut',
            scrollTrigger: {
                trigger: '.price__container',
                start: '-150px top',
                end: "150px 350px",
                // scrub: true,
                // toggleActions: 'restart pause reverse pause',
            },
        });
    });
});
</script>

<template>
    <div class="price__container min-h-full w-full px-5 xs:px-20 py-16 relative" :class="`${isDark ? 'bg-blue-dark' : 'bg-white'}`">
        <div class="text-center w-full my-12">
            <h2 class="font-extrabold tracking-tight mb-2 text-3xl xl:text-5xl lg:text-4xl">Cennik</h2>
            <h3 class="text-gray text-3xl mb-5">Zajęcia plus wolne wejścia.</h3>
            <p>Do pierwszego zakupu karnetu doliczamy 10 zł za kartkę klubowa.</p>
        </div>

        <div class="price__box relative flex flex-col md:flex-row flex-wrap w-full px-2 md:px-0 mt-10 justify-center items-center gap-6 snap-x">
            <!-- Price card basic -->
            <div v-for="(price, index) in prices" :key="index"  class="price-card bg-white relative flex flex-col w-full h-[480px] md:min-w-[240px] md:max-w-[320px] md:max-h-[700px] hover:scale-110 hover:bg-white rounded-lg shadow shadow-dark hover:shadow-xl  transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
                <h3 class="price-card__title text-dark text-2xl text-bold mb-4">{{ price.title }}</h3>

                <p class="price-card__price text-gray mt-1"> <span class="font-bold text-indigo text-4xl">{{ price.price }}</span>zł <span v-if="!price.single">za miesiąc</span> </p>

                <div class="price-card__package text-lg text-dark mt-6 mb-16">
                    <h3>Pakiet składa się z: </h3>
                    <p v-for="(info, index) in price.package" :key="index" class="my-2  flex flex-wrap flex-row text-gray text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-green hidden 3xs:block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg> {{ info.info }}
                    </p>
                </div>

                <div class="price-card__action absolute bottom-3 left-3 right-3 flex justify-center items-center">
                    <btn class=" btn-indigo hover:shadow-xl transition duration-150 ease-in-out w-full">
                        <a href="https://movementarenasuwalki.gymmanager.com.pl/Buypass/Passes" target="_blank" >
                            Kup online
                        </a>
                    </btn>
                </div>
            </div>
        </div>

        <div class="text-center w-full my-10">
            <h3 class="text-gray text-3xl mb-5">Treningi personalne</h3>
        </div>

        <div class="price__box relative flex flex-col md:flex-row flex-wrap w-full px-2 md:px-0 mt-10 justify-center items-center gap-8 snap-x">
            <!-- Price card personal -->
            <div v-for="(price, index) in personalPrices" :key="index" class="price-card relative flex flex-col w-full h-[480px] md:min-w-[240px] md:max-w-[320px] md:max-h-[700px] hover:scale-110 rounded-lg shadow shadow-gray-light hover:shadow-xl  transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0" :class="`${isDark ? 'bg-dark' : 'bg-blue-dark'}`">
                <h3 class="price-card__title rounded  text-2xl text-bold  mb-4" :class="`${isDark ? 'text-gray-light' : 'text-blue'}`">{{ price.title }}</h3>

                <p class="price-card__price text-gray mt-1"> <span class="font-bold text-gray-light text-4xl">{{ price.price }}</span> zł</p>

                <div class="price-card__package text-lg text-gray-light mt-6 mb-16 ">
                    <h3>Pakiet składa się z: </h3>
                    <p v-for="(info, index) in price.package" :key="index" class="my-2 text-gray  flex flex-wrap flex-row  text-sm"> 
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-green hidden 3xs:block 
                         h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>{{ info.info }}
                    </p>
                </div>

                <div class="price-card__action absolute bottom-3 left-3 right-3 flex justify-center items-center">
                    <btn class="btn-outlined-blue hover:shadow-xl transition duration-150 ease-in-out w-full">
                        <a href="https://movementarenasuwalki.gymmanager.com.pl/Buypass/Passes" target="_blank" >
                            Kup online
                        </a>
                    </btn>
                </div>
            </div>
        </div>
    </div>
</template>