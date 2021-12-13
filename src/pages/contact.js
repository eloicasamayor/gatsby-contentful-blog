import React from "react"
import Layout from "../components/layout"

function ContactPage() {
  return (
    <div>
      <Layout>
        <h1>Contact me!</h1>
        <p>You can contact me on:</p>
        <ul>
          <li>Email</li>
          <li>
            <a href="http://twitter.com" target="_blank">
              Twitter @eloicasamayor
            </a>
          </li>
          <li>LinkedIn</li>
        </ul>
      </Layout>
    </div>
  )
}

export default ContactPage
