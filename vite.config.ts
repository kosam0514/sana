import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // 깃허브 페이지 배포를 위한 상대 경로 설정
  build: {
    outDir: 'dist',
  },
});