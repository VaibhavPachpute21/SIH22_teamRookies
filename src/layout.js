import React from 'react'
import Header from './components/navbar/index'

export default function Layout(props) {
  return (
    <div>
      <div>
        <Header/>
      </div>
     {props.children}
    </div>
  )
}
