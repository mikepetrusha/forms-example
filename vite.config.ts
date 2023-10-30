import { defineConfig } from 'vite';
import unocss from 'unocss/vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), unocss(), tsconfigPaths()],
});
