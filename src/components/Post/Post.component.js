import React from "react"
import { FormattedDate } from "gatsby-plugin-intl"
// Components
import LatestPosts from "@components/LatestPosts"
import Translate from "@components/Translate"
// Styles
import {
  Category,
  ContentWrapper,
  Date,
  PostWrapper,
  Subtitle,
  Title,
} from "./Post.styles"

const Post = ({ title, category, date, description, html, timeToRead }) => {
  return (
    <ContentWrapper>
      <PostWrapper>
        <Category>{category}</Category>
        <Title mb={3}>{title}</Title>
        <Subtitle mt={1}>{description}</Subtitle>
        <Date mt={1}>
          <FormattedDate
            day="2-digit"
            month="long"
            year="numeric"
            value={date}
          />
        </Date>
        <TimeToRead>
          <Translate
            id="post.readingMinutes"
            values={{
              timeToRead,
            }}
          />
        </TimeToRead>
        <Content mt={5} dangerouslySetInnerHTML={{ __html: html }} />
      </PostWrapper>
      <LatestPosts />
    </ContentWrapper>
  )
}

export default Post
