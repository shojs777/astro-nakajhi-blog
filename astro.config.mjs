import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "static",
  // adapter: cloudflare(),SSRする際に必要
  integrations: [tailwind()],
  image: {
    // 例: リモート画像の最適化を単一のドメインに対して許可する
    // domains: ["static.spearly.com"],
  },
});
