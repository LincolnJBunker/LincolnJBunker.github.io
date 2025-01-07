import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/LincolnJBunker.github.io/', // Replace <REPO-NAME> with your GitHub repo name
});
