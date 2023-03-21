import type {ConfigContext} from 'sanity'
import type {StructureBuilder} from 'sanity/desk'

/**
 * Helper for creating and typing composable desk structure parts.
 */
// defineStructure is a function that takes a function as an argument and returns that function
export default function defineStructure<StructureType>(
  factory: (S: StructureBuilder, context: ConfigContext) => StructureType
) {
  return factory
}