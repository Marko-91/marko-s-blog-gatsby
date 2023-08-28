import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { siteTitle } from './layout.module.css'

const Header = () => {
    
const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    siteBuildMetadata {
        buildTime
      }
  }
`)

return (
    <header className={siteTitle}>
      <h1>Welcome to {data.site.siteMetadata.title}</h1>
    </header>
  )
}

export default Header