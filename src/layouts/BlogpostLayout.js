import React from "react"
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import innertext from 'innertext'

export default function BlogpostLayout ({ data }) {
  const post = data.wordpressPost
  return <div>
    <SEO
      title={innertext(post.title)}
      description={innertext(post.excerpt)}
      image={post.featured_media.source_url}
      keywords={post.categories}
    />
    <Header title='index header'></Header>
    <main>
      <div>
        <div className="container">
          <div className="row justify-content-md-center">
            <h1 dangerouslySetInnerHTML={{ __html: post.title }}/>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </div>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
}

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: {eq: $slug}) {
      content
      title
      featured_media {
        source_url
      }
      categories
      excerpt
    }
  }
`