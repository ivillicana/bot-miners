import React from 'react'

const Bot = props => {
  return (
    <div className="bot">
      <small>{props.info && props.info.Score}</small>
    </div>
  )
}

export default Bot