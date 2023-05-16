// Writable
// Path: src/lib/stores/navigation.ts
import {writable, type Writable} from 'svelte/store'

export let menuWidth: Writable<number> = writable(320)

export const navStore: Writable<Navigation> = writable({
  current: 'home',
  previous: 'home',
  next: 'home',
  history: ['home'],
  historyIndex: 0
})

export const showSubMenu = writable(false)
export const subMenuItemsStore = writable([])
