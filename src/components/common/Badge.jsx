import styled from "styled-components";

const NewBadge = styled.span`
  width : ${({theme}) => theme.badge.new.width};
  height : ${({theme}) => theme.badge.new.height};
  background-color : ${({theme}) => theme.badge.new.backgroundColor};
  color : ${({theme}) => theme.badge.new.fontColor};
  display : inline-block;
  font-size : ${({theme}) => theme.badge.new.fontSize};
  text-align : center;
  border : 0;
  border-radius : ${({theme}) => theme.badge.new.borderRadius};
  font-weight : 700;
`

const BestBadge = styled.span`
  width : ${({theme}) => theme.badge.best.width};
  height : ${({theme}) => theme.badge.best.height};
  background-color : ${({theme}) => theme.badge.best.backgroundColor};
  color : ${({theme}) => theme.badge.best.fontColor};
  display : inline-block;
  font-size : ${({theme}) => theme.badge.best.fontSize};
  text-align : center;
  border : 0;
  border-radius : ${({theme}) => theme.badge.best.borderRadius};
  font-weight : 700;
`

export {NewBadge, BestBadge}