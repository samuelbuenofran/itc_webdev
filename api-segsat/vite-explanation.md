In order for Vite to work properly, we need to specify the name of the entry point of our app in the `vite.config.js` file
export default defineConfig({
plugins: [react()],
build: {
outDir: 'build',
},
server: {
port: 3000,
},
