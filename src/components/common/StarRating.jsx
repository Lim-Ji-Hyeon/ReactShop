import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export default function StarRating(props) {
  const intNumber = parseInt(props.rate)
  const ratingHalf = (parseFloat(props.rate - intNumber).toFixed(1)) > 0.5 ? 1 : 0.5
  const ratingFull = ratingHalf === 1 ? intNumber + 1 : intNumber
  const ratingEmpty = ratingHalf === 0.5 ? (5 - ratingFull - 1) : (5 - ratingFull) 

  const starArray = []

  for (let i = 0; i < ratingFull; i++) {
    starArray.push({name : "orange", image : faStar, id : ((i + 1)*10 + (i + 1))})
  }
  
  if (ratingHalf === 0.5) {
    starArray.push({name : "orange", image : faStarHalfStroke, id : "999"})
  }

  for (let i = 0; i < ratingEmpty; i++) {
    starArray.push({name : "grey", image : faStar, id : ((i + 1)*100 + (i + 1))})
  }

  const stars = starArray.map((star) => <StyledSpan key={star.id}><StyledStar key={star.id} color={star.name} icon={star.image}></StyledStar></StyledSpan>)

  return (
    <StyledDiv className="starRating">
      {stars}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  width : 15rem;
  height : 3rem;
  display : inline-block;
`

const StyledSpan = styled.span`
  width : 3rem;
  height : 3rem;
`
const StyledStar = styled(FontAwesomeIcon)`
  width : 3rem;
  height : 3rem;
  color : ${props => props.color};
`