import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query ($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "DD MMMM YYYY")
      postbody {
        postbody
      }
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      {
        <article>
          <header>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>
              <time>{props.data.contentfulBlogPost.publishedDate}</time>
            </p>
          </header>
          <section>{props.data.contentfulBlogPost.postbody.postbody}</section>
        </article>
      }
    </Layout>
  )
}

export default Blog
