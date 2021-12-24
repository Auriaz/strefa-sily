<script>
import App from '~/components/layouts/App.vue';
import NavBar from '~/components/navigations/navbar/NavBar';
import Layout from '~/components/layouts/Layout';
import Hero from '~/components/sections/Hero';

export default {
    name: "default",
    components: { App, NavBar, Layout, Hero },
}
</script>


<template>
    <app>
        <!-- Header -->
        <header>
            <layout>
                <nav-bar>
                    <template v-slot:images>
                        <img src="/images/logo.png" alt="">
                    </template>
                </nav-bar>
            </layout>
        </header>

        <hero />

        <main>
            <slot />
        </main>
    </app>
</template>