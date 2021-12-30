<script>
import App from '~/components/layouts/App.vue';
import Navbar from '~/components/navigations/navbar';
import Layout from '~/components/layouts/Layout';
import Logo from '~/components/images/Logo';


export default {
    name: "default",
    components: { App, Navbar, Layout, Logo },
}
</script>

<script setup>
</script>
<template>
    <app>
        <!-- Header -->
        <header class="relative w-full">
            <!--  Navigation -->
            <navbar />
        </header>

        <main class="container relative w-full">
        
            <slot />
        </main>
    </app>
</template>
