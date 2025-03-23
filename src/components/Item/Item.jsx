import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, image, name, city, category, rating }) => {
  return (
    <div className="item">
      <Link to={`/tour/${id}`} onClick={() => window.scrollTo(0, 0)}>
        <img src={image || '/placeholder.svg'} alt={name} />
      </Link>
      <p className="tour-name">{name}</p>
      <p className="tour-city">{city}</p>
      <p className="tour-category">{category}</p>
      <div className="tour-rating">⭐ {rating}</div>

      {/* More Info Button (Passes ID in URL) */}
      <Link to={`/tour/${id}`} onClick={() => window.scrollTo(0, 0)}>
        <button className="more-info-btn">More Info</button>
      </Link>
    </div>
  );
};

export default Item;
