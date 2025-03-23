import React from 'react';
import "./Pune.css"
import tourData from '../Assets/pune'; // Importing tour data
import Item from "../Item/Item"; // Reusing Item component

const Pune = () => {
  return (
    <div className='popular-tours'> 
      <h1>POPULAR IN PUNE</h1>
      <hr />
      <div className="tours-container">
        {tourData.map((tour, index) => {
          return (
            <Item 
              key={index}
              id={tour.id}
              name={tour.name}
              image={tour.image}
              category={tour.category}
              rating={tour.rating}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Pune;
