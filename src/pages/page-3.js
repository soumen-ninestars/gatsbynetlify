import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the Third page</h1>
    <p>Welcome to page 3</p>
    <Link to="/page-2/">Go back to the page 2</Link>
  </Layout>
)

export default ThirdPage
