import {writable, type Writable} from 'svelte/store'

// Store for Header Image. Experimental feature, does not work nicely yet.
export const HeaderImage: Writable<string> = writable('')

// Store for Cookie Banner
export const cookieVisibility = writable(false);