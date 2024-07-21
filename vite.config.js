import { defineConfig } from "vite";
import { resolve } from "path";
import autoOrigin from "vite-plugin-auto-origin";

// TYPO3 root path (relative to this config file)
const VITE_TYPO3_ROOT = "./";

// Vite input files (relative to TYPO3 root path)
const VITE_ENTRYPOINTS = [
    "packages/fuerstenhof/Resources/Private/Frontend/main.entry.js",
];

// Output path for generated assets
const VITE_OUTPUT_PATH = "public/_assets/vite/";

const VITE_DEV_ORIGIN = 'https://fuerstenhof.ddev.site:5173';

const rootPath = resolve(__dirname, VITE_TYPO3_ROOT);
export default defineConfig({
    root: rootPath,  // Set the project root directory
    base: "",
    resolve: {
        alias: {
            '@bk2k': resolve(__dirname, 'vendor/bk2k/bootstrap-package/')
        },
    },
    build: {
        manifest: true,
        rollupOptions: {
            input: VITE_ENTRYPOINTS.map(entry => resolve(rootPath, entry)),
        },
        outDir: resolve(rootPath, VITE_OUTPUT_PATH),
    },
    server: {
        origin: VITE_DEV_ORIGIN,
    },
    plugins: [autoOrigin()],
    publicDir: false,
});
