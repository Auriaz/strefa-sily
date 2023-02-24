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
// const config = useRuntimeConfig();
// const { data: activities } = await useFetch(`${config.API_URL}/api/activities?populate=images`);
// const { data: prices } = await useFetch(`${config.API_URL}/api/prices?populate=*`);
// const { data: informations } = await useFetch(`${config.API_URL}/api/informations?populate=*`);
// const { data: coaches } = await useFetch(`${config.API_URL}/api/coaches?populate=*`);
// const { data: movies } = await useFetch(`${config.API_URL}/api/movies?populate=*`);


const informations = [
    {
        id: 0,
        content: '<strong>Strefa siły</strong> jest to <strong>CrossBox</strong>, który jest specjalnie przygotowany do prowadzenia zajęć. Możesz tutaj zrobić trening typu <strong>cross-training, kalisteniczny</strong>, jak i wykonać trening obwodowy czy nawet gimnastyczny. Jest to miejsce, w którym zrobisz także <strong> swój indywidualny trening siłowy.</strong>',
        openHours: '<strong>Pon. - Pt. :</strong> 9:00 - 20:00 <br> <strong>Sob. - Nd. :</strong> 10:00 - 20:00',
        image: {
            name: 'Info',
            url: '/images/info/IMG_5749.jpg'
        },
        equipments: [
            {
                id: 0,
                content: 'Drążki przymocowane na stałe',
            },
            {
                id: 1,
                content: 'Brama do ćwiczeń, wyciąg górny oraz dolny',
            },
            {
                id: 2,
                content: 'Ławki do podnoszenia ciężarów',
            },
            {
                id: 3,
                content: 'Drążki przymocowane na stałe',
            },
            {
                id: 4,
                content: 'Hantle, kettle, sztangi',
            },
            {
                id: 5,
                content: 'Gumy o różnej grubości, rollery',
            },
            {
                id: 6,
                content: 'Liny do wspinaczki, kółka gimnastyczne',
            },
            {
                id: 7,
                content: 'Skakanki, worki treningowe',
            },
            {
                id: 8,
                content: 'Piłki o różnych ciężarach oraz do pilatesu',
            },
            {
                id: 9,
                content: 'Sanki obciążeniowe, Ergometr, Air Bike',
            },
            {
                id: 8,
                content: 'Głośnik do puszczania własnej muzyki 😉',
            },
        ],

    }
]


const movies = [
    {
        id: 0,
        quote: '',
        video: {
            name: '',
            url: '/movies/VID_20220111_085707_Trim.mp4'
        }
    },
    {
        id: 1,
        quote: '',
        video: {
            name: '',
            url: '/movies/VID_20220111_090224.mp4'
        }
    },
]

const activities = ref([
    {
        id: 0,
        images: [
            {
                url: 'https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-5-1024x683.jpg',
                name: 'default'
            },
            {
                url: 'https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-5-1024x683.jpg',
                name: 'default'
            },
        ],
        title: 'Powerlifting',
        content: ' Na zajęciach nauczysz się prawidłowej techniki oraz wzmocnisz swoją siłę. Wpłynie to korzystnie na ogólną sprawność, a także wzmocni stawy. Pracujemy na stopniu amatorskim jak i zawodowym. Zajęcia stanowią naturalny proces rozwoju dla osób chcących sięgać po większe obciążenia, w bezpieczny i kontrolowany sposób dzięki ciągłej opiece trenerskiej.'
    },
    {
        id: 1,
        images: [
            {
                url: 'https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-5-1024x683.jpg',
                name: 'default'
            },
            {
                url: 'https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-5-1024x683.jpg',
                name: 'default'
            },
        ],
        title: 'Cross-Training',
        content: 'Cross to zajęcia które łączą w sobie wytrzymałość i siłę. Głównym celem zajęć jest rozwój ogólnej sprawności fizycznej. Trening charakteryzuje się wysoką intensywnością z wykorzystaniem ruchów funkcjonalnych. Zmienny charakter treningu nie pozwoli się Ci nudzić.'
    },
    {
        id: 2,
        images: [
            {
                url: 'https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-5-1024x683.jpg',
                name: 'default'
            },
            {
                url: 'https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-5-1024x683.jpg',
                name: 'default'
            },
        ],
        title: 'Cross Intro',
        content: 'Celem zajęć jest wprowadzenie osób początkujących do treningu Cross-Training oraz Powerliftingu. Na zajęciach nauczysz się prawidłowej techniki oraz wzmocnisz swoją siłę. Wpłynie to korzystnie na ogólną formę i wprowadzi Cię na kolejny poziom sprawności.'
    },
    {
        id: 3,
        images: [
            {
                url: 'https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-5-1024x683.jpg',
                name: 'default'
            },
            {
                url: 'https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-5-1024x683.jpg',
                name: 'default'
            },
        ],
        title: 'Wake Up Cross',
        content: 'To poranny trening typu Cross, który łączy w sobie wytrzymałość oraz siłę. Głównym celem zajęć jest rozwój ogólnej sprawności fizycznej. Trening charakteryzuje się wysoką intensywnością z wykorzystaniem ruchów funkcjonalnych. Trening na dzień dobry da Ci zastrzyk energii na cały dzień.'
    },
    {
        id: 4,
        images: [
            {
                url: 'https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-5-1024x683.jpg',
                name: 'default'
            },
            {
                url: 'https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-5-1024x683.jpg',
                name: 'default'
            },
        ],
        title: 'TBC',
        content: 'Ćwiczenia ogólnorozwojowe, angażujące wszystkie partie mięśniowe. Celem jest rzeźba całego ciała, jego ujędrnienie, poprawa wytrzymałości, wzmocnienie układu krążenia i wydolnościowego.'
    },
    {
        id: 5,
        images: [
            {
                url: 'https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-5-1024x683.jpg',
                name: 'default'
            },
            {
                url: 'https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-5-1024x683.jpg',
                name: 'default'
            },
        ],
        title: 'Płaski brzuch',
        content: 'Celem jest spalenie tkanki tłuszczowej, wzmocnienie i wyrzeźbienie mięśni brzuch, wzmocnienie mięśni core odpowiadających zaprawidłową postawę i silny brzuch.'
    },
        {
        id: 6,
        images: [
            {
                url: 'https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-5-1024x683.jpg',
                name: 'default'
            },
            {
                url: 'https://movementarena.pl/suwalki/wp-content/uploads/2019/04/MAS_2-5-1024x683.jpg',
                name: 'default'
            },
        ],
        title: 'Ninja-OCR',
        content: 'Tory przeszkód ninja i OCR.'
    },
]);

