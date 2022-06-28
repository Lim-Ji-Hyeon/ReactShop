import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons"
import styled from "styled-components"
import { categoryData } from "../data/categoryData"
import Button from "../components/Button"
import { change } from "../redux/mode"
import Search from "./Search"
import { getList } from "../redux/setProduct"

export default function Header() {
  const cartStore = useSelector((state) => state.cart)
  const modeStore = useSelector((state) => state.mode.value)

  let mode = modeStore.color
  const cart = cartStore.count

  const dispatch = useDispatch()

  const onClickMode = () => {
    mode = mode === "black" ? "white" : "black"
    dispatch(change({ color: mode }))
  }

  const category = categoryData.map((item, index) => (
    <CategoryLink mode={mode} key={index} to={item.url}>
      {item.category}
    </CategoryLink>
  ))

  useEffect(() => {
    dispatch(getList())
  }, [])

  return (
    <HeaderWrapper mode={mode}>
      <Hidden>
        <Button color={mode} size={"xSmall"}>
          <FontAwesomeIcon icon={faBars} alt="menu" />
        </Button>
      </Hidden>
      <Logo>
        <LogoLink mode={mode} to="/">
          React Shop
        </LogoLink>
      </Logo>
      <Category>{category}</Category>
      <HeaderItem>
        <ModeButton size={"xSmall"} color={mode} hoverColor={"grey"} onClick={onClickMode}>
          {mode === "black" ? (
            <LightMode icon={faSun} alt="라이트 모드 선택" />
          ) : (
            <DarkMode icon={faMoon} alt="다크 모드 선택" />
          )}
        </ModeButton>
        <Search mode={mode} />
        <Cart to="/myCart">
          <span>
            <CartImg mode={mode} icon={faCartShopping} alt="장바구니" />
            <CartNumber>{cart}</CartNumber>
          </span>
        </Cart>
      </HeaderItem>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  width: 100%;
  height: 5rem;
  background-color: ${(props) => props.mode};
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.mode === "black" ? "white" : "black")};
`

const Hidden = styled.div`
  display: none;
`

const Logo = styled.div`
  width: 10rem;
  height: 5rem;
  display: inline-block;
  text-align: center;
  margin-left: 1rem;
`

const LogoLink = styled(StyledLink)`
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 4.8rem;
`
const CategoryLink = styled(StyledLink)`
  display: inline-block;
  width: 6rem;
  height: 2.5rem;
  border-radius: 0.6rem;
  margin-right: 1rem;
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  padding-top: 0.5rem;
  &:hover {
    background-color: #696969;
  }
`

const Category = styled.div`
  display: inline-block;
  flex: 1 1 0;
  margin-left: 1rem;
`

const HeaderItem = styled.div`
  width: 23rem;
  height: 5rem;
  display: inline-block;
  margin-right: 0.5rem;
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
`

const ModeButton = styled(Button)`
  display: inline-block;
  background-color: ${({ color }) => (color === "black" ? "black" : "white")};
  margin: 1rem 1rem 0 0;
  transition: 0.3s;
  &:hover {
    background-color: #696969;
  }
`

const LightMode = styled(FontAwesomeIcon)`
  width: 2.5rem;
  height: 2.5rem;
  color: white;
`
const DarkMode = styled(FontAwesomeIcon)`
  width: 2.5rem;
  height: 2.5rem;
  color: black;
`
const Cart = styled(Link)`
  width: 4rem;
  height: 4rem;
  display: inline-block;
  cursor: pointer;
  position: relative;
  border-radius: 0.5rem;
  margin: 0rem 0 0 0.5rem;
  &:hover {
    background-color: #696969;
  }
`

const CartImg = styled(FontAwesomeIcon)`
  width: 2.5rem;
  height: 2.5rem;
  color: ${(props) => (props.mode === "black" ? "white" : "black")};
  margin: 0.8rem 0.5rem 0.5rem 0.5rem;
`
const CartNumber = styled.span`
  width: 2rem;
  height: 2rem;
  z-index: 11;
  background-color: red;
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
  border-radius: 100%;
  text-align: center;
  position: absolute;
  right: 0rem;
`
