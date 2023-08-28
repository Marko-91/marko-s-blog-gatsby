import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
    //sort by timestamp
    const sortedNodes = data.allFile.nodes.sort((a, b) => 
    new Date(b.birthTime) - new Date(a.birthTime)
  );

  return (
    <Layout pageTitle="My Blog Posts">
        <ul>
            {
                sortedNodes.map(node => (
                    <li key={node.name}>
                        {node.name}
                    </li>
                )).sort()
            }
        </ul>
    </Layout>
  )
}

export const query = graphql`
query QueryBlogPostNames {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
        birthTime
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage