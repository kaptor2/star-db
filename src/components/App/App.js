import React from 'react';
import './App.css';
import { AppHeader } from '../Header/AppHeader';
import { RandomPlanet } from '../RandomPlanet/RandomPlanet';
import { PersonDetails } from '../PersonDetails/PersonDetails';
import { ItemList } from '../ItemList/ItemList';

export const App = () => {
  return (
    <div className="App">
      <div className="App-content">
        <AppHeader />
        <RandomPlanet />
        <ItemList />
        <PersonDetails />
      </div>
    </div>
  );
}
