<script>
import App from '~/components/layouts/App.vue';
import NavBar from '~/components/navigations/navbar/NavBar';
import Layout from '~/components/layouts/Layout';
import Logo from '~/components/images/Logo';

export default {
    name: "default",
    components: { App, NavBar, Layout, Logo },
}
</script>


<template>
    <app>
        <!-- Header -->
        <header>
            <layout>
                <nav-bar>
                    <template v-slot:images>
                        <logo src="/images/logo/logo.png" alt="" class="" />
                    </template>
                </nav-bar>
            </layout>
        </header>

        <main>
            <slot />
        </main>
    </app>
</template>