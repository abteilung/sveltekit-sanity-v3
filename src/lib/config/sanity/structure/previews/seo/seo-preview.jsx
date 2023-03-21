/* eslint-disable react/no-multi-comp, react/no-did-mount-set-state, react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'

import sanityClient from '@sanity/client'

class SeoPreviews extends React.PureComponent {
  static propTypes = {
    document: PropTypes.object
  }

  static defaultProps = {
    document: null
  }

  state = {
    defaultSEO: {}
  }

  constructor() {
    super()
    this.loadData()
  }

  loadData = () => {
    sanityClient
      .fetch(
        `
        *[_type == "seoSettings"][0]{
          metaTitle,
          metaDesc,
          shareTitle,
          shareDesc,
          shareGraphic,
          "siteTitle": *[_type == "generalSettings"][0].siteTitle,
          "siteURL": *[_type == "generalSettings"][0].siteURL
        }
      `
      )
      .then(seo => {
        this.setState({
          defaultSEO: seo || {}
        })
      })
  }

  render() {
    const { options } = this.props
    const { displayed } = this.props.document
    const { defaultSEO } = this.state

    return (
      <>
      
      </>
    )
  }
}

export default SeoPreviews