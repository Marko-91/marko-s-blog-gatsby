import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import Seo from '../../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

//import { v4 as uuidv4 } from 'uuid';

const BlogPost = ({data, children}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  const post_title = data.mdx.frontmatter.title;

  return (
    <Layout pageTitle={post_title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
        <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      {children}
      <form action="https://api.staticman.net/v2/entry/Marko-91/marko-s-blog-gatsby/master/comments" method="POST">
        <input type="text" name="fields.name" placeholder="Name" required />
        <input type="email" name="fields.email" placeholder="Email" required />
        <input type="text" name="fields.website" placeholder="Website" />
        <textarea name="fields.comment" placeholder="Your comment" required></textarea>
        <button type="submit">Submit</button>
     </form>

  </Layout>
  )
}

export const query = graphql`
query($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      date(formatString: "MMMM D, YYYY")
      title
      hero_image_alt
      hero_image_credit_link
      hero_image_credit_text
      slug
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />


export default BlogPost