import styled from "styled-components";

export default function Badge({type, children}) {
  return (
    <SBadge type={type}>{children}</SBadge>
  )
}

const SBadge = styled.span`
  width : ${({theme}) => theme.width.small};
  height : ${({theme}) => theme.height.smal};
  background-color : ${({theme, type}) => type==="new" ? theme.color.green : theme.color.red};
  color : ${({theme}) => theme.color.white};
  display : inline-block;
  font-size : ${({theme}) => theme.font.size.normal};
  text-align : center;
  border : 0;
  border-radius : ${({theme}) => theme.borderRadius.all};
  font-weight : ${({theme}) => theme.font.weight.normal};
`
