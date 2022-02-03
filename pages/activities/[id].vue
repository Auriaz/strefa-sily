<script>
export default {
    layouts: 'default',
}
</script>

<script setup>
import App from "~~/components/layouts/App.vue";
const route = useRoute();
const config = useRuntimeConfig();

const { data: activities } = await useFetch(`${config.API_URL}/api/activities/${route.params.id}?populate=images`);
</script>

<template>
    <app class="mt-40">
        <h1> {{activities.data.attributes.title}} </h1>
    </app>
</template>