import React from 'react'
import './index.scss'
import Tags from "@/containers/Tags";
const Layout = (props) => {
  console.log(props.children)
  return (
    <div className="layout">
      <div className="header"></div>
      <div className="container">
        <div className="content">{props.children}</div>
        <aside className="slide-block">
          <Tags />
          <Tags />
          <Tags />
        </aside>
      </div>
     
    </div>
  )
}

export default Layout