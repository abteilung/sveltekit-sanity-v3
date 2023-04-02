// Writable
// Path: src/lib/Stores/Navigation.ts
import {writable, type Writable} from 'svelte/store'

export const navStore: Writable<Navigation> = writable({
  current: 'home',
  previous: 'home',
  next: 'home',
  history: ['home'],
  historyIndex: 0
})

export const showSubMenu = writable(false)
export const subMenuItemsStore = writable([])
