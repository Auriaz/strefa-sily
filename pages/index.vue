<script>
import Btn from '~/components/buttons/Btn';
import Hero from '~/components/sections/home/Hero';
import Features from '~/components/sections/home/Features';
// import FeaturesMs from '~/components/sections/home/FeaturesMs';
import FxCol from '~/components/flex/FxCol';
import Layout from '~/components/layouts/Layout.vue';
import Teams from '~/components/sections/home/Teams';
import Information from '~/components/sections/home/Information';
import Price from '~/components/sections/home/Price';

export default {
    name: 'Homepage',
    components: { Btn, Hero, Features,  Teams, FxCol, Layout, Information, Price },
    layouts: 'default',
}
</script>

<script setup>
import { ref, onMounted } from '#imports';

const X = ref(null);
const Y = ref(null);
const informationSection = ref(null);
const featureSection = ref(null);
const bgColor = ref('');

const items = ref([
    {
        id: 0,
        image: {
            src: 'https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-5-1024x683.jpg',
            alt: 'default'
        },
        title: 'Powerlifting',
        content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga doloremque illum, quod autem veniam sint accusantium molestiae quaerat velit, dolore officia dicta sed. Accusantium, itaque? Distinctio dolores cumque incidunt!'
    },
    {
        id: 1,
        image: {
            src: 'https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-5-1024x683.jpg',
            alt: 'default'
        },
        title: 'Cross-Training',
        content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga doloremque illum, quod autem veniam sint accusantium molestiae quaerat velit, dolore officia dicta sed. Accusantium, itaque? Distinctio dolores cumque incidunt!'
    },
    {
        id: 2,
        image: {
            src: 'https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-7-1024x683.jpg',
            alt: 'default'
        },
        title: 'Cross Intro',
        content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga doloremque illum, quod autem veniam sint accusantium molestiae quaerat velit, dolore officia dicta sed. Accusantium, itaque? Distinctio dolores cumque incidunt!'
    },
    {
        id: 3,
        image: {
            src: 'https://movementarena.pl/suwalki/wp-content/uploads/2020/06/MG_0530-1024x683.jpg',
            alt: 'default'
        },
        title: 'Wake Up Cross',
        content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga doloremque illum, quod autem veniam sint accusantium molestiae quaerat velit, dolore officia dicta sed. Accusantium, itaque? Distinctio dolores cumque incidunt!'
    },
]);

const data = ref([
    {
        id:  0,
        name: 'Adam',
        surname: 'Stankiewicz',
        image: 'https://movementarena.pl/suwalki/wp-content/uploads/2020/07/69995255_2516287848419388_3769486607204220928_o-1024x684.jpg',
        role: 'Trener strefy siły',
        description: 'Bla bla bla i jeszcze raz bla',
    },
    {
        id:  1,
        name: 'Adam',
        surname: 'Stankiewicz',
        image: 'https://movementarena.pl/suwalki/wp-content/uploads/2020/07/69995255_2516287848419388_3769486607204220928_o-1024x684.jpg',
        role: 'Trener strefy siły',
        description: 'Bla bla bla i jeszcze raz bla',
    },
    {
        id:  2,
        name: 'Adam',
        surname: 'Stankiewicz',
        image: 'https://movementarena.pl/suwalki/wp-content/uploads/2020/07/69995255_2516287848419388_3769486607204220928_o-1024x684.jpg',
        role: 'Trener strefy siły',
        description: 'Bla bla bla i jeszcze raz bla',
    },

]);

const prices = [
    {
        id: 0,
        title: 'Karnet miesięczny na strefę siły',
        classes: false,
        freeEntry: true,
        single: false,
        price: 85,
        package: [
            {info: 'Wejścia wolne'},
            {info: 'Ważny 30 dni'},
        ]
    },
    {
        id: 1,
        title: 'Karnet 4 wejścia na zajęcia w miesiącu',
        classes: true,
        freeEntry: false,
        single: false,
        price: 80,
        package: [
            {info: '4 wejścia na zajęcia'},
            {info: 'Ważny 30 dni'},
        ]
    },
    {
        id: 2,
        title: 'Karnet miesięczny - zajęcia',
        classes: true,
        freeEntry: false,
        single: false,
        price: 160,
        package: [
            {info: 'Wszyskie zajęcia'},
            {info: 'Wejścia wolne'},
            {info: 'Ważny 30 dni'},
        ]
    },
        {
        id: 3,
        title: 'Pojedyńcze wejscie wolne',
        classes: true,
        freeEntry: false,
        single: true,
        price: 19,
        package: [
            {info: 'Wejścia wolne na strefę siły'},
            {info: 'Wejście pojedyńcze'},

        ]
    },
            {
        id: 4,
        title: 'Pojedyńcze wejscie na zajęcia',
        classes: true,
        freeEntry: false,
        single: true,
        price: 30,
        package: [
            {info: 'Wejście na dowolne zajecia'},
            {info: 'Wejście pojedyńcze'},

        ]
    },
];

