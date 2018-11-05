import React, { Component } from 'react';

import Matrix from './components/Matrix'
import rows from './rowAndCells'

const NODES_URL = 'http://headlight-tournament-5.herokuapp.com/nodes'
const BOTS_URL = 'http://headlight-tournament-5.herokuapp.com/bots'

class App extends Component {
  constructor(){
    super()
    this.state = {
      bots: null,
      nodes: null
    }
  }

  componentDidMount(){
    this.fetchBotsAndNodes()
    this.interval = setInterval(this.fetchBotsAndNodes, 3000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  fetchBotsAndNodes = () => {
    this.fetchNodes()
    this.fetchBots()
  }

  fetchNodes = () => {
    fetch(NODES_URL)
    .then(resp => resp.json())
    .then(nodes => this.setState({
      nodes: nodes.Nodes
    }))
  }

  fetchBots = () => {
    fetch(BOTS_URL)
    .then(resp => resp.json())
    .then(bots => this.setState({
      bots: bots.Bots
    }))
  }

  render() {
    return (
      <div className="container text-center">
        <h2>Central Mining Service</h2>
        <p >Legend: Mining Node(<span className="text-danger">red</span>) Bot(<span className="text-primary">blue</span>)</p>
        <Matrix rows={rows} bots={this.state.bots} nodes={this.state.nodes}/>
      </div>
    );
  }
}

export default App;
