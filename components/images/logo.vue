<script>
export default {
    name: "Logo",
    props: {
        src: {
            type: String,
            default: "default.jpg"
        },
        alt: {
            type: String,
            default: "Image"
        }
    }
}
</script>

<template>
    <a href="/">
        <img :src="`/images/${src}`"  :alt="alt"/>
    </a>
</template>