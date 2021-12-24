<script>
import Btn from '~/components/buttons/Btn';

export default {
  components: { Btn },
    name: 'NavBar',
}
</script>


<template>
    <nav class="flex items-center py-4 mt-4 sm:mt-4">
        <div class="py-1">
            <slot name="image"/>
        </div>

        <ul class="hidden sm:flex flex-1 justify-end items-center gap-12 text-blue uppercase text-xs">
            <li class="cursor-pointer">Features</li>
            <li class="cursor-pointer">Pricing</li>
            <li class="cursor-pointer">Contact</li>

            <btn bg-color="bg-blue" class="bg-blue text-white rounded-md px-7 py-3 uppercase">
                Log in
            </btn>
        </ul>

        <btn class="flex sm:hidden flex-1 justify-end">
            <i class="text-2xl fas fa-bars"></i>
        </btn>
    </nav>
</template>