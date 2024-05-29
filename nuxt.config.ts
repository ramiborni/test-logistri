export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  css: ['~/assets/css/main.css'],
  devServer: {
    port: 7777,
  },
})