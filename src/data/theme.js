const button = {
  font : {
    textSize : "1.3rem",
    textColor : "white",
  },
  backgroundColor : {
    purple : "blueviolet",
  },
  hoverColor : {
    purple : "#6f00cc",
  },
  borderRadius : {
    all : "0.6rem",
    onlyLeft : "0.6rem 0 0 0.6rem",
    onlyRight : "0 0.6rem 0.6rem 0",
  },
  width : {
    small : "4rem",
    medium : "8rem",
    large : "12rem",
  },
  height : {
    normal : "4rem",
  },
}

const badge = {
  new : {
    width  : "4.5rem",
    height : "2rem",
    backgroundColor : "green",
    fontColor : "white",
    fontSize : "1.3rem",
    borderRadius : "0.8rem",
  },
  best : {
    width  : "5rem",
    height : "2rem",
    backgroundColor : "red",
    fontColor : "white",
    fontSize : "1.3rem",
    borderRadius : "0.8rem",
  },
}

const breadCrumbs = {
  width : "10rem",
  height : "3rem",
  fontSize : "1.5rem",
  fontColor : "black",
}

const theme = {
  button,
  badge,
  breadCrumbs,
}

export default theme;