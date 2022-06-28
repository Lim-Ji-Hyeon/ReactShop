import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

export default function CartModal({ title, state, setState }) {
  return (
    <Overlay
      isVisible={state?.modalVisible}
      onClick={() => setState((preValue) => ({ ...preValue, modalVisible: false }))}
    >
      <Container isVisible={state?.modalVisible}>
        <CloseButton onClick={() => setState((preValue) => ({ ...preValue, modalVisible: false }))}>
          <FontAwesomeIcon icon={faXmark} />
        </CloseButton>
        <Header>
          <Title>{title}</Title>
        </Header>
        <Body>
          <Heading>
            <ProductName>Product Name</ProductName>
            <Quantity>Quantity</Quantity>
            <Price>Price</Price>
          </Heading>
          {state.itemList.map(({ title, price, cartCount }, idx) => {
            return (
              <BodyGrid key={"Reciept" + idx}>
                <ProductName>{title}</ProductName>
                <Quantity>{cartCount}</Quantity>
                <Price>{price * cartCount}</Price>
              </BodyGrid>
            )
          })}
        </Body>
        <Footer>
          <TotalHeader>Total</TotalHeader>
          <TotalPrice>{state.totalPrice}</TotalPrice>
        </Footer>
      </Container>
    </Overlay>
  )
}

const Overlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`
const CloseButton = styled.button`
  position: absolute;
  width: 2.4rem;
  height: 2.4rem;
  top: 2%;
  right: 2%;
  border-radius: 50%;
  border: 0;
  background-color: #cb400d;
`
const Container = styled.div`
  position: absolute;
  flex-direction: column;
  border-radius: 0.8rem;
  min-height: 20rem;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  background-color: white;
  padding: 2.4rem;
  margin: 0 2.4rem;
  max-width: 48rem;
  width: 100%;
  z-index: 1000;
`
const Header = styled.div`
  display: flex;
  height: 10%;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`
const Body = styled.div`
  margin: 3.2rem 0;
  height: 30vh;
  background-color: rgba(247, 247, 247, 0.5);
`
const Heading = styled.div`
  margin-bottom: 1rem;
  height: 3rem;
  display: flex;
  text-align: center;
  font-weight: 700;
  font-size: 1.4rem;
`
const BodyGrid = styled.div`
  margin-bottom: 1rem;
  display: flex;
  text-align: center;
`
const ProductName = styled.div`
  width: 60%;
`
const Price = styled.div`
  width: 25%;
`

const Quantity = styled.div`
  width: 15%;
`
const Footer = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 2rem;
  justify-content: space-between;
  text-align: center;
`
const TotalHeader = styled.div`
  width: 25%;
`
const TotalPrice = styled.div`
  width: 25%;
`
