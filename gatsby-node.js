const { createFilePath } = require("gatsby-source-filesystem")
const slugify = require("slugify")
const path = require("path")

function formatCategorySlug(category) {
  return slugify(category, {
    lower: true,
  })
}

exports.createPages = ({
  graphql,
  actions: { createPage, createRedirect },
}) => {
  const postsPerPage = 8

  function createBlogPages() {
    return graphql(`
      query PostList {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { glob: "**/api/posts/*.md" } }
        ) {
          edges {
            node {
              frontmatter {
                category
                description
                title
                slug
                routes
              }
              fields {
                slug
              }
              timeToRead
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allMarkdownRemark.edges
      posts.forEach(({ node, next, previous }) => {
        createPage({
          path: `/blog${node.frontmatter.slug || node.fields.slug}`,
          component: path.resolve("./src/templates/blog-post.js"),
          context: {
            slug: node.fields.slug,
            previousPost: previous,
            nextPost: next,
          },
        })

        node.frontmatter.routes &&
          node.frontmatter.routes.forEach(route => {
            createRedirect({
              toPath: node.fields.slug,
              fromPath: route,
              isPermanent: true,
            })
          })
      })
      const pages = Math.ceil(posts.length / postsPerPage)

      Array.from({ length: pages }).forEach((_, index) => {
        createPage({
          path: index === 0 ? "/blog/" : `/blog/page/${index + 1}`,
          component: path.resolve("./src/templates/blog-list.js"),
          context: {
            limit: postsPerPage,
            skip: postsPerPage * index,
            total: pages,
            currentPage: index + 1,
          },
        })
      })
    })
  }

  function createPortfolioPages() {
    return graphql(`
      query PortfolioList {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { glob: "**/api/portfolio/*.md" } }
        ) {
          edges {
            node {
              frontmatter {
                category
                date
                description
                routes
                slug
                title
              }
              fields {
                slug
              }
              timeToRead
            }
          }
        }
      }
    `).then(result => {
      const cases = result.data.allMarkdownRemark.edges
      cases.forEach(({ node, next, previous }) => {
        createPage({
          path: `/portfolio${node.frontmatter.slug || node.fields.slug}`,
          component: path.resolve("./src/templates/portfolio-item.js"),
          context: {
            slug: node.fields.slug,
            previousPost: previous,
            nextPost: next,
          },
        })

        node.frontmatter.routes &&
          node.frontmatter.routes.forEach(route => {
            createRedirect({
              toPath: node.fields.slug,
              fromPath: route,
              isPermanent: true,
            })
          })
      })
      const pages = Math.ceil(cases.length / postsPerPage)

      Array.from({ length: pages }).forEach((_, index) => {
        createPage({
          path: index === 0 ? "/portfolio/" : `/portfolio/page/${index + 1}`,
          component: path.resolve("./src/templates/portfolio-list.js"),
          context: {
            limit: postsPerPage,
            skip: postsPerPage * index,
            total: pages,
            currentPage: index + 1,
          },
        })
      })
    })
  }

  return Promise.all([createBlogPages(),  createPortfolioPages()])
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug =
      node.frontmatter.slug ||
      `/${createFilePath({
        node,
        getNode,
        basePath: "pages",
      }).slice(12)}`

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })

    node.frontmatter.category &&
      createNodeField({
        node,
        name: "categorySlug",
        value: formatCategorySlug(node.frontmatter.category),
      })
  }
}
