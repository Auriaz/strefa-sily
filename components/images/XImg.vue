<script>
export default {
    name: "Image",
    props: {
        src: {
            type: String,
           required: true,
        },
        alt: {
            type: String,
            default: "Image"
        }
    }
}
</script>

<template>
    <img :src="src"  :alt="alt"/>
</template>