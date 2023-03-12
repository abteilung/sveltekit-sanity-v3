import {Article, TreeStructure} from '@phosphor-icons/react'

// Function to count all Posts and Categories

// Const Function
const postsCount = null
const categoriesCount = null

export function postsStructure(S) {
  return S.listItem()
    .icon(Article)
    .title(`Posts ${postsCount ? '(' + postsCount + ')' : ''}`)
    .child(
      S.list()
        .title('Posts')
        .items([
          S.listItem()
            .title(`Posts ${postsCount ? '(' + postsCount + ')' : ''}`)
            .icon(Article)
            .child(S.documentTypeList('post').title('Posts')),
          S.divider(),
          S.listItem()
            .title(`Categories ${categoriesCount ? '(' + categoriesCount + ')' : ''}`)
            .icon(TreeStructure)
            .child(S.documentTypeList('category').title('Categories')),
          S.divider(),
          S.listItem()
            .title('Posts By Author')
            .child(
              S.documentTypeList('author')
                .title('Posts by Author')
                .child((authorId) =>
                  S.documentList()
                    .title('Posts')
                    .filter('_type == "post" && $authorId == author._ref')
                    .params({authorId})
                )
            ),

          S.listItem()
            .title('Posts By Category')
            .child(
              S.documentTypeList('category')
                .title('Posts by Category')
                .child((categoryId) =>
                  S.documentList()
                    .title('Posts')
                    .filter('_type == "post" && $categoryId == category._ref')
                    .params({categoryId})
                )
            )
        ])
    )
}

export default postsStructure
