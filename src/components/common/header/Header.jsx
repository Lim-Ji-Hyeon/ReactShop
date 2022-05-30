import React, {useState} from "react";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {faSun, faMoon} from "@fortawesome/free-regular-svg-icons"
import styled from "styled-components";
import { categoryData } from "../../../data/categoryData";


export default function Header() {
  const [mode, setMode] = useState("black"); 
  
  const onClickMode = () => {
    mode === "black" ? setMode("white") : setMode("black")
  }
  const category = categoryData.map((item, index) => (<CategoryLink mode={mode} key={index} to={item.url}>{item.category}</CategoryLink>))
  
  return (
  <StyledHeader mode={mode}>
    <Hidden>
      <FontAwesomeIcon icon={faBars} className="menuImg" alt="menu"/>
    </Hidden>
    <Logo><LogoLink mode={mode} to="/">React Shop</LogoLink></Logo>
    <Category>
      {category}
    </Category>
    <HeaderItem> 
      <StyledButton mode={mode} onClick={onClickMode}>
        {mode === "black" ?
          <LightMode icon={faSun} alt="라이트 모드 선택"/> :
          <DarkMode icon={faMoon} alt="다크 모드 선택"/>
        }
      </StyledButton>
      <Search>
        <HiddenSearch icon={faMagnifyingGlass} alt="검색"/>
        <SearchInput mode={mode} type="text" placeholder="검색"></SearchInput>
        <List></List>
      </Search>
      <Cart to="/myCart">
        <span>
          <CartImg mode={mode} icon={faCartShopping} alt="장바구니"/>
          <CartNumber>0</CartNumber>
        </span>
      </Cart>
    </HeaderItem>
  </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width : 100%;
  height : 4rem;
  background-color : ${props => props.mode};
  display : flex;
  align-items : center;
  position : fixed;
  z-index : 10;
`;

const StyledLink = styled(Link)`
  text-decoration : none;
  color : ${props => props.mode === "black" ? "white" : "black"};
`

const Hidden = styled.div`
  display : none;
`

const Logo = styled.div`
  width : 10rem;
  height : 4rem;
  display : inline-block;
  text-align : center;
`

const LogoLink = styled(StyledLink)`
  font-size : 1.5rem;
  font-weight : 700;
  line-height : 3.5rem;
`
const CategoryLink = styled(StyledLink) `
  display : inline-block;
  width : 5rem;
  height : 2rem;
  border-radius : 0.6rem; 
  margin-right : 1rem;
  font-size : 1rem;
  font-weight : 700;
  text-align : center;
  padding-top : 0.5rem;
  &:hover {
    background-color : #696969; 
  }
`

const Category = styled.div`
  display : inline-block;
  flex : 1 1 0;
  margin-left : 1rem;
`

const HeaderItem = styled.div`
  width: 20rem;
  height: 4rem;
  display : inline-block;
  margin-right : 0.5rem;
` 

const StyledButton = styled.button`
  width : 3rem;
  height : 3rem;
  display : inline-block;
  background-color : ${props => props.mode};
  cursor: pointer;
  float : left;
  border-radius : 0.5rem;
  border : 0;
  margin: 0.5rem 1rem 0 0;
  transition : 0.3s;
  &:hover {
    background-color : #696969; 
  }
`

const LightMode = styled(FontAwesomeIcon)`
  width : 2rem;
  height : 2rem;
  color : white;
`
const DarkMode = styled(FontAwesomeIcon)`
  width : 2rem;
  height : 2rem;
  color : black;
`

const Search = styled.div`
  width : 12rem;
  height: 4rem;
  display : inline-block;
  float : left;
  margin-right : 0.5rem;
`
const HiddenSearch = styled(FontAwesomeIcon)`
  display : none;
`
const SearchInput = styled.input`
  width : 11rem;
  height: 2rem;
  background-color: ${props => props.mode === "black" ? '#696969' : '#cdcdcd'};
  border-radius: 0.5rem;
  border : 0;
  color : ${props => props.mode === "black" ? "white" : "black"};
  padding-left : 0.6rem;
  margin : 1rem 0 1rem;
  ::placeholder {
    color : ${props => props.mode === "black" ? "white" : "black"};
  }
`
const List = styled.ul`
  display : none;
`
const Cart = styled(Link)`
  width : 3rem;
  height: 3rem;
  display: inline-block;
  cursor: pointer;
  position : relative;
  border-radius : 0.5rem;
  margin : 0.5rem 0 0 0;
  &:hover {
    background-color : #696969;
  }
`

const CartImg = styled(FontAwesomeIcon)`
  width : 2rem;
  height : 2rem;
  color : ${props => props.mode === "black" ? "white" : "black"};
  margin : 0.5rem;
`
const CartNumber = styled.span`
  width: 1.6rem;
  height: 1.6rem;
  z-index: 11;
  background-color: red;
  color : white;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 100%; 
  text-align: center;
  position : absolute;
  right : -0.3rem;
`

