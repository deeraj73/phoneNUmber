import React from 'react';
import './styles.css'
import imageSrc1 from '../Images/22344060.jpg';
import imageSrc2 from '../Images/34190040.jpg';


function LastPage() {
  return (
    <html>
      <head>
        <title>Profile Selection</title>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body>
        <header></header>
        <main>
          <h2>Please select your profile</h2>
          <div className="radio-buttons">
            <label htmlFor="option1">
              <input type="radio" id="option1" name="choice" value="option1" />
              <img src={imageSrc2} alt="" /> Shipper
            </label>
            <br />
            <label htmlFor="option2">
              <input type="radio" id="option2" name="choice" value="option2" />
              <img src={imageSrc1} alt="" /> Transporter
            </label>
          </div>
          <br />
          <button className="continue-button" type="submit">
            CONTINUE
          </button>
        </main>
        <footer></footer>
      </body>
    </html>
  );
}

export default LastPage;
