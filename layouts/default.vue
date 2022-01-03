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
