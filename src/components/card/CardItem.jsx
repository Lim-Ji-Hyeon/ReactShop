import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function CardItem({
  id,
  src,
  alt,
  title,
  price,
}) {
  return (
    <Link to={`/product/${id}`}>
      <Container>
        <ImageWrapper>
          <ProductImage src={src} alt={alt} />
        </ImageWrapper>
        <ProductDescription>
          <ProductName>{title}</ProductName>
          <ProductPrice>${price}</ProductPrice>
        </ProductDescription>
      </Container>
    </Link>
  )
}

const Container = styled.article`
  margin: 1rem 1rem;
  display: flex;
  width: 30rem;
  height: 30rem;
  flex-direction: column;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 1.5rem;
`
const ImageWrapper = styled.figure`
  display: flex;
  height: 70%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const ProductImage = styled.img`
  height: 50%;
  width: 50%;
  &:hover {
    height: 70%;
    width: 70%;
  }
`
const ProductDescription = styled.figure`
  display: flex;
  flex-direction: column;
  height: 30%;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
`
const ProductName = styled.h3`
  padding: 0 2rem;
`
const ProductPrice = styled.p`
  padding: 0 2rem;
`
