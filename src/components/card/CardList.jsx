import React from 'react'
import styled from 'styled-components'
import CardItem from './CardItem'

export default function CardList({ data }) {
  return (
    <Wrapper>
      {data?.map(
        ({ id, image, category, title, price }) => {
          return (
            <CardItem
              key={`image_${id}`}
              src={image}
              alt={category}
              title={title}
              price={price}
            />
          )
        }
      )}
    </Wrapper>
  )
}

let Wrapper = styled.div`
  display: flex;
`
