import React, { useState, useEffect, useRef } from 'react';
import './Gallery.css';
import p11 from '../assets/pictures/11.jpg';
import p12 from '../assets/pictures/12.jpg';
import p13 from '../assets/pictures/13.jpg';
import p14 from '../assets/pictures/14.jpg';
import p15 from '../assets/pictures/15.jpg';
import p16 from '../assets/pictures/16.jpg';
import p17 from '../assets/pictures/17.jpg';
import p18 from '../assets/pictures/18.jpg';

function Gallery() {
  const [x, setX] = useState(0);
  const imageContainerRef = useRef(null);

  const handlePrevClick = () => {
    setX((prevX) => prevX + 45);
  };

  const handleNextClick = () => {
    setX((prevX) => prevX - 45);
  };

  useEffect(() => {
    const updateContainer = () => {
      const imageContainerEl = imageContainerRef.current;

      if (imageContainerEl) {
        imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
      }
    };

    updateContainer();
  }, [x]);

  return (
    <div>
      <div className="image-container" ref={imageContainerRef}>
        <span style={{ '--i': 1 }}>
          <img src={p11} alt="1" />
        </span>
        <span style={{ '--i': 2 }}>
          <img src={p12} alt="2" />
        </span>
        <span style={{ '--i': 3 }}>
          <img src={p13} alt="3" />
        </span>
        <span style={{ '--i': 4 }}>
          <img src={p14} alt="4" />
        </span>
        <span style={{ '--i': 5 }}>
          <img src={p15} alt="5" />
        </span>
        <span style={{ '--i': 6 }}>
          <img src={p16} alt="6" />
        </span>
        <span style={{ '--i': 7 }}>
          <img src={p17} alt="7" />
        </span>
        <span style={{ '--i': 8 }}>
          <img src={p18} alt="8" />
        </span>
      </div>
      <div className="buttons">
        <button className="btn prev" onClick={handlePrevClick}>
          Previous
        </button>
        <button className="btn next" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Gallery;
