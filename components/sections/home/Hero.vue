<script>
import Layout from '~/components/layouts/Layout';
import FxRowReverse from '~/components/flex/FxRowReverse';
import FxCol from '~/components/flex/FxCol';
import Btn from '~/components/buttons/Btn';
import XImg from '~/components/images/XImg';
import FxRow from '~/components/flex/FxRow';

export default {
    name: 'Hero',
    components: { Layout, FxRowReverse, FxCol, Btn, XImg, FxRow },
}
</script>

<template>
    <!-- Hero -->
    <section class="relative">
        <layout class="flex-col-reverse lg:flex-row items-center gap-12 mt-12 lg:mt-28">

            <!-- Content -->
            <fx-col class="flex-1 items-center lg:items-start">
                <h2 class="text-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                    Lorem ipsum dolor sit
                </h2>

                <p class="text-gray text-lg text-center lg:text-left mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ad quis quaerat.
                </p>

                <fx-row class="justify-center flex-wrap gap-6">
                    <btn class="btn-outlined-purple">Click</btn>
                    <btn class="btn-white">Click</btn>
                </fx-row>
            </fx-col>

            <!-- Image -->
            <fx-row class="justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                <x-img src="/hero/hero-bg.jpg" alt="Hero" class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:f-full" />
            </fx-row>

            <!-- Rounded Rectangle -->
            <div class="hidden md:block overflow-hidden bg-purple rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36"></div>
        </layout>
    </section>
</template>