const personalPrices = [
    {
        id: 0,
        title: 'Trening personalny',
        classes: false,
        freeEntry: true,
        price: 80,
        package: [
            {info: 'Trening pod okiem wykwalifikowanego trenera'},
            {info: 'Od zakupu do wykorzystania, ważny 3 miesiące.'},
        ]
    },
    {
        id: 1,
        title: 'Karnet 5 treningów personalnych ',
        classes: true,
        freeEntry: false,
        price: 375,
        package: [
            {info: 'Trening pod okiem wykwalifikowanego trenera'},
            {info: 'Od zakupu do wykorzystania, ważny 3 miesiące.'},
            {info: 'Do wykorzystania 5 treningów.'},
        ]
    },
    {
        id: 2,
        title: 'Karnet 10 treningów personalnych',
        classes: true,
        freeEntry: false,
        price: 700,
        package: [
            {info: 'Trening pod okiem wykwalifikowanego trenera'},
            {info: 'Od zakupu do wykorzystania, ważny 3 miesiące.'},
            {info: 'Do wykorzystania 10 treningów.'},
        ]
    },
]

function handleScroll() {
    if (window.scrollY >= informationSection.value.offsetHeight + window.innerHeight ) {
        X.value = -(window.scrollY - (informationSection.value.offsetHeight + window.innerHeight));
    }

    if (X.value <= -(featureSection.value.offsetHeight - window.innerWidth)) {
    
        X.value = -(featureSection.value.offsetHeight - window.innerWidth);
    }

    if (window.scrollY < informationSection.value.offsetHeight) {
    
        X.value = 0;
    }
}

function handleScroll2() {
    
    if (window.scrollY <= informationSection.value.offsetHeight) {
        bgColor.value = 'bg-white';
    }

    if (window.scrollY >= informationSection.value.offsetHeight) {
        bgColor.value = 'bg-dark';
    }

    if (window.scrollY >= featureSection.value.offsetHeight + window.innerHeight + (window.innerHeight*0.9)) {
        bgColor.value = 'bg-white';
    }
}

onMounted(() => {
    document.addEventListener('scroll', handleScroll);
    document.addEventListener('scroll', handleScroll2);
})
</script>

<template>
    <flex class="flex-wrap justify-center snap-y snap-mandatory relative w-full transition duration-500 ease-in-out">
        <Html>
            <Head>
                <Title>Home -StrefaSiły</Title>
            </Head>
        </Html>
        
        <section id="hero" ref="heroSection" class="snap-start scroll-mt-0 relative block h-screen w-full"> 
            <hero  />
        </section>

        <section id="information" ref="informationSection" class="snap-start scroll-mt-0 relative block h-screen w-full"> 
            <information  />
        </section>

        <section id="feature" ref="featureSection" class="snap-start hidden md:block scroll-mt-0 relative m-auto w-full" :style="{'height': `${items.length * 100}vw`}" >
            <features class="hidden md:flex" :class="bgColor" :x="X" :y="Y" :items="items" />
        </section>
        <!-- <features-sm class="flex md:hidden" :class="bgColor" :x="X" :items="items" /> -->

        <section id="team" ref="teamSection" class="snap-start mt-12 scroll-mt-0 relative block m-auto w-full h-screen" >
            <teams :teams="data"/>
        </section>

        <section id="price" ref="priceSection" class="snap-start mt-12 scroll-mt-0 relative block m-auto w-full h-screen" >
            <price :prices="prices" :personalPrices="personalPrices" />
        </section>
    </flex>
</template>
