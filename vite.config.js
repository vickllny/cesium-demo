import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cesium from 'vite-plugin-cesium'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), cesium()],
  server: {
    proxy: {
      "/server": {
        target: "http://10.211.55.6",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/server/, "")
      }
    }
  }
})
