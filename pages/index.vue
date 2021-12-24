<script>
import Btn from '~/components/buttons/Btn';
import Hero from '~/components/sections/home/Hero';
import Features from '~/components/sections/home/Features';

export default {
  components: { Btn, Hero, Features },
    name: 'Homepage',
    layouts: 'default',
}
</script>


<template>
    <div class="home">
        <hero />
        <features />
    </div>
</template>