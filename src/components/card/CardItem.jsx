import React, { useState } from "react";
import styled from "styled-components";

export default function CardItem(props) {
  return (
  <CardBox>
    <img src={props.src}/>
    <h4>{props.title}</h4>
    <p>{props.price}</p>
  </CardBox>
  )
}

let CardBox = styled.div`
  border: 1px solid #eee;
  border-radius: 0.5rem;
  padding: 1rem 0 1rem 0;

  h4, p, img {
    width: 90%;
    display: block;
    margin: 0 auto;
    padding-bottom: 1rem;
  }

  h4 {
    font-size: 0.9rem;
  }

  p {
    font-size: 0.8rem;
  }
`;
