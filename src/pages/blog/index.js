import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {

  return (
    <Layout pageTitle="My Blog Posts">
        <ul>
          {
          data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <Link to={`/blog/${node.frontmatter.slug}`}><h2>{node.frontmatter.title}</h2></Link>
              <p>Posted: {node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
            </article>
          ))
         }
        </ul>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        slug
        title
      }
      excerpt
    }
  }
}
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage