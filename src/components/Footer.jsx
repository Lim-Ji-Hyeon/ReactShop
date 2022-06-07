import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {card, sns} from '../data/footerData'

export default function Footer() {
  const cards = card.map((item) => (<CardsList key={item.id}><Image icon={item.image} title={item.name}/></CardsList>))
  const snsBrand = sns.map((item) => (<SnsBrand key={item.id} href={item.url} target="_blank"><Image icon={item.image} title={item.name}/></SnsBrand>))
  return (
    <FooterWrapper>
      <Logo>
        <LogoLink href="https://www.zero-base.co.kr/" target="_blank" rel ="noopener noreferer">제로베이스</LogoLink>
      </Logo>
      <Cards>
        {cards}
      </Cards>
      <div>
        <Brand>
          {snsBrand}
        </Brand>
      </div>
      <div>
        <CopyRight>Copyright 2022 Zero Base</CopyRight>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  width : 100%;
  height : 20rem;
  background-color : black;
  display : grid;
  position : absolute;
  bottom : 0;
  padding : 3rem 0rem;
  place-items : center;
  text-align : center;
  grid-auto-flow : row;
  row-gap : 2.5rem;
`
const Logo = styled.div`
  width : 8rem;
  height : 3rem;
  display : inline-block;
  text-align : center;
`
const LogoLink = styled.a`
  text-decoration : none;
  color : #696969;
  font-size : 1.5rem;
  font-weight : 600;
`

const Cards = styled.ul`
  display : flex;
  list-style : none;
  gap : 0.5rem;
  margin : 0;
  padding : 0;
`

const Brand = styled.div`
  gap : 1rem;
  grid-auto-flow : column;
  display : grid;
`

const CopyRight = styled.p`
  margin : 0;
  font-size : 1.5rem;
  font-weight : 600;  
  color : #696969;
`

const CardsList = styled.li`
  list-style : none;
  width : 6rem;
  height : 3rem;
`

const Image = styled(FontAwesomeIcon)`
  width : 100%;
  height : 100%;
  color : white;
`
const SnsBrand = styled.a`
  width : 6rem;
  height : 3rem;
  margin-right : 0.5rem;
`
