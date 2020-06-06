import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import FourBlockWrapper from "../components/FourBlockWrapper"
import ServiceWrapper from "../components/ServiceWrapper"
import TestimonialWrapper from "../components/TestimonialWrapper"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ServiceWrapper />
    <FourBlockWrapper category="Workout" />
    <TestimonialWrapper />
    <FourBlockWrapper category="Nutrition" />
  </Layout>
)

export default IndexPage
