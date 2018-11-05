import React, { Component } from 'react'
import Cell from './Cell'

class Matrix extends Component {
  

  generateMatrix = () => (
    this.props.rows.map((row, rowIdx) => (
      <div key={rowIdx} className="row" >{this.generateRows(row, rowIdx)}</div>
    )
    )
  )

  generateRows = (vals, rowIdx) => (
    vals.map((cells, cellIdx) => <Cell key={cellIdx} bots={this.props.bots} nodes={this.props.nodes} x={rowIdx} y={cellIdx} />)
  )
    
  

  render() {
    return(
      <div id="matrix">
        {this.generateMatrix()}
      </div>
    )
  }
}

export default Matrix