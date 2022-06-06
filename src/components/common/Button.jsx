import styled from "styled-components";

export default function Button({type, color="purple" ,borderRadius="all", children}) {

  return (
    <SButton type={type} color={color} borderRadius={borderRadius}>{children}</SButton>
  )
}

const sizeFunction = (type, theme) => {
  switch (type) {
    case "xSmall" :
      return theme.width.xSmall
    case "small" :
      return theme.width.small
    case "medium" :
      return theme.width.medium
    case "large" :
      return theme.width.large
  }
}

const radiusFunction = (borderRadius, theme) => {
  switch (borderRadius) {
    case "all" :
      return theme.borderRadius.all
    case "left" :
      return theme.borderRadius.left
    case "right" :
      return theme.borderRadius.right
  }
}

const colorFunction = (color, theme) => {
  switch (color) {
    case "purple" :
      return theme.color.purple
    case "black" :
      return theme.color.black
    case "white" :
      return theme.color.white
  }
}

const SButton = styled.button`
  width : ${({theme, type}) => sizeFunction(type, theme)};
  height : ${({theme}) => theme.height.medium};
  background-color : ${({theme, color}) => colorFunction(color, theme)};
  color : ${({theme}) => theme.color.white};
  font-size : ${({theme}) => theme.font.size.normal};
  font-weight : ${({theme}) => theme.font.weight.normal};
  text-align : center;
  cursor : pointer;
  border : 0;
  border-radius : ${({theme, borderRadius}) => radiusFunction(borderRadius, theme)};
  &:hover {
    background-color : ${({theme}) => theme.color.green};
  }
`
