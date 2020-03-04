import React from "react"

import Layout from "../components/layout"
import Home from "../components/home"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
