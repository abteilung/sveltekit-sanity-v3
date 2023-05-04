// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface Locals {
    user: {
      id: string
      role: string
      email: string
    }
    theme: string
    cart_id: string
    previewMode: boolean
  }
  // interface PageData {}
  // interface Platform {}
  // interface PrivateEnv {}
  // interface PublicEnv {}
}
