import React from "react"
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { Box } from "rebass"

function Loading({ isVisible }) {
  if (!isVisible) return null
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        background: "rgba(255, 255, 255, 0.7)",
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Loader type="Rings" color="#303030" height={100} width={100} />
    </Box>
  )
}

export default Loading
