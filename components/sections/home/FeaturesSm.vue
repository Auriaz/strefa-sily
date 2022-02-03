<script>
import Btn from '~~/components/buttons/Btn.vue';
import FxCol from '~~/components/flex/FxCol.vue';
import FxRow from '~~/components/flex/FxRow.vue';

export default {
  components: { FxRow, Btn, FxCol },
    name:"FeatureSm",
    props: {
        activities: {
            type: Object,
            required: true
        }
    }
}
</script>

<script setup>
const isDark = useTheme();

</script>

<template>
<fx-col class="relative flex-grow flex-wrap h-full w-full">
    <div class="text-center w-full my-3">
        <h2 class="font-extrabold tracking-tight text-3xl">Zajęcia</h2>
    </div>

    <div v-for="(item, index) in activities" :key="index" class="p-3 m-5 relative rounded shadow-gray shadow-2xl min-w-[260px] max-w-[320px] h-[460px] left-0  top-10 z-10 "  :class="`${isDark ? 'bg-dark' : 'bg-white'}`">
        <!-- Title -->
        <h3 class="absolute bottom-[400px] left-[0] text-3xl w-[100%] h-[60px] text-center p-3 rounded z-20" :class="`${isDark ? 'text-dark bg-gray' : 'bg-blue-dark text-blue'}`">{{ item.title }}</h3>

        <!-- Text -->
        <p class="text-gray mt-[55px] mb-4 px-2 text-center lg:text-left sm:w-3/4 lg:w-full">{{ item.content }}</p>

        <!-- Actions -->
        <fx-row class="absolute bottom-5 justify-center left-0 right-0 flex-wrap gap-6">
            <!-- <btn class="btn-outlined-blue">Więcej</btn> -->
            <btn class="btn-blue">
                <a href="https://movementarenasuwalki.gymmanager.com.pl/Buypass/Passes" target="_blank" >
                    Kup online
                </a>
            </btn>
        </fx-row>
    </div>
</fx-col>
</template>