import React from "react";
import "./Home.css";
import Weather from "../components/WeatherWidget"; // ✅ Using the Weather component

// Import images from assets
import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpeg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.jpeg";
import gallery5 from "../assets/gallery5.jpeg";

import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";

// Nearby places images (example)
import place1 from "../assets/place1.jpeg";
import place2 from "../assets/place2.jpeg";
import place3 from "../assets/place3.jpeg";

const HomePage = () => {
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your review!");
  };

  return (
    <div className="homepage">
      <h1>Welcome to CozyWay PG</h1>
      <p>Your comfort is our priority.</p>

      {/* ✅ Weather Section */}
      <Weather />

      <h2>🖼 Gallery</h2>
      <div className="gallery">
        <img src={gallery1} alt="Gallery 1" />
        <img src={gallery2} alt="Gallery 2" />
        <img src={gallery3} alt="Gallery 3" />
        <img src={gallery4} alt="Gallery 4" />
        <img src={gallery5} alt="Gallery 5" />
      </div>

      <h2>🛏 Rooms</h2>
      <div className="rooms">
        <div className="room-card">
          <img src={room1} alt="Standard Room" />
          <h3>Standard Room</h3>
          <p>₹5000/month - Single Bed, Wardrobe, Table</p>
        </div>
        <div className="room-card">
          <img src={room2} alt="Deluxe Room" />
          <h3>Deluxe Room</h3>
          <p>₹8000/month - Double Bed, AC, Private Bathroom</p>
        </div>
        <div className="room-card">
          <img src={room3} alt="Deluxe Room" />
          <h3>Deluxe Room</h3>
          <p>₹8000/month - Double Bed, AC, Private Bathroom</p>
        </div>
      </div>

      {/* ✅ Nearby Places to Visit */}
      <h2>🌄 Nearby Places to Visit</h2>
      <div className="nearby-places">
        <div className="place-card">
          <img src={place1} alt="Bhagsu Waterfall" />
          <h3>Bhagsu Waterfall</h3>
          <p>One of the most famous and scenic waterfalls in Dharamshala.</p>
        </div>
        <div className="place-card">
          <img src={place2} alt="Triund Trek" />
          <h3>Triund Trek</h3>
          <p>Perfect for beginners, offering breathtaking views of the Dhauladhar range.</p>
        </div>
        <div className="place-card">
          <img src={place3} alt="Dalai Lama Temple" />
          <h3>Dalai Lama Temple</h3>
          <p>A peaceful and spiritual temple located in McLeod Ganj.</p>
        </div>
      </div>

      <h2>📍 Find Us on the Map</h2>
      <div className="map-container">
        <iframe
          title="Dharamshala Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13457.590063444897!2d76.3105!3d32.219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b50d4f7f8f1cd%3A0xd15b4a9a3f2c850e!2sDharamshala%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1685544662931!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <h2>⭐ Leave a Review</h2>
      <form className="review-form" onSubmit={handleReviewSubmit}>
        <input type="text" placeholder="Your Name" required />
        <textarea placeholder="Write your review..." required></textarea>
        <label>
          Rating:
          <select>
            <option>⭐</option>
            <option>⭐⭐</option>
            <option>⭐⭐⭐</option>
            <option>⭐⭐⭐⭐</option>
            <option>⭐⭐⭐⭐⭐</option>
          </select>
        </label>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default HomePage;
