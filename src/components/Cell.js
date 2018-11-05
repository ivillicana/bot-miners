import React, { Component } from 'react'
import Bot from './Bot'
import Node from './Node'

class Cell extends Component {

  render(){
    const bots = this.props.bots
    const nodes = this.props.nodes
    let botExists;
    let nodeExists;
    if (bots !== null){
      bots.forEach(bot =>{
        if(bot.Location.X === this.props.x && bot.Location.Y === this.props.y){
          
          botExists = bot
        }
      })
    }
    if (nodes !== null){
      nodes.forEach(node =>{
        if(node.Location.X === this.props.x && node.Location.Y === this.props.y){
          
          nodeExists = node
        }
      })
    }
    
    return (
      <div className="cell">
        {botExists &&
          <Bot info={botExists}/>
        }
        {nodeExists &&
          <Node info={nodeExists}/>
        }
      </div>
    )
  }
}

export default Cell