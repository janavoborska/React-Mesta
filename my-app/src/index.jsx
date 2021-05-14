import React from 'react';
import { render } from 'react-dom';
import './style.css';
import City from './City';
import { cities } from './cz-cities';

/*const cities = [
  'Praha',
  'Brno',
  'Ostrava',
  'Plzeň',
  'Liberec',
  'Olomouc',
  'České Budějovice',
  'Hradec Králové',
  'Ústí nad Labem',
  'Pardubice',
];


const cityElements = cities.map((city) => {
  return <div className="city" >{city}</div>;
});
const App = () => <div className="container">{cityElements}</div>;


const App = () => (
  <div className="container">
    {cities.map((city) => (
      <div className="city" key={city}>
        {city}
      </div>
    ))}
  </div>
);
*/

/*
const cities = [
  {
    name: 'Praha',
    population: 1324277,
    area: 496.21,
  },
  {
    name: 'Brno',
    population: 381346,
    area: 230.18,
  },
  {
    name: 'Ostrava',
    population: 287968,
    area: 214.23,
  },
  {
    name: 'Plzeň',
    population: 174842,
    area: 137.67,
  },
  {
    name: 'Liberec',
    population: 104802,
    area: 106.09,
  },
  {
    name: 'Olomouc',
    population: 100663,
    area: 103.33,
  },
  {
    name: 'České Budějovice',
    population: 94463,
    area: 55.6,
  },
  {
    name: 'Hradec Králové',
    population: 92939,
    area: 105.69,
  },
  {
    name: 'Ústí nad Labem',
    population: 92716,
    area: 93.97,
  },
  {
    name: 'Pardubice',
    population: 91727,
    area: 82.66,
  },
];


const App = () => (
  <div className="container">
    {cities.map((city) => (
      <div
        className="city"
        key={city.name}
        obyvatel={city.population}
        rozloha={city.area}
      >
        <span style={{ marginLeft: '10px', color: 'red' }}>{city.name}</span>
        <span style={{ marginLeft: '10px', color: 'blue' }}>
          {city.population}
        </span>
        <span style={{ marginLeft: '10px', color: 'green' }}>{city.area}</span>
        <hr />
      </div>
    ))}
  </div>
);
*/

/*
Vytvořte komponentu City, jejímž úkolem bude zobrazovat jedno město. Tato kompnenta bude mít props name, population a area. Použijte komponentu k zobrazení každého města ze seznamu.
Pro komponentu City vytvořte vlastní složku a komponentu malinko nastylujte, aby vypadala hezky.


const cities = [
  {
    name: 'Praha',
    population: 1324277,
    area: 496.21,
  },
  {
    name: 'Brno',
    population: 381346,
    area: 230.18,
  },
  {
    name: 'Ostrava',
    population: 287968,
    area: 214.23,
  },
  {
    name: 'Plzeň',
    population: 174842,
    area: 137.67,
  },
  {
    name: 'Liberec',
    population: 104802,
    area: 106.09,
  },
  {
    name: 'Olomouc',
    population: 100663,
    area: 103.33,
  },
  {
    name: 'České Budějovice',
    population: 94463,
    area: 55.6,
  },
  {
    name: 'Hradec Králové',
    population: 92939,
    area: 105.69,
  },
  {
    name: 'Ústí nad Labem',
    population: 92716,
    area: 93.97,
  },
  {
    name: 'Pardubice',
    population: 91727,
    area: 82.66,
  },
];
*/

const App = () => (
  <div className="container">
    {cities.map((city) => (
      <City
        key={city.name}
        name={city.name}
        population={city.population}
        area={city.area}
        district={city.district}
        photo={city.photo}
      />
    ))}
  </div>
);

render(<App />, document.querySelector('#app'));
