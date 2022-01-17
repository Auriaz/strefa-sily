<script>
import Btn from '~/components/buttons/Btn';
import Hero from '~/components/sections/home/Hero';
import Features from '~/components/sections/home/Features';
import FeaturesSm from '~/components/sections/home/FeaturesSm';
import FxCol from '~/components/flex/FxCol';
import Layout from '~/components/layouts/Layout.vue';
import Teams from '~/components/sections/home/Teams';
import Information from '~/components/sections/home/Information';
import Price from '~/components/sections/home/Price';
import Movie from '~/components/sections/home/Movie';

export default {
    name: 'Homepage',
    components: { Btn, Hero, Features, FeaturesSm,  Teams, FxCol, Layout, Information, Price, Movie },
    layouts: 'default',
}
</script>

<script setup>
import { ref, onMounted } from '#imports';

const X = ref(null);
const Y = ref(null);
const movieSection = ref(null);
const featureSection = ref(null);

const imagesHero =  ref([
    {    
        title: 'Sprzęt treningowy',
        content: 'Różnorodny sprzęt i maszyny, z którymi wykonasz trening funkcjonalny.',
        src: 'https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-7-1024x683.jpg',
        width: '100%', 
        height: '100%',
    },    
    {    
        title: 'Sprzęt treningowy',
        content: 'sfdhgdfgh',
        src: 'https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-5-1024x683.jpg',
        width: '10rem', 
        height: '5rem',
    },
    {
        title: 'Sala treningowa',
        content: 'Przestrzenna i funkcjonalna sala, na której wykonasz swój trening.',
        src: 'https://movementarena.pl/suwalki/wp-content/uploads/2020/06/MG_0530-1024x683.jpg',
        width: '20rem', 
        height: '12rem',
    },
])

const items = ref([
    {
        id: 0,
        image: {
            src: 'https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-5-1024x683.jpg',
            alt: 'default'
        },
        title: 'Powerlifting',
        content: ' Na zajęciach nauczysz się prawidłowej techniki oraz wzmocnisz swoją siłę. Wpłynie to korzystnie na ogólną sprawność, a także wzmocni stawy. Pracujemy na stopniu amatorskim jak i zawodowym. Zajęcia stanowią naturalny proces rozwoju dla osób chcących sięgać po większe obciążenia, w bezpieczny i kontrolowany sposób dzięki ciągłej opiece trenerskiej.'
    },
    {
        id: 1,
        image: {
            src: 'https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-5-1024x683.jpg',
            alt: 'default'
        },
        title: 'Cross-Training',
        content: 'Cross to zajęcia które łączą w sobie wytrzymałość i siłę. Głównym celem zajęć jest rozwój ogólnej sprawności fizycznej. Trening charakteryzuje się wysoką intensywnością z wykorzystaniem ruchów funkcjonalnych. Zmienny charakter treningu nie pozwoli się Ci nudzić.'
    },
    {
        id: 2,
        image: {
            src: 'https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-7-1024x683.jpg',
            alt: 'default'
        },
        title: 'Cross Intro',
        content: 'Celem zajęć jest wprowadzenie osób początkujących do treningu Cross-Training oraz Powerliftingu. Na zajęciach nauczysz się prawidłowej techniki oraz wzmocnisz swoją siłę. Wpłynie to korzystnie na ogólną formę i wprowadzi Cię na kolejny poziom sprawności.'
    },
    {
        id: 3,
        image: {
            src: 'https://movementarena.pl/suwalki/wp-content/uploads/2020/06/MG_0530-1024x683.jpg',
            alt: 'default'
        },
        title: 'Wake Up Cross',
        content: 'To poranny trening typu Cross, który łączy w sobie wytrzymałość oraz siłę. Głównym celem zajęć jest rozwój ogólnej sprawności fizycznej. Trening charakteryzuje się wysoką intensywnością z wykorzystaniem ruchów funkcjonalnych. Trening na dzień dobry da Ci zastrzyk energii na cały dzień.'
    },
    {
        id: 4,
        image: {
            src: 'https://movementarena.pl/suwalki/wp-content/uploads/2020/06/MG_0530-1024x683.jpg',
            alt: 'default'
        },
        title: 'TBC',
        content: 'Ćwiczenia ogólnorozwojowe, angażujące wszystkie partie mięśniowe. Celem jest rzeźba całego ciała, jego ujędrnienie, poprawa wytrzymałości, wzmocnienie układu krążenia i wydolnościowego.'
    },
    {
        id: 5,
        image: {
            src: 'https://movementarena.pl/suwalki/wp-content/uploads/2020/06/MG_0530-1024x683.jpg',
            alt: 'default'
        },
        title: 'Płaski brzuch',
        content: 'Celem jest spalenie tkanki tłuszczowej, wzmocnienie i wyrzeźbienie mięśni brzuch, wzmocnienie mięśni core odpowiadających zaprawidłową postawę i silny brzuch.'
    },
        {
        id: 6,
        image: {
            src: 'https://movementarena.pl/suwalki/wp-content/uploads/2020/06/MG_0530-1024x683.jpg',
            alt: 'default'
        },
        title: 'Ninja-OCR',
        content: 'Tory przeszkód ninja i OCR.'
    },
]);

