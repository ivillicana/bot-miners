import React from 'react'

const Node = props => {
  return (
    <div className="node">
      <small>{props.info && props.info.Value}</small>
    </div>
  )
}

export default Node