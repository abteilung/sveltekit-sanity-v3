import adapter from '@sveltejs/adapter-vercel'
import {vitePreprocess} from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter()
  },
  vitePlugin: {
    emitCss: false
  },
  compilerOptions: {
    css: 'injected'
  },
  package: {
    // strip test files from packaging
    files: (filepath) => {
      return filepath.indexOf('test') == -1 ? true : false
    }
  }
}

export default config
