<script>
export default {
    name: "Image",
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
    <img :src="`/images/${src}`"  :alt="alt"/>
</template>