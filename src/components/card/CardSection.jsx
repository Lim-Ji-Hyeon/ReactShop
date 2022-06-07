import React, { useState } from "react";
import styled from "styled-components";
import CardList from "./CardList";

export default function CardSection(props) {

  return (
    <CategorySection>
      <SectionTitle>{props.title}</SectionTitle>
      <CardList></CardList>
    </CategorySection>
  )
}

let CategorySection = styled.section`
  width: 80%;
  margin: 0 auto;
  padding-top: 3rem;
`;

let SectionTitle = styled.h1`
  margin: 0;
  text-align: center;
  display: block;
  margin-bottom: 2rem;
  font-weight: 600;
  font-size: 1.5rem;
`;