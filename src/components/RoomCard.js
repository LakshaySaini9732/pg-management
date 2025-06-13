import React from 'react';
import './RoomCard.css';

const RoomCard = ({ name, price, description, features, image }) => {
  return (
    <div className="room-card">
      <img src={image} alt={name} className="room-image" />
      <h3>{name}</h3>
      <p className="room-price">{price}</p>
      <p className="room-description">{description}</p>
      <ul className="room-features">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoomCard;
