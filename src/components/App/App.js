import React from 'react';
import './App.css';
import { AppHeader } from '../Header/AppHeader';
import { RandomPlanet } from '../RandomPlanet/RandomPlanet';
import { PersonDetails } from '../PersonDetails/PersonDetails';
import { ItemList } from '../ItemList/ItemList';
import back from "../../media/background-info.png";

export const App = () => {

  const style = {
    background : `url(${back})`
  }

  return (
    <div className="App">
      <div className="App-content" style={ style }>
        <AppHeader />
        <RandomPlanet />
        <ItemList />
        <PersonDetails />
      </div>
    </div>
  );
}
