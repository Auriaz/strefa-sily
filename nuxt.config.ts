import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        // script: [
        //     // <script src="https://myawesome-lib.js"></script>
        //     // { src: 'https://awesome-lib.js' }
        // ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
           // <link rel="stylesheet" href="https://myawesome-lib.css">
            // { rel: 'stylesheet', href: 'https://awesome-lib.css' }
        ],
            // please note that this is an area that is likely to change
        // style: [
        //     // <style type="text/css">:root { color: red }</style>
        //     // { children: ':root { color: red }', type: 'text/css' }
        // ]
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {}
                }
            }
        },
        transpile: [
            "gsap",
        ]
    },
    css: [ 
        '@/assets/css/main.scss', 
    ],
    publicRuntimeConfig: {
        API_URL: process.env.API_URL || "http://localhost:1337"
    }
});
