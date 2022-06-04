import styled from "styled-components";

const SmallAllButton = styled.button`
  width : ${({theme}) => theme.button.width.small};
  height : ${({theme}) => theme.button.height.normal};
  background-color : ${({theme}) => theme.button.backgroundColor.purple};
  color : ${({theme}) => theme.button.font.textColor};
  font-size : ${({theme}) => theme.button.font.textSize};
  font-weight : 700;
  text-align : center;
  cursor : pointer;
  border : 0;
  border-radius : ${({theme}) => theme.button.borderRadius.all};
  &:hover {
    background-color : ${({theme}) => theme.button.hoverColor.purple};
  }
`
const SmallLeftButton = styled.button`
  width : ${({theme}) => theme.button.width.small};
  height : ${({theme}) => theme.button.height.normal};
  background-color : ${({theme}) => theme.button.backgroundColor.purple};
  color : ${({theme}) => theme.button.font.textColor};
  font-size : ${({theme}) => theme.button.font.textSize};
  font-weight : 700;
  text-align : center;
  cursor : pointer;
  border : 0;
  border-radius : ${({theme}) => theme.button.borderRadius.onlyLeft};
  &:hover {
    background-color : ${({theme}) => theme.button.hoverColor.purple};
  }
`

const SmallRightButton = styled.button`
  width : ${({theme}) => theme.button.width.small};
  height : ${({theme}) => theme.button.height.normal};
  background-color : ${({theme}) => theme.button.backgroundColor.purple};
  color : ${({theme}) => theme.button.font.textColor};
  font-size : ${({theme}) => theme.button.font.textSize};
  font-weight : 700;
  text-align : center;
  cursor : pointer;
  border : 0;
  border-radius : ${({theme}) => theme.button.borderRadius.onlyRight};
  &:hover {
    background-color : ${({theme}) => theme.button.hoverColor.purple};
  }
`

const MediumButton = styled.button`
  width : ${({theme}) => theme.button.width.medium};
  height : ${({theme}) => theme.button.height.normal};
  background-color : ${({theme}) => theme.button.backgroundColor.purple};
  color : ${({theme}) => theme.button.font.textColor};
  font-size : ${({theme}) => theme.button.font.textSize};
  font-weight : 700;
  text-align : center;
  cursor : pointer;
  border : 0;
  border-radius : ${({theme}) => theme.button.borderRadius.all};
  &:hover {
    background-color : ${({theme}) => theme.button.hoverColor.purple};
  }
`

const LargeButton = styled.button`
  width : ${({theme}) => theme.button.width.large};
  height : ${({theme}) => theme.button.height.normal};
  background-color : ${({theme}) => theme.button.backgroundColor.purple};
  color : ${({theme}) => theme.button.font.textColor};
  font-size : ${({theme}) => theme.button.font.textSize};
  font-weight : 700;
  text-align : center;
  cursor : pointer;
  border : 0;
  border-radius : ${({theme}) => theme.button.borderRadius.all};
  &:hover {
    background-color : ${({theme}) => theme.button.hoverColor.purple};
  }
`


export {SmallAllButton, SmallLeftButton, SmallRightButton, MediumButton, LargeButton}