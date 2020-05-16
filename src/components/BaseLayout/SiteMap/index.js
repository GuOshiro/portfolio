import Translate from "@components/Translate"
import { menuItems } from "@constants/home"
import { Link } from "gatsby"
import React from "react"
import { Box } from "rebass"

function SiteMap() {
  return (
    <nav>
      <Box
        as="ul"
        sx={{
          "& li:not(:last-child)": {
            mb: 3,
          },
          a: {
            color: "white",
            fontWeight: "200",
            textDecoration: "none",
            "&.active": {
              fontWeight: "bold",
            },
            "&:hover": {
              opacity: 0.8,
            },
          },
        }}
      >
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link activeClassName="active" fontWeight='100' to={`/${item}`}>
              <Translate fontWeight='100' id={`menu.${item}`} />
            </Link>
          </li>
        ))}
      </Box>
    </nav>
  )
}

export default SiteMap
