<script>
import App from '~/components/layouts/App.vue';
import NavBar from '~/components/navigations/navbar';
import Layout from '~/components/layouts/Layout';
import Logo from '~/components/images/Logo';


export default {
    name: "default",
    components: { App, NavBar, Layout, Logo },
}
</script>

<script setup>
</script>
<template>
    <app>
        <!-- Header -->
        <header class="relative w-full">
            <!--  Navigation -->
            <nav-bar />
        </header>
        <main class="relative w-full">
        
            <slot />
        </main>
    </app>
</template>
