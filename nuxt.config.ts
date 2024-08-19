// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  nitro: {
    rollupConfig: {
      external: ["pg-native", "cloudflare:sockets"],
    },
    experimental: {
      wasm: true,
    },
    esbuild: {
      options: {
        target: "esnext",
      },
    },
    minify: false,
  },
});
