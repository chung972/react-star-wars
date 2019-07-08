import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { allShipsPageOne, allShipsPageTwo, allShipsPageThree, allShipsPageFour } from "./services/sw-api";
import StarshipPage from "./pages/StarshipPage/StarshipPage";


class App extends Component {

  state = {
    starshipList: []
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

  getStarship = (index) => {
    return this.state.starshipList[index];
  }



  render() {
    console.log(this.state.starshipList);
    return (
      <div className="App">
        <header className="App-header">
          Star Wars API
        </header>

        <Switch>
          <Route exact path='/'>
            <div>
              {this.state.starshipList && this.state.starshipList.map((starship, index) =>
                <div>
                  <Link
                    to={`/starships/${index}`}
                    key={index} 
                  >
                    {starship.name}
                  </Link>
                </div>
              )}
            </div>
          </Route>



          <Route path='/starships/:idx' render={(props) =>
            <StarshipPage
              {...props}
              getStarship={this.getStarship}
            />
          } />

        </Switch>

      </div>
    );
  }

}

export default App;
