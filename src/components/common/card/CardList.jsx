import React, { useState } from "react";
import styled from "styled-components";
import CardItem from './CardItem';
import productInfo from '../../../data.js'

export default function CardList() {
  const validateData = (datas) => {
    if (!Array.isArray(datas)) {
      throw new Error('데이터 타입이 배열이 아닙니다')
    }

    datas.forEach((data) => {
      if (!('id' in data) || !('image' in data) || !('title' in data) || !('price' in data) || !('category' in data) || !('description' in data)) {
        throw new Error('필수 프로퍼티가 존재하지 않습니다')
      }
    })
  }
  validateData(productInfo);

  const [products] = useState(productInfo);

  return (
    <ItemWrapper>
      {products.map((product) => {
        return (<CardItem src={product.image} title={product.title} price={product.price} key={product.id} />)
      })}
    </ItemWrapper>
  )
}

let ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1.2fr);
  column-gap: 1.5%;
  justify-content: center;

  @media screen and (max-width:1024px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1.5%;
  }

  @media screen and (max-width:599px) {
    gap: 0.5% 0.5%;
    grid-template-columns: repeat(2, 1fr);
  }


  @media screen and (max-width:340px) {
    grid-template-columns: repeat(1, 0.8fr);
  }
`;
