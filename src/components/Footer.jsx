import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {card, sns} from '../data/footerData'

export default function Footer() {
  const cards = card.map((item) => (<StyledLi key={item.id}><StyledImg icon={item.image} title={item.name}/></StyledLi>))
  const snsBrand = sns.map((item) => (<StyledSns key={item.id} href={item.url} target="_blank"><StyledImg icon={item.image} title={item.name}/></StyledSns>))
  return (
    <StyledFooter>
      <StyledDiv>
        <StyledA href="https://www.zero-base.co.kr/" target="_blank" rel ="noopener noreferer">제로베이스</StyledA>
      </StyledDiv>
      <StyledUl>
        {cards}
      </StyledUl>
      <div>
        <StyledBrand>
          {snsBrand}
        </StyledBrand>
      </div>
      <div>
        <StyledP>Copyright 2022 Zero Base</StyledP>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
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
const StyledDiv = styled.div`
  width : 8rem;
  height : 3rem;
  display : inline-block;
  text-align : center;
`
const StyledA = styled.a`
  text-decoration : none;
  color : #696969;
  font-size : 1.5rem;
  font-weight : 600;
`

const StyledUl = styled.ul`
  display : flex;
  list-style : none;
  gap : 0.5rem;
  margin : 0;
  padding : 0;
`

const StyledBrand = styled.div`
  gap : 1rem;
  grid-auto-flow : column;
  display : grid;
`

const StyledP = styled.p`
  margin : 0;
  font-size : 1.5rem;
  font-weight : 600;  
  color : #696969;
`

const StyledLi = styled.li`
  list-style : none;
  width : 6rem;
  height : 3rem;
`

const StyledImg = styled(FontAwesomeIcon)`
  width : 100%;
  height : 100%;
  color : white;
`
const StyledSns = styled.a`
  width : 6rem;
  height : 3rem;
  margin-right : 0.5rem;
`
