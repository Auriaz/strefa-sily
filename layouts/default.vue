<script>
import App from '~/components/layouts/App';
import Navbar from '~/components/navigations/navbar';
import Layout from '~/components/layouts/Layout';

export default {
    name: "default",
    components: { App, Navbar, Layout },
}
</script>

<script setup>
const isDark = useTheme();
</script>

<template>
    <app :class="isDark ? 'bg-dark text-gray-light' : 'bg-white text-blue-dark'">
        <!-- Header -->
        <header class="relative w-full">
            <!--  Navigation -->
            <navbar />
        </header>

        <main class="container relative w-full ">
            <slot />
        </main>
    </app>
</template>
