import React from 'react';
import './MapEmbed.css';

const MapEmbed = () => {
  return (
    <div className="map-container">
      <h3>📍 Find Us on the Map</h3>
      <iframe
        title="CozyWay PG Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.0172398455185!2d76.3307426751895!3d32.2190420111841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b513afcdfc9df%3A0xabc5d5edb0fd2819!2sDharamshala%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1718025378545!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0, borderRadius: '10px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
