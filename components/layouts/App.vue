<template>
    <div class="application scroll-smooth hover:scroll-auto">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.application {
    width: 100%;
    min-height: 100vh;
    position: relative;
}
</style>