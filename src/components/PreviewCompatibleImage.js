import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <div>{image.childImageSharp.fluid}<Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} /></div>
    )
  }

  if (!!childImageSharp) {
    return <div>{childImageSharp.fluid}<Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} /></div>
  }

  if (!!image && typeof image === 'string')
    return <div>SOMETHING WRONG{image}<img style={imageStyle} src={image} alt={alt} /></div>

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
