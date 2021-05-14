import React from 'react';
import './style.css';

const City = (props) => (
  <div className="container">
    <p className="name"> {props.name}</p>
    <p className="obyvatel">{props.population}</p>
    <p className="rozloha">{props.area}</p>
    <p className="okres">{props.district}</p>
    <img className="foto" src={props.photo} />
    <hr />
  </div>
);

/*
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

export default City;