const coaches = [
    {
        id:  0,
        firstName: 'Paulina',
        lastName: 'Śniegowska',
        avatarUrl: '/images/users/paulina_sn/avatar/paulina.jpg',
        role: 'Trener strefy siły',
        description: 'Od ponad 11 lat trener rekreacji ruchowej ze specjalnością fitness i aerobik, trener personalny, trener siłowni, trener aktywności fizycznej kobiet w ciąży. Uprawiam sport, bo go kocham praktycznie od dziecka. Uważam, że to świetny sposób na utrzymanie zdrowia fizycznego i psychicznego. W dzisiejszym świecie każda forma ruchu jest zbawienna i niezbędna, aby czuć się dobrze z samym sobą. Dlatego z wielką przyjemnością przekazuję zgromadzoną dotąd wiedzę i zarażam pozytywną energią wszystkich wokół. Wykonywanie pracy, którą się kocha to ogromna radość.',
    },
    {
        id:  1,
        firstName: 'Tomasz',
        lastName: 'Dąbrowski',
        avatarUrl: '/images/users/tomasz_do/avatar/tomasz.png',
        role: 'Trener strefy siły',
        description: 'Trenuje parkour od 16 lat. Od 6 lat bierze udział również w biegach z przeszkodami OCR, w tym w krótkich biegach typu ninja oraz OCR100. Dwukrotny uczestnik programu Ninja Warrior Polska. Współzałożyciel Movement Areny Suwałki, projektówał też Parkour Park nad zalewem Arkadia w Suwałkach.',
    },
    {
        id:  2,
        firstName: 'Adam',
        lastName: 'Stankiewicz',
        avatarUrl: '/images/users/adam_st/avatar/adam.jpg',
        role: 'Trener strefy siły',
        description: 'Z wykształcenia ratownik medyczny, pasjonat sportów siłowych (tj. dwubój siłowy, trójbój siłowy czy crossfit) . Licencjonowany instruktor kulturystyki oraz Kettlebell level 1. Posiada rozległą wiedzę z zakresu treningu, odżywiania oraz suplementacji. Ze sportem związany od najmłodszych lat. Mistrz Polski w Trójboju Siłowym z roku 2019 w federacji WPC oraz kilkukrotny mistrz europy katgorii Masters w federacji XPC. Stale rozwija wiedzę i umiejętności związane ze sportami siłowymi.',
    },
];

const prices = [
    {
        id: 0,
        title: 'Karnet miesięczny na strefę siły',
        classes: false,
        freeEntry: true,
        single: false,
        price: 95,
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
        content: '',
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
    <div class="flex flex-wrap justify-center snap-y snap-mandatory relative w-full min-h-full transition duration-500 ease-in-out">
        <section id="hero" ref="heroSection" class="snap-start scroll-mt-0 relative block h-screen w-full"> 
            <hero :imagesHero="imagesHero" />
        </section>

        <section id="information" ref="informationSection" class="snap-start scroll-mt-0 relative block md:h-screen w-full"> 
            <information :information="informations[0]"  />
        </section>

        <section id="movie" ref="movieSection" class="snap-start scroll-mt-0 relative hidden md:block w-full md:h-[390px] lg:h-[730px]">
            <movie :movies="movies" />
        </section>

        <section id="feature" ref="featureSection" class="snap-start hidden md:block scroll-mt-0 min-h-full relative m-auto w-screen" :style="{'height': `${activities.length * 100}vw`}" >
            <features class="hidden md:flex" :x="X" :y="Y" :activities="activities" />
        </section>

        <section id="feature-sm" ref="featureSection-sm" class="snap-start block mb-20 md:hidden scroll-mt-0 relative m-auto w-screen" >
            <features-sm class="flex md:hidden min-h-full" :activities="activities" />
        </section>

        <section id="team" ref="teamSection" class="snap-start scroll-mt-0 relative block m-auto w-full" >
            <teams :teams="coaches"/>
        </section>

        <section id="price" ref="priceSection" class="snap-start scroll-mt-0 relative block m-auto w-full min-h-full" >
            <price :prices="prices"  :personalPrices="personalPrices" />
        </section>
    </div>
</template>
