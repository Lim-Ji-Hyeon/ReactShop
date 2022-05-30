import React from "react"
import HeaderCollection from './components/common/header/HeaderCollection';
import Footer from "./components/Footer";
import styled from "styled-components";

const StyledDiv = styled.div`
  width : 100%;
  height : 20rem;
  background-color : #003458;
  `

function App() {

  return (
    <div className="App">
      <HeaderCollection/>
      <StyledDiv/>
      <Footer/>
    </div>
  )
}

export default App
