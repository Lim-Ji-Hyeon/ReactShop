import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import Button from "../components/Button"
import CartModal from "../components/CartModal"
import { Link } from "react-router-dom"
import { increase, decrease, remove, removeAll } from "../redux/cart"

export default function Cart() {
  const [purchaseList, setPurchaseList] = useState({ itemList: [], totalPrice: 0, modalVisible: false })
  const [cartProducts, setCartProducts] = useState([])
  const products = useSelector(({ cart }) => cart.products)
  const dispatch = useDispatch()
  useEffect(() => {
    setCartProducts(() => [...products])
    console.log("cart")
  }, [products])

  const handleCheckBox = ({ target }) => {
    const allCheck = document.querySelector("#allCheck")
    const productChecks = document.querySelectorAll(".productChecks")

    if (target.id === "allCheck") {
      if (target.checked) {
        productChecks.forEach((checkbox) => (checkbox.checked = true))
      } else {
        productChecks.forEach((checkbox) => (checkbox.checked = false))
      }
    } else {
      if (allCheck.checked === true && target.checked === false) {
        allCheck.checked = false
      }
    }
  }

  const handlePurchase = ({ target }) => {
    const productChecks = document.querySelectorAll(".productChecks")

    if (target.id === "immediatePurchase") {
      const item = cartProducts.filter((productInfo) => productInfo.id.toString() === target.dataset.id)
      const totalPrice = item[0]?.cartCount * item[0]?.price
      setPurchaseList(() => ({ itemList: [...item], totalPrice: totalPrice, modalVisible: true }))
    }

    if (target.id === "partialPurchase") {
      const partialChecks = [...productChecks].filter(({ checked }) => checked === true).map(({ value }) => value)
      if (!partialChecks.length) {
        alert("선택한 상품이 없습니다")
        return
      }
      const partialPurchaseList = cartProducts.filter(({ id }) => partialChecks.includes(id.toString()))
      const totalPrice = partialPurchaseList.reduce((totalItem, curItem) => {
        return totalItem + curItem?.cartCount * curItem?.price
      }, 0)
      setPurchaseList(() => {
        return { itemList: [...partialPurchaseList], totalPrice: totalPrice, modalVisible: true }
      })
    }
  }

  return (
    <Wrapper>
      {cartProducts.length ? (
        <CartWrapper>
          <AllProductsCheck>
            <AllProductsCheckLabel htmlFor="allCheck">전체 상품 체크</AllProductsCheckLabel>
            <input type="checkbox" id="allCheck" value="all" onChange={handleCheckBox} />
          </AllProductsCheck>
          <CartList>
            <ItemWrapper>
              {cartProducts?.map(({ category, id, image, title, price, cartCount }, idx) => {
                return (
                  <CartItemContainer key={category + idx}>
                    <ItemCheck>
                      <input
                        type="checkbox"
                        className="productChecks"
                        id={category + id}
                        value={id}
                        onChange={handleCheckBox}
                      />
                    </ItemCheck>
                    <Link to={`/product/${id}`}>
                      <ContentsContainer>
                        <ProductImageWrapper>
                          <ProductImage src={image} alt={category} />
                        </ProductImageWrapper>
                        <ProductDescription>
                          <ProductName>{title}</ProductName>
                          <ProductPrice>${price}</ProductPrice>
                        </ProductDescription>
                      </ContentsContainer>
                    </Link>
                    <ItemButtonWrapper>
                      <Button id="immediatePurchase" margin="0 0 1rem 0" onClick={handlePurchase} dataId={id}>
                        구매하기
                      </Button>
                      <Button
                        margin="0 0 1rem 0"
                        onClick={() => {
                          if (confirm(`${title}을 삭제하시겠습니까?`)) {
                            dispatch(remove({ id }))
                          }
                          return
                        }}
                      >
                        삭제하기
                      </Button>
                      <ItemQuantityWrapper>
                        <Button
                          size="xxSmall"
                          onClick={() => {
                            if (cartCount === 1) {
                              alert("최소 수량 1입니다.")
                              return
                            } else {
                              dispatch(decrease({ id }))
                            }
                          }}
                        >
                          -
                        </Button>
                        <ItemQuantity>{cartCount}</ItemQuantity>
                        <Button
                          width="xxSmall"
                          onClick={() => {
                            dispatch(increase({ id }))
                          }}
                        >
                          +
                        </Button>
                      </ItemQuantityWrapper>
                    </ItemButtonWrapper>
                  </CartItemContainer>
                )
              })}
            </ItemWrapper>
          </CartList>
          <CartListButtonWrapper>
            <Button size="large" margin="0 1rem" id="partialPurchase" color="purple" onClick={handlePurchase}>
              선택 상품 구매하기
            </Button>
            <Button
              color="red"
              size="large"
              margin="0 1rem"
              id="allPurchase"
              onClick={() => {
                dispatch(removeAll())
              }}
            >
              전체 상품 삭제하기
            </Button>
          </CartListButtonWrapper>
          <CartModal title="Receipt" state={purchaseList} setState={setPurchaseList} />
        </CartWrapper>
      ) : (
        <NoProductsWrapper>
          <NoProductInfo>장바구니에 담긴 상품이 없습니다.</NoProductInfo>
          <Link to={"/"}>
            <Button>쇼핑하러가기</Button>
          </Link>
        </NoProductsWrapper>
      )}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 90vw;
`
const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5rem;
`
const AllProductsCheck = styled.div`
  width: 10rem;
`
const AllProductsCheckLabel = styled.label`
  font-size: 1.2rem;
`
const CartList = styled.div`
  margin: 2rem 0;
`

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const CartItemContainer = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #eee;
  border-radius: 1.5rem;
`
const ContentsContainer = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  align-items: center;
`
const ProductImageWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 20rem;
  justify-content: center;
  align-items: center;
`
const ItemCheck = styled.div`
  width: 5rem;
  text-align: center;
`
const ProductImage = styled.img`
  object-fit: scale-down;
  height: 50%;
  width: 50%;
  &:hover {
    height: 70%;
    width: 70%;
  }
`
const ProductDescription = styled.div`
  width: 30rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
const ProductName = styled.h3`
  padding: 0 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const ProductPrice = styled.span`
  padding: 0 2rem;
`
const ItemButtonWrapper = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ItemQuantityWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ItemQuantity = styled.span`
  width: 2rem;
  text-align: center;
`
const CartListButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const NoProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 20rem;
`
const NoProductInfo = styled.span`
  margin: 2rem;
  font-size: 1.6rem;
`
