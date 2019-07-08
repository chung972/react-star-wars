import React, {Component} from 'react';
import './App.css';
import { allShipsPageOne, allShipsPageTwo, allShipsPageThree, allShipsPageFour } from "./services/sw-api";
import Starships from "./components/Starships/Starships";


class App extends Component {

  state = {
    starshipList: null
  }

  async componentDidMount() {
    const pageOne = await allShipsPageOne();
    const pageTwo = await allShipsPageTwo();
    const pageThree = await allShipsPageThree();
    const pageFour = await allShipsPageFour();
    
    const shipList = [...pageOne.results, ...pageTwo.results, ...pageThree.results, ...pageFour.results]
    this.setState({
      starshipList: shipList
    });
  }

  
  render() {
    console.log("in render")
    console.log(this.state.starshipList);
    return (
      <div className="App">
        <header className="App-header">
          Star Wars API
        </header>
        <Starships 
          starshipList={this.state.starshipList} 
        />
      
      </div>
    );
  }
  
}

export default App;
