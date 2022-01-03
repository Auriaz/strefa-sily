<script>
export default {
    name: "Logo",
    props: {
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            default: "Image",
        }
    }
}
</script>

<template>
    <a href="/">
        <img :src="src"  :alt="alt"/>
    </a>
</template>