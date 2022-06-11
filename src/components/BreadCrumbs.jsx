import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function BreadCrumbs({from, to}) {
  return ( 
    <BreadCrumbsWrapper>
      {from}
      <Arrow icon={faAngleRight}></Arrow>
      {to}
    </BreadCrumbsWrapper>
  )
}


const BreadCrumbsWrapper = styled.span`
  height : ${({theme}) => theme.height.small};
  font-size : ${({theme}) => theme.font.size.large};
  color : ${({theme}) => theme.color.black};
  font-weight : ${({theme}) => theme.font.weight.normal};
  display : inline-block;
  margin : 2rem;
`

const Arrow = styled(FontAwesomeIcon)`
  width : ${({theme}) => theme.font.size.normal};
  height : ${({theme}) => theme.font.size.normal};
  margin : 0 0.5rem 0 0.5rem;
`