<script>
import Btn from '~~/components/buttons/Btn.vue';
import FxCol from '~~/components/flex/FxCol.vue';
import FxRow from '~~/components/flex/FxRow.vue';

export default {
  components: { FxRow, Btn, FxCol },
    name:"FeatureSm",
    props: {
        items: {
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
        <h2 class="font-extrabold tracking-tight mb-2 text-3xl">Zajęcia</h2>
        <h4 class="text-gray mb-5">This is a simple TailwindCSS pricing table.</h4>
    </div>

    <div v-for="item in items" :key="item.id" class="p-3 m-5 relative rounded shadow-gray shadow-2xl min-w-[240px] max-w-[320px] h-[360px] left-0  top-10 z-10 "  :class="`${isDark ? 'bg-dark' : 'bg-white'}`">
        <!-- Title -->
        <h3 class="absolute bottom-[300px] left-[0] text-3xl w-[100%] h-[60px] text-center p-3 rounded z-20" :class="`${isDark ? 'text-dark bg-gray' : 'bg-blue-dark text-blue'}`">{{ item.title }}</h3>

        <!-- Text -->
        <p class="text-gray mt-[55px] mb-4 px-2 text-center lg:text-left sm:w-3/4 lg:w-full">{{ item.content }}</p>

        <!-- Actions -->
        <fx-row class=" bottom-0 justify-center flex-wrap gap-6">
            <btn class="btn-outlined-blue">Click</btn>
            <btn class="btn-blue">Click</btn>
        </fx-row>
    </div>
</fx-col>
</template>