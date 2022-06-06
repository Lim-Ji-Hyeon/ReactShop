import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function BreadCrumbs(props) {
  return ( 
    <StyledDiv>
      {props.from}
      <StyledIcon icon={faAngleRight}></StyledIcon>
      {props.to}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  width : 10rem;
  height : ${({theme}) => theme.height.medium};
  font-size : ${({theme}) => theme.font.size.normal};
  color : ${({theme}) => theme.color.black};
  font-weight : ${({theme}) => theme.font.weight.normal};
  display : inline-block;
  margin-left : 1rem;
`

const StyledIcon = styled(FontAwesomeIcon)`
  width : ${({theme}) => theme.font.size.normal};
  height : ${({theme}) => theme.font.size.normal};
  margin : 0 0.5rem 0 0.5rem;
`