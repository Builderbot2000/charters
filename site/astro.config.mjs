import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

// The Keystatic editor runs only under `astro dev`. `astro build` outputs a
// plain static site that any web server can host.
const dev = process.argv.includes("dev");

export default defineConfig({
  integrations: dev ? [react(), keystatic()] : [],
});
