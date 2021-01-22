import React from "react"
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function PrimaryLayout (props) {
  return <div>
    <SEO />
    <Header title='index header'></Header>
    <main>
      <div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className={props.column}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
    </main>
    <Footer></Footer>
  </div>
}
