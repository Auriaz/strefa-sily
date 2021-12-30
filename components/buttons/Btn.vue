<script>
export default {
    name: 'Btn',
}
</script>

<template>
  <button type="button" class="btn">
        <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  @apply shadow-md py-3 px-6 rounded-md transition duration-300;
}
.btn-purple {
  @apply bg-purple text-white hover:bg-white hover:text-purple;
}

.btn-blue {
  @apply bg-blue text-white hover:bg-white hover:text-blue;
}

.btn-white {
  @apply bg-white hover:bg-purple hover:text-white;
}


.btn-outlined-purple {
  @apply text-purple border-2 border-purple  hover:bg-purple hover:text-white;
}

.btn-outlined-blue {
  @apply text-blue border-2 border-blue  hover:bg-blue hover:text-white;
}
</style>