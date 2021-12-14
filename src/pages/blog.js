import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"

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
          <ul>
            {blogPosts.map(blogPost => {
              return (
                <li>
                  <h2>
                    <Link to={`/blog/${blogPost.node.fields.slug}`}>
                      {blogPost.node.frontmatter.title}
                    </Link>
                  </h2>
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
