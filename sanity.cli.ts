import {defineCliConfig} from 'sanity/cli'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET

export default defineCliConfig({api: {projectId, dataset}})
