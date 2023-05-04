import {sveltekit} from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  optimizeDeps: {
    include: ['sanity']
  },
  build: {
    manualChunks: {
      'lodash-es': ['lodash-es'],
      lodash: ['lodash']
    }
  }
}

export default config
