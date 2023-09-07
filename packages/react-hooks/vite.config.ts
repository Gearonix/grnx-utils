/// <reference types="vitest" />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  cacheDir: '../../node_modules/.vite/react-hooks',
  plugins: [react(), nxViteTsPaths()],
  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest'
    },
    coverage: {
      provider: 'c8'
    },
    environment: 'jsdom',
    include: ['src/__tests__/*.test.{ts,tsx}']
  }
})
