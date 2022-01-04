<script>
export default {
    name: 'TiltCard',
    props: {
        imgSrc: {
            type: String,
            default: 'default.jpg'
        },
        imgAlt: {
            type: String,
            default: 'Image'
        },
        title: {
            type: String,
            default: 'Title',
        },
        content: {
            type: String,
            default: 'Content'
        },
        height: {
            type: String,
            default: '300px'
        },
        width: {
            type: String,
            default: '450px'
        }
    }
}
</script>

<script setup>
import { ref } from '#imports'
    const isActive = ref(false);
    const isDark = useTheme();
</script>

<template>
<div @click="isActive = !isActive" class="card-tilt" :class="{  'isActive--tilt': isActive }">

    <div class="card-tilt__box" :style="{height: height, width: width}" :class="{  'isActive--box': isActive }">
        <div class="card-tilt__box--image">
            <img :src="imgSrc" :alt="imgAlt" class="aspect-square object-cover border-2 border-blue hover:border-orange" :class="{'border-orange': isActive}"/>
        </div>

        <div class="card-tilt__box--content bg-blue" :class="{ 'isActive--content': isActive,  'bg-gradient-to-tl from-dark shadow-gray-light shadow': isDark}">
            <h2 class="title text-white">{{ title }}</h2>
            <p class="content text-dark">{{ content }}</p>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import '~/assets/css/abstracts/_mixins/breakpoints';

.card-tilt {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px 0;
    transition: all 0.5s ease-in-out;

    :hover {
        transition: all 0.3s linear;
    }

    &__box {
        position: relative;
        margin-bottom: 30px;
        background: #000;
        background: #000;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        transform: rotateX(0deg) rotateY(0deg);

        &:hover {
            box-shadow: 0 50px 80px rgba($color: #000000, $alpha: 0.2);
        }
    
        &--image {
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
    
        &--content {
            left: 50px;
            right: 50px;
            position: absolute;
            transform-origin: top;
            padding: 10px;
            border-radius: 10px;
            transition: 0.5s;
            transform: translateZ(0) scaleY(0); 

            @include atMedium {
                top: 16rem;
            }

            @include atLarge {
                top: 21rem;
            }

            @include atExtraLarge {
                top: 30rem;
            }

            .title {
                text-align: center;
                font-weight: 700;
                text-transform: uppercase;
                padding: 10px;
                margin-bottom: 10px;
            }

            .content {
                font-size: 1rem;
                font-weight: 300;
                padding: 10px;
            }
        }
    
        .isActive--content {
            z-index: 44;
            transform: translateZ(30px) scaleY(1);
        }
    }

    .isActive--box{
        right: 10%;

        @include atMedium {
            top: 20%;
            width: 30rem !important;
            height: 20rem !important;
        }

        @include atLarge {
            top: 25%;

            width: 35rem !important;
            height: 25rem !important;
        }

        @include atExtraLarge {
            top: 40%;
            right: 20%;
            width: 50rem !important;
            height: 40rem !important;
        }
    }
}

.isActive--tilt {
    transform: skew(0) !important;
    top: 0% !important;
    right: 15% !important;
    z-index: 43 !important;
}
</style>