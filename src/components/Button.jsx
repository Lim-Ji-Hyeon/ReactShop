import styled from "styled-components"

export default function Button({
  id,
  type = "button",
  size,
  color = "purple",
  borderRadius = "all",
  hoverColor = "green",
  children,
  onClick,
  dataId,
  margin,
  position,
  top,
  bottom,
  right,
  left
}) {
  return (
    <StyledButton
      type={type}
      id={id}
      onClick={onClick}
      size={size}
      color={color}
      hoverColor={hoverColor}
      borderRadius={borderRadius}
      data-id={dataId}
      margin={margin}
    >
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  margin: ${({ margin }) => margin};
  width: ${({ theme, size }) => theme.width[size]};
  height: ${({ theme }) => theme.height.medium};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  background-color: ${({ theme, color }) => theme.color[color]};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.size.normal};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  text-align: center;
  cursor: pointer;
  border: 0;
  border-radius: ${({ theme, borderRadius }) => theme.borderRadius[borderRadius]};
  &:hover {
    background-color: ${({ theme, hoverColor }) => theme.color[hoverColor]};
  }
`
