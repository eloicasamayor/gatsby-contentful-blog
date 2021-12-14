import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"

import * as blogStyles from "./blog.module.scss"

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
            fields {
              slug
            }
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
          <ul className={blogStyles.posts}>
            {blogPosts.map(blogPost => {
              return (
                <li className={blogStyles.post}>
                  <Link to={`/blog/${blogPost.node.fields.slug}`}>
                    <h2>{blogPost.node.frontmatter.title}</h2>
                    <p>{blogPost.node.frontmatter.date}</p>
                  </Link>
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
