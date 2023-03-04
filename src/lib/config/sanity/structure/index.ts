// Imports

// Documents
import pageStructure from './documents/page'
import frontPageStructure from './documents/frontPage'
import postsStructure from './documents/posts'

export const structure = (S) => {
    return S.list()
        .title('Content')
        .items([
            frontPageStructure(S),
            S.divider(),
            pageStructure(S),
            S.divider(),
            postsStructure(S),
        ])
}

export default structure