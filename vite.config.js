import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path=require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{

    // 路径别名
    alias:{
      assets: path.resolve(__dirname, 'src/assets/'),
      network: path.resolve(__dirname, 'src/network/'),
      views: path.resolve(__dirname, 'src/views/'),
      utils: path.resolve(__dirname, 'src/utils/'),
    }
  },
  server:{
    port: 7000
  }
})
