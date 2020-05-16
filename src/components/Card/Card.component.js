import PropTypes from "prop-types"
import React from "react"
import { Card as RebassCard } from "rebass"

const cardStyles = {
  backgroundColor: "white",
  borderRadius: 2,
  boxShadow: "0px 6px 8px #0D0D361A",
  padding: 4,
}

function Card({ children, sx, ...props }) {
  return (
    <RebassCard sx={{ ...cardStyles, ...sx }} {...props}>
      {children}
    </RebassCard>
  )
}

Card.propTypes = {
  children: PropTypes.node,
}

export default Card
