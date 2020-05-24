import { FormattedDate } from "gatsby-plugin-intl"
import React from "react"
import {
  CardLink,
  Category,
  InfoWrapper,
  PostImage,
  TitleWrapper,
  Wrapper,
} from "./PostItem.styles"
import { Title } from "@components/LatestPosts/LatestPosts.styles"

const PostItem = ({ title, slug, category, image, date, height }) => {
  return (
    <CardLink to={slug}>
      <Wrapper>
        {image && <PostImage height={height} image={image} />}
        <InfoWrapper>
          <TitleWrapper>
            <Category mb={1}>{category}</Category>
            <Title>{title}</Title>
          </TitleWrapper>
          <FormattedDate
            day="2-digit"
            month="long"
            year="numeric"
            value={date}
          />
        </InfoWrapper>
      </Wrapper>
    </CardLink>
  )
}

export default PostItem
