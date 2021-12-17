import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"

import * as blogStyles from "./blog.module.scss"

function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  `)
  const blogPosts = data.allContentfulBlogPost.edges
  return (
    <div>
      <Layout>
        <h1>Blog</h1>
        <p>Here you have some of my thoughts.</p>
        <div>
          <ul className={blogStyles.posts}>
            {blogPosts.map(blogPost => {
              return (
                <li className={blogStyles.post}>
                  <Link to={`/blog/${blogPost.node.slug}`}>
                    <h2>{blogPost.node.title}</h2>
                    <p>{blogPost.node.publishedDate}</p>
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
