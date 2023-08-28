// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
        <Layout pageTitle="About Page">
            <p>I am some cool bloogger.</p>
        </Layout>
    </main>
  )
}
export const Head = () => (
    <>
      <Seo title="About Page"/>
      <meta name="description" content="This is my cool blog" />
    </>
  )

// Step 3: Export your component
export default AboutPage