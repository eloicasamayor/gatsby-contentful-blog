import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

function AboutPage() {
  return (
    <div>
      <Layout>
        <h1>About me</h1>
        <p>I am 29 hears old and this is the bio nanana nanana.</p>
        <p>
          <Link to="/contact">Contact me</Link>
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage
