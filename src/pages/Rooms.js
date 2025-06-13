import React from 'react';
import './Rooms.css';
// Import your images
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg"; // Example additional rooms
import room3 from "../assets/room3.jpg";
import room4 from "../assets/room4.jpg";
import room5 from "../assets/room5.jpg";
import room6 from "../assets/room6.jpg";

const Rooms = () => {
  const roomTypes = [
    {
      name: "Shared Room",
      price: "₹3000/month",
      image: room1 // Using the imported image
    },
    {
      name: "Standard Room",
      price: "₹5000/month",
      image: room2
    },
    {
      name: "Deluxe Room",
      price: "₹7000/month",
      image: room3
    },
    {
      name: "Deluxe Room",
      price: "₹7000/month",
      image: room4
    },
    {
      name: "SingleRoom",
      price: "₹5000/month",
      image: room5
    },
    {
      name: "Single Room",
      price: "₹5000/month",
      image: room6
    }
  ];

  return (
    <div className="rooms-container">
      <h1 className="section-title">Available Rooms</h1>
      
      <div className="room-list">
        {roomTypes.map((room, index) => (
          <div 
            key={index} 
            className="room-card"
            style={{ 
              backgroundImage: `url(${room.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="room-overlay">
              <h2 className="room-name">{room.name}</h2>
              <p className="room-price">{room.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;