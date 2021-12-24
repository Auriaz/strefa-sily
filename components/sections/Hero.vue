<script>
import Layout from '~/components/layouts/Layout';
import FxRowReverse from '~/components/flex/FxRowReverse';
import FxCol from '~/components/flex/FxCol';
import Btn from '~~/components/buttons/Btn';

export default {
    name: 'Hero',
    components: { Layout, FxRowReverse, FxCol, Btn },
}
</script>

<template>
    <!-- Hero -->
    <section class="relative">
        <layout>
            <fx-row-reverse class="lg:flex-row items-center gap-12 mt-12 lg:mt-28">
                <!-- Content -->
                <fx-col class="flex-1 items-center lg:items-start">
                    <h2 class="text-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                        Lorem ipsum dolor sit
                    </h2>

                    <p class="text-gray text-lg text-center lg:text-left mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ad quis quaerat.
                    </p>

                    <fx-col class="justify-center flex-wrap gap-6">
                        <btn class="btn-outlined-purple">Click</btn>
                        <btn class="btn-white">Click</btn>
                    </fx-col>
                </fx-col>
            </fx-row-reverse>
        </layout>
    </section>
</template>