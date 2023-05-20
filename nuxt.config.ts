// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/devtools'],
  typescript: {
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler'
      }
    }
  },
  experimental: {
    typedPages: true
  }
})
