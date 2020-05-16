const colors = {
  background: "#fff",
  blue: "#00346B",
  blueNavy: "#0e0b5b",
  blueNavyLight: "#243e76",
  darkSecondary: "#ed4c5b",
  gray: "#212121",
  grayLight: "#f7f7f7",
  muted: "#f6f6f6",
  primary: "#00346B",
  secondary: "#f17b36",
  text: "#555",
  heading: "#0e0b5b",
}

const defaultButton = {
  "&.invisible": {
    visibility: "hidden",
  },
  "&:hover": {
    opacity: 0.8,
  },
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  fontFamily: "heading",
  borderRadius: 50,
  fontSize: 2,
  color: "white",
  fontWeight: 400,
  padding: "14px 35px",
}

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Lato, sans-serif",
    heading: "Nunito, sans-serif",
    monospace: "Menlo, monospace",
  },
  text: {
    caps: {
      background: `linear-gradient(112deg, ${colors.darkSecondary} 0%, ${colors.secondary} 100%)`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textTransform: "uppercase",
      letterSpacing: 1,
      fontWeight: "bold",
    },
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    thin: 100,
    light: 200,
    body: 400,
    heading: 700,
    bold: 700,
  },
  breakpoints: ["40em", "56em", "64em"],
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  shadows: {
    card: "0px 6px 8px #0D0D361A",
    cardHovered: "0px 6px 8px #0D0D364F",
  },
  colors,
  variants: {
    card: {
      p: 2,
      bg: "background",
      boxShadow: "card",
    },
  },
  buttons: {
    link: {
      fontFamily: "body",
      padding: 0,
      background: "transparent",
    },
    outlined: {
      ...defaultButton,
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: "secondary",
      background: "transparent",
    },
    primary: {
      ...defaultButton,
      background: `linear-gradient(112deg, ${colors.darkSecondary} 0%, ${colors.secondary} 100%)`,
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
  },

  forms: {
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
  },
}
