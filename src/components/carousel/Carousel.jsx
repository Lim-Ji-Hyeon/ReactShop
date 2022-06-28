import { useState, useEffect } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons"

export default function Carousel({ images, width, height, lengthOfTime = "500" }) {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [duration, setDuration] = useState(0)
  const [isMoving, setIsMoving] = useState(false)

  useEffect(() => {
    setDuration(lengthOfTime)
  }, [])

  const move = (_currentSlide, _duration = 0) => {
    if (_duration) {
      setIsMoving(true)
    }
    setCurrentSlide(_currentSlide)
    setDuration(_duration)
  }

  const handleClick = ({ target: { id } }) => {
    if (isMoving) return
    const delta = id === "prev" ? -1 : 1
    move(currentSlide + 1 * delta, lengthOfTime)
  }

  const handleNav = (index) => {
    move(index + 1, lengthOfTime)
  }
  const handleTransitionEnd = () => {
    setIsMoving(false)
    const delta = currentSlide === 0 ? 1 : currentSlide === images.length + 1 ? -1 : 0
    if (delta) {
      move(currentSlide + images.length * delta)
    }
  }

  return (
    <Container width={width} height={height}>
      <Slides currentSlide={currentSlide} duration={duration} onTransitionEnd={handleTransitionEnd}>
        {[images[images.length - 1], ...images, images[0]].map((url, index) => {
          return <Image bguUrl={url} key={`image_${index}`} width={width} height={height} />
        })}
      </Slides>
      <PrevControl id="prev" onClick={handleClick}>
        <FontAwesomeIcon icon={faCaretLeft} />
      </PrevControl>
      <NextControl id="next" onClick={handleClick}>
        <FontAwesomeIcon icon={faCaretRight} />
      </NextControl>
      <DotWrapper>
        {images.map((_, index) => {
          return (
            <DotButton
              key={`dot${index}`}
              id={`dot${index}`}
              onClick={() => handleNav(index)}
              currentSlide={currentSlide}
            />
          )
        })}
      </DotWrapper>
    </Container>
  )
}

const Container = styled.div`
  width: ${({ width }) => width || "96%"};
  height: ${({ height }) => height || "40rem"};
  position: relative;
  margin: 5rem auto 0;
  overflow: hidden;
`
const Slides = styled.div`
  display: flex;
  transition: transform ${({ duration }) => duration}ms ease-out;
  transform: translate3D(${({ currentSlide }) => currentSlide * -100}%, 0, 0);
`
const Image = styled.div`
  height: ${({ height }) => height || "40rem"};
  flex-basis: calc(${({ width }) => width || "100%"});
  flex-shrink: 0;
  background-image: url(${({ bguUrl }) => bguUrl});
  background-size: cover;
  background-repeat: no-repeat;
`
const Control = styled.button`
  position: absolute;
  top: 50%;
  height: 100%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  color: darkgray;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  z-index: 1;
  &:hover {
    background-color: rgba(051, 051, 051, 0.3);
    color: Gainsboro;
  }
`
const PrevControl = styled(Control)`
  left: 0;
`
const NextControl = styled(Control)`
  right: 0;
`
const DotWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 2rem;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
`
const DotButton = styled.button`
  margin: 0.6rem 0.1rem;
  padding: 0;
  border-radius: 50%;
  width: 0.8rem;
  height: 0.8rem;
  background-color: darkgray;
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: Gainsboro;
  }
  &:nth-child(${({ currentSlide }) => currentSlide}) {
    background-color: Gainsboro;
  }
`
