import React from "react"
import { graphql } from 'gatsby'
import PrimaryLayout from '../layouts/PrimaryLayout'
import Post from '../components/Post'
import { Helmet } from 'react-helmet'

export default function Home ({ data  }) {
  return <PrimaryLayout column="col-xs-6">
    {data.allWordpressPost.nodes.map(node => (
      <Post
        image={node.featured_media.source_url}
        title={node.title}
        excerpt={node.excerpt}
        readMore={node.slug}
        >
      </Post>
    ))}
  </PrimaryLayout>
}
export const query = graphql`
  {
    allWordpressPost {
      nodes {
        slug 
        title
        excerpt
        featured_media {
          source_url
        }
      }
    }
  }
`

// <Helmet>
//       <title>Gatsby-Bootstrap Wordpress sourced</title>
//       <meta name="description" content="this is the description of our website"/>
//       <meta name="keywords" content="gatsby, gatsbyjs project, gatsby bootstrap"/>
//       <meta name="robots" content="index "/>
//     </Helmet>
