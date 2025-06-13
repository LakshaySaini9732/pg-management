import React from 'react';
import './ImageCarousel.css';

import img1 from '../assets/gallery1.jpeg';
import img2 from '../assets/gallery2.jpeg';
import img3 from '../assets/gallery3.jpeg';
import img4 from '../assets/gallery4.jpeg';
import img5 from '../assets/gallery5.jpeg';
import img6 from '../assets/gallery6.jpg';
import img7 from '../assets/gallery7.jpg';
import img8 from '../assets/gallery8.jpg';
import img9 from '../assets/gallery9.jpg';
import img10 from '../assets/gallery10.jpg';
import img11 from '../assets/gallery11.jpeg';
import img12 from '../assets/gallery12.jpeg';
import img13 from '../assets/gallery13.jpeg';
import img14 from '../assets/gallery14.jpeg';
import img15 from '../assets/gallery15.jpeg';
import img16 from '../assets/gallery16.jpeg';
import img17 from '../assets/gallery17.jpeg';
import img18 from '../assets/gallery18.jpeg';
import img19 from '../assets/gallery19.jpeg';
import img20 from '../assets/gallery20.jpg';
import img21 from '../assets/gallery20.jpg';

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img10, img11, img12, img13, img14, img15 ,img16, img17,
  img18, img19, img20,img21
];

const ImageCardGallery = () => {
  return (
    <div className="image-gallery">
      {images.map((img, index) => (
        <div className="image-card" key={index}>
          <img src={img} alt={`Gallery ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageCardGallery;
