import React from 'react'
import Header from './components/navbar/Header'

export default function Layout(props) {
 
let path = window.location
  return (
    <div>
      <div>
        {
          // path && path.pathname !== "/Login" && path && path.pathname !== "/Registration" ?
           ( <Header/>)//:(null)
        }
      </div>
     {props.children}
    </div>
  )
}
