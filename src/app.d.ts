// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface Locals {
    previewMode: boolean
  }
  interface Locals {
    user: {
      id: string
      role: string
      email: string
    }
  }

  // interface PageData {}
  // interface Platform {}
  // interface PrivateEnv {}
  // interface PublicEnv {}
}
