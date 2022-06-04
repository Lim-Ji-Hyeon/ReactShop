import React from "react";
import styled, {ThemeProvider} from "styled-components";
import BreadCrumbs from "../common/BreadCrumbs";
import theme from "../../data/theme";

export default function Fashion() {
  
  return (
    <ThemeProvider theme={theme}>
      <BreadCrumbs from={"홈"} to={"패션"} />
      <h1>FashionPage</h1>
    </ThemeProvider>
    
  )
}