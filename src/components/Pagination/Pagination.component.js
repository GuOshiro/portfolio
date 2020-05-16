import React from "react"
import classnames from "classnames"
import PropTypes from "prop-types"
import { navigate } from "gatsby-plugin-intl"
// Components
import { Button } from "rebass"
import Translate from "@components/Translate"
// Styles
import { Wrapper, PageDisplayWrapper } from "./Pagination.styles"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  total,
  prevPage,
  nextPage,
}) => {
  const goTo = to => () => navigate(to)
  return (
    <Wrapper>
      <Button
        className={classnames({ invisible: isFirst })}
        onClick={goTo(prevPage)}
      >
        <Translate id="pagination.previousPage" />
      </Button>

      <PageDisplayWrapper>
        <Translate
          id="pagination.pageIndicator"
          values={{ currentPage, total }}
        />
      </PageDisplayWrapper>

      <Button
        className={classnames({ invisible: isLast })}
        onClick={goTo(nextPage)}
      >
        <Translate id="pagination.nextPage" /> →
      </Button>
    </Wrapper>
  )
}

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
}

export default Pagination
