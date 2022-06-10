import React, {useEffect, useState} from "react";
import { GET } from '../api/axios'
import styled from "styled-components";
import BreadCrumbs from "../components/BreadCrumbs";
import Badge from "../components/Badge"
import StarRate from "../components/StarRate";
import Button from "../components/Button"
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { addCart, incrementCartNumber } from "../store";

export default function ProductPage({id}) {
  const [product, setProduct] = useState({})

  let cartReducer = useSelector((state) => {return  state.cartReducer})
  let number = cartReducer[0].cartNumber

  const dispatch = useDispatch()

  const addProduct = () => {
    dispatch(addCart({id}))
    dispatch(incrementCartNumber({number}))
  }

  const getProduct = async() => {
    const item = await GET(`/products/${id}`).then(res => res)
    await setProduct({
      category : item.category,
      title : item.title,
      image : item.image,
      rate : item.rating.rate,
      counts : item.rating.counts,
      price : item.price,
      description : item.description,
    })
  }
  
  useEffect(() => {
    getProduct()
  }, [])


  return (
    <ProductWrapper>
    <BreadCrumbs from={product.category} to={product.title}/>
    <Product>
      <Image src={product.image}></Image>
      <Contents>
        <Title>
          <ProductTitle>{product.title}</ProductTitle>
          <Badge type={"new"}>NEW</Badge>
        </Title>
        <Description>{product.description}</Description>
        <RateDiv>
          <StarRate rate={product.rate}/>
          <Rate>{product.rate} / {product.counts} 참여</Rate>
        </RateDiv>
        <Price>${product.price}</Price>
        <ButtonDiv>
          <Button type={"large"} onClick={addProduct}>장바구니에 담기</Button>
          <Link to={"/myCart"}>
            <Button type={"large"}>장바구니로 이동</Button>
          </Link>
        </ButtonDiv>
      </Contents>
    </Product>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  width : 100%;
  height : 40rem;
  background-color : darkgrey;
  display : flex;
  flex-direction : column;
`

const Product = styled.div`
  margin: 0 2rem 0 1rem;
  display : flex;
  flex-direction : row;
`

const Image = styled.img`
  width : 30rem;
  height : 30rem;
  background-color : white;
  object-fit : scale-down;
  display : inline-block;
  border-radius : ${({theme}) => theme.borderRadius.all}
`

const Contents = styled.div`
  display : grid;
  width : calc(100% - 31rem);
  height : 30rem;
  margin-left : 3rem;
  grid-auto-flow : row;
  row-gap : 0.2rem;
  padding-top : 0.5rem;
`

const Title = styled.div`
  width : 100%;
  height : 2rem;
  font-size : ${({theme}) => theme.font.size.large};
  color : ${({theme}) => theme.color.black};
  font-weight : ${({theme}) => theme.font.weight.normal};
`

const ProductTitle = styled.span`
  height : 2rem;
  display : inline-block;
  margin-right : 1rem;
`

const Description = styled.div`
  width : 100%;
  font-size : ${({theme}) => theme.font.size.normal};
  color : ${({theme}) => theme.color.black};
`

const RateDiv = styled.div`
  width : 100%;  
  height : 3rem;
  display : flex;
  flex-direction : row;
`

  const Rate = styled.span`
  height : 3rem;
  font-size : ${({theme}) => theme.font.size.normal};
  color : ${({theme}) => theme.color.black};
  margin-left : 1rem;
  text-align : center;
  padding-top : 0.75rem;
`
const Price = styled.div`
  font-size : ${({theme}) => theme.font.size.large};
  color : ${({theme}) => theme.color.black};
  font-weight : ${({theme}) => theme.font.weight.normal}
`

const ButtonDiv = styled.div`
  display : grid;
  width : 12rem;
  height : 4rem;
  grid-auto-flow : column;
  column-gap : 0.5rem;
`