import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)
  const blogPosts = data.allMarkdownRemark.edges
  return (
    <div>
      <Layout>
        <h1>Blog</h1>
        <p>Posts will show up here later on.</p>
        <div>
          <ul>
            {blogPosts.map(blogPost => {
              return (
                <li>
                  <h2>{blogPost.node.frontmatter.title}</h2>
                  <h3>{blogPost.node.frontmatter.date}</h3>
                </li>
              )
            })}
          </ul>
        </div>
      </Layout>
    </div>
  )
}

export default BlogPage
