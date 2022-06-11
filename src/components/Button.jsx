import styled from "styled-components";

export default function Button({size, color="purple" ,borderRadius="all", hoverColor="green" ,children, onClick}) {
  return (
    <StyledButton onClick={onClick} size={size} color={color} hoverColor={hoverColor} borderRadius={borderRadius}>{children}</StyledButton>
  )
}

const StyledButton = styled.button`
  width : ${({theme, size}) => theme.width[size]};
  height : ${({theme}) => theme.height.medium};
  background-color : ${({theme, color}) => theme.color[color]};
  color : ${({theme}) => theme.color.white};
  font-size : ${({theme}) => theme.font.size.normal};
  font-weight : ${({theme}) => theme.font.weight.normal};
  text-align : center;
  cursor : pointer;
  border : 0;
  border-radius : ${({theme, borderRadius}) => theme.borderRadius[borderRadius]};
  &:hover {
    background-color : ${({theme, hoverColor}) => theme.color[hoverColor]};
  }
`
