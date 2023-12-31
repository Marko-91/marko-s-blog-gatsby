// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <StaticImage 
          alt='some picture gamnes' 
          src='https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/3d8baa3e-5b8a-4c13-9747-4e89fb6ed0e6/mines.jpg?format=1500w'>
        </StaticImage>
        <StaticImage 
          alt='some picture blogs' 
          src='../images/free-images-for-blogs.jpg'>
        </StaticImage>
      </Layout>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page"/>

// Step 3: Export your component
export default IndexPage