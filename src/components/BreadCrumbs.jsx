import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function BreadCrumbs({from, to}) {
  return ( 
    <StyledDiv>
      {from}
      <StyledIcon icon={faAngleRight}></StyledIcon>
      {to}
    </StyledDiv>
  )
}


const StyledDiv = styled.span`
  height : ${({theme}) => theme.height.small};
  font-size : ${({theme}) => theme.font.size.normal};
  color : ${({theme}) => theme.color.black};
  font-weight : ${({theme}) => theme.font.weight.normal};
  display : inline-block;
`

const StyledIcon = styled(FontAwesomeIcon)`
  width : ${({theme}) => theme.font.size.normal};
  height : ${({theme}) => theme.font.size.normal};
  margin : 0 0.5rem 0 0.5rem;
`