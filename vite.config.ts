import { PluginOption, defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import mdx from "@mdx-js/rollup"
export default defineConfig({
  
  plugins: [react() as PluginOption,mdx()],
})
