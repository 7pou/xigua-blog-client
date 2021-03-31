import React from 'react'
import './index.scss';
const Card = (props) => {

  return (
    <div className="card-component">
      <div className="title app-ellipsis">{props.title}</div>
      <div className="content">{props.children}</div>
    </div>
  )
}

export default Card