const data = ref([
    {
        id:  0,
        name: 'Paulina',
        surname: 'Śniegowska',
        image: '',
        role: 'Trener strefy siły',
        description: 'Bla bla bla i jeszcze raz bla',
    },
    {
        id:  1,
        name: 'Tomasz',
        surname: 'Dąbrowski',
        image: '',
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
    if (window.scrollY >= movieSection.value.offsetHeight + window.innerHeight * 2 ) {
        X.value = -(window.scrollY - (movieSection.value.offsetHeight + window.innerHeight * 2 ));
    }

    if (X.value <= -(featureSection.value.offsetHeight - window.innerWidth)) {
    
        X.value = -(featureSection.value.offsetHeight - window.innerWidth);
    }

    if (window.scrollY < movieSection.value.offsetHeight) {
    
        X.value = 0;
    }
}

onMounted(() => {
    document.addEventListener('scroll', handleScroll);
})
</script>

<template>
    <flex class="flex-wrap justify-center snap-y snap-mandatory relative w-full min-h-full transition duration-500 ease-in-out">
        <Html>
            <Head>
                <Title>Strefa Siły</Title>
            </Head>
        </Html>
        
        <section id="hero" ref="heroSection" class="snap-start scroll-mt-0 relative block h-screen w-full"> 
            <hero :imagesHero="imagesHero" />
        </section>

        <section id="information" ref="informationSection" class="snap-start scroll-mt-0 relative hidden md:block md:h-screen w-full"> 
            <information  />
        </section>

        <section id="movie" ref="movieSection" class="snap-start scroll-mt-12 relative hidden md:block w-screen md:h-[390px] lg:h-[823px]">
            <movie />
        </section>

        <section id="feature" ref="featureSection" class="snap-start hidden md:block scroll-mt-0 min-h-full relative m-auto w-screen" :style="{'height': `${items.length * 100}vw`}" >
            <features class="hidden md:flex" :x="X" :y="Y" :items="items" />
            <features-sm class="flex md:hidden min-h-full" :items="items" />
        </section>

        <section id="feature-sm" ref="featureSection-sm" class="snap-start block mb-20 md:hidden scroll-mt-0 relative m-auto w-screen" >
            <features-sm class="flex md:hidden min-h-full" :items="items" />
        </section>

        <section id="team" ref="teamSection" class="snap-start scroll-mt-0 relative block m-auto w-full" >
            <teams :teams="data"/>
        </section>

        <section id="price" ref="priceSection" class="snap-start scroll-mt-0 relative block m-auto w-full min-h-full" >
            <price :prices="prices" :personalPrices="personalPrices" />
        </section>
    </flex>
</template>
