import React from 'react';
// import logo from './logo.svg';
import './App.css';
// var cors = require('cors');
// App.use(cors());


class StarWars extends React.Component {
  constructor(){
    super()
    this.state={
      image:null,
      name: null,
      height: null,
      homeworld: null,
      wiki: null,
      loadedCharacter: false,
    }

  }
  getNewCharacter()
  {
    const randomNumber= Math.round( Math.random() * 88)
    const url=`https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`
    fetch( url)
    .then(response=> response.json())
    .then(data=> {
      this.setState({
        image:data.image,
        name: data.name,
        height: data.height,
        homeworld: data.homeworld,
        wiki: data.wiki,
        loadedCharacter: true,
      })
    })

    
    
      
  }
  render() {
    return (
      <div>
        {
          this.state.loadedCharacter &&
          <div>
            <img src={this.state.image} alt="Not working"></img>
            <h1>{this.state.name}</h1>
            <p>{this.state.height} cm</p>
            <p>homeworld:{this.state.homeworld}</p>
            <p><a href={this.state.wiki}>Wiki</a></p>
          </div>
        }
        
        
        <button type="button" onClick={()=>this.getNewCharacter()} className="btn">Random Character</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
