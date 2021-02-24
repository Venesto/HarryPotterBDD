import React, { Component } from 'react'

import "./Characters.css"

class Characters extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then(res => res.json())
    .then(res => this.setState({characters: res}))
  }

  render() {
    console.log(this.state.characters)
    return (
      <div>{this.state.characters.map(character => {
        return (
          <div>
            <img src={character.image} alt={character.name}/>
            <p className="element">{character.name}</p>
          </div>)
      })}
      </div>
    )
  }
}

export default Characters