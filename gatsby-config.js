/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "Markov blog",
  },
  plugins: [  
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    }
  },
  "gatsby-plugin-mdx",
  "gatsby-transformer-sharp",
  {
    resolve: `gatsby-plugin-disqus`,
    options: {
      shortname: `your-disqus-shortname`
    }
  },
  "gatsby-plugin-netlify",
],
}
