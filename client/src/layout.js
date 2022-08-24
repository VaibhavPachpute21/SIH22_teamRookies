import React from 'react'
import Header from './components/navbar/Header'
import Footer from './components/footer/Footer'

export default function Layout(props) {

  let path = window.location
  return (
    <div>
      <div>
        {/* {
          path && path.pathname !== "/Dashboard" ? (<Header />) : (null)
        } */}
      </div>
      {props.children}
    </div>
  )
}
