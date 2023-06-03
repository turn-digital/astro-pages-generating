import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config

export default defineConfig({
    site: "https://turn-digital.github.io",
    base: "/custom-domain-artis-check",
  integrations: [preact()]
});