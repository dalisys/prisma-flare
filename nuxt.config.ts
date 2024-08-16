// https://nuxt.com/docs/api/configuration/nuxt-config
import nitroCloudflareBindings from "nitro-cloudflare-dev";
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [nitroCloudflareBindings],
  nitro: {
    preset: "cloudflare-pages",
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
