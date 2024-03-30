import React from 'react';
import './Banner.css';

 // Import the CSS file containing styles

const Banner = () => {
  const width = 50; // Width in pixels

  return (
    <div className="scene">
      <div className="banner">
        {Array.from({ length: 24 }).map((_, index) => (
          <div
            key={index}
            className="panel"
            style={{
              '--left': `${width * index * -1}px`,
              '--hue': `${360 / 24 * index}`,
              '--angle': `${360 / 24 * index}deg`
            }}
          >
            <span>kaif. shaikh. siddiyue</span>
          </div>
        ))}
      </div>
      <div className="screen"></div>
    </div>
  );
};

export default Banner;
