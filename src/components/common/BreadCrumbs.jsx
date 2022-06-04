import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function BreadCrumbs(props) {
  let from = props.from
  let to = props.to

  return ( 
    <StyledDiv>
      {from}
      <StyledIcon icon={faAngleRight}></StyledIcon>
      {to}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  width : ${({theme}) => theme.breadCrumbs.width};
  height : ${({theme}) => theme.breadCrumbs.height};
  font-size : ${({theme}) => theme.breadCrumbs.fontSize};
  color : ${({theme}) => theme.breadCrumbs.fontColor};
  display : inline-block;
  margin-left : 1rem;
`

const StyledIcon = styled(FontAwesomeIcon)`
  width : ${({theme}) => theme.breadCrumbs.fontSize};
  height : ${({theme}) => theme.breadCrumbs.fontSize};
  margin : 0 0.5rem 0 0.5rem;
`