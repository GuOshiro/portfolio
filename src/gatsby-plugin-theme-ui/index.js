const breakpoints = ["40em", "56em", "64em"]
const colors = {
  background: "#fff",
  blue: "#4A90E2",
  blueNavy: "#0e0b5b",
  blueNavyLight: "#243e76",
  darkSecondary: "#ed4c5b",
  gray: "#212121",
  grayLight: "#f7f7f7",
  heading: "#0e0b5b",
  muted: "#f6f6f6",
  orange: "#F5A623",
  primary: "#00346B",
  secondary: "#f17b36",
  text: "#555",
}
const fonts = {
  body: "Lato, sans-serif",
  heading: "Nunito, sans-serif",
  monospace: "Menlo, monospace",
}
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96]
const fontWeights = {
  thin: 100,
  light: 200,
  body: 400,
  heading: 700,
  bold: 700,
}
const forms = {
  label: {
    fontSize: 1,
    fontWeight: "bold",
    color: "heading",
    flexDirection: "column",
  },
  input: {
    paddingY: 2,
    paddingX: 1,
    border: "none",
    borderColor: "primary",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    marginTop: 1,
    color: "text",
    "&::placeholder": {
      opacity: 0.4,
    },
  },
}
const lineHeights = {
  body: 1.5,
  heading: 1.125,
}
const shadows = {
  card: "0px 6px 8px #0D0D361A",
  cardHovered: "0px 6px 8px #0D0D364F",
}
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]
const styles = {
  root: {
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body",
  },
}
const text = {
  caps: {
    background: `linear-gradient(112deg, ${colors.darkSecondary} 0%, ${colors.secondary} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textTransform: "uppercase",
    letterSpacing: 1,
    fontWeight: "bold",
  },
}
const variants = {
  card: {
    p: 2,
    bg: "background",
    boxShadow: "card",
  },
}

// Default Components
const defaultButton = {
  "&.invisible": {
    visibility: "hidden",
  },
  "&:hover": {
    boxShadow: shadows.cardHovered,
    transform: "scale(1.1)",
  },
  borderRadius: 50,
  color: "white",
  cursor: "pointer",
  fontFamily: "heading",
  fontSize: 2,
  fontWeight: 400,
  outline: "none",
  overflow: "hidden",
  padding: "14px 35px",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  transition: ".2s transform, .2s transform",
}

const buttons = {
  link: {
    fontFamily: "body",
    padding: 0,
    background: "transparent",
  },
  outlined: {
    ...defaultButton,
    background: "transparent",
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 2,
    boxShadow: shadows.card,
    color: "gray",
  },
  primary: {
    ...defaultButton,
    backgroundColor: "gray",
    boxShadow: shadows.card,
    color: "white",
  },
}

export default {
  breakpoints,
  buttons,
  colors,
  defaultButton,
  fonts,
  fontSizes,
  fontWeights,
  forms,
  lineHeights,
  shadows,
  space,
  styles,
  text,
  variants,
}
