import React from 'react'
import {Circle} from '@phosphor-icons/react'

export const getPtPreview = (content) => {
  switch (content._type) {
    case 'photo':
      return `Photo: ${content.alt}`
    default:
      return content?.children[0]?.text
  }
}

export const getStaticRoute = (name) => {
  switch (name) {
    default:
      return false
  }
}

export const getDynamicRoute = (name) => {
  switch (name) {
    case 'collection':
      return 'shop'
    case 'product':
      return 'products'
    case 'service':
      return 'services'
    case 'post':
      return 'story'
    default:
      return false
  }
}

export const getSwatch = (color) => {
  return (
    <Circle
      color={color}
      weight="fill"
      style={{
        width: '1rem',
        height: '1rem',
        boxShadow: '0 0 0 1px rgba(255,255,255,.4), 0 0 0 1px rgba(0,0,0,.15)',
        borderRadius: '50%'
      }}
    />
  )
}

// replace template tags with values
export function replaceTemplateTags(string, templateTags = []) {
  let newString = string

  templateTags.map((v) => {
    newString = newString?.replace(new RegExp(v.tag, 'g'), v.value)
  })

  return newString
}

export const assemblePageUrl = ({document, domain}) => {
  const {slug} = document

  if (!domain) {
    console.warn('Missing domain', {slug, domain})
    return ''
  }

  return domain + (slug ? `/${slug.current}` : '')
}

export const decodeAssetUrl = (id) => {
  const pattern = /^(?:image|file)-([a-f\d]+)-(?:(\d+x\d+)-)?(\w+)$/
  const [, assetId, dimensions, format] = pattern.exec(id)

  const [width, height] = dimensions ? dimensions.split('x').map((v) => parseInt(v, 10)) : []

  return {
    assetId,
    dimensions: {width, height},
    format
  }
}

export const excludeCurrentReferences = ({parent}) => {
  const addedRefs = parent?.map((ref) => ref._ref).filter(Boolean)

  return {
    filter: '!(_id in $ids)',
    params: {
      ids: addedRefs
    }
  }
}
