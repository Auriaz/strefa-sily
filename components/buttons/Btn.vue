<script>
export default {
    name: 'Btn',
}
</script>

<template>
  <button type="button" class="btn cursor-pointer">
        <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  @apply shadow-md py-3 px-6 rounded-md transition duration-300;
}
.btn-purple {
  @apply bg-purple text-white hover:bg-white hover:text-purple border-2 hover:border-purple;
}

.btn-blue {
  @apply bg-blue text-white hover:bg-white hover:text-blue border-2 hover:border-blue;
}

.btn-indigo {
  @apply bg-indigo text-white hover:bg-white hover:text-indigo border-2 hover:border-indigo;
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

.btn-outlined-indigo {
  @apply text-indigo border-2 border-indigo  hover:bg-indigo hover:text-white;
}
</style>