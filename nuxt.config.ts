export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@vueuse/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  devServer: {
    port: 7777,
  },
  googleFonts: {
    families: {
      Poppins: [300, 400, 500],
      Inter: [300, 400, 500, 600],
    },
  },
})
