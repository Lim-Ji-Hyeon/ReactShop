import React from "react"
import HeaderCollection from './components/common/header/HeaderCollection';
import Footer from "./components/Footer";
import styled, {ThemeProvider} from "styled-components";
import {SmallAllButton, SmallLeftButton, SmallRightButton, MediumButton} from "./components/common/Button";
import {NewBadge, BestBadge} from "./components/common/Badge";
import theme from "../src/data/theme"
import StarRating from "./components/common/StarRating"

const StyledDiv = styled.div`
  width : 100%;
  height : 20rem;
  background-color : #003458;
`

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HeaderCollection/>
        <StyledDiv></StyledDiv>
        <NewBadge>NEW</NewBadge>
        <BestBadge>BEST</BestBadge>
        <MediumButton>바로</MediumButton>
        <StarRating rate={"4.3"}/>
        <Footer/>
      </ThemeProvider>
    </div>
  )
}

export default App
