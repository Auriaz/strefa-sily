<script>
import XImg from '~/components/images/XImg'

export default {
    name: 'Info',
    components: {
        XImg

    }
}
</script>

<script setup></script>

<template>
    <div class="relative w-screen h-screen bg-dark"> 
        Informacje

        <div class="absolute w-[400px] text-indigo">
            <h2 ></h2>
        </div>
        
            <!-- Background -->
        <div class="z-10 block overflow-hidden  h-full w-full absolute opacity-30 bottom-0 right-0 bg-gradient-to-tr from-dark via-purple bg-blue "></div>

        <div class="z-10 overlay hidden md:block overflow-hidden  h-full w-full opacity-80 absolute bottom-0 right-0 bg-gradient-to-tr from-dark via-purple bg-blue "></div>
    </div>
</template>

<style lang="scss" scoped>
.overlay {
    clip-path: circle(50% at 3% -44%);
}
</style>