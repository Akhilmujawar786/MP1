// AboutUs.js
import React from 'react';
import './Aboutus.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* <video autoPlay loop muted className="background-video">
        <source src={'C:\Users\Lenovo\OneDrive\Desktop\mp1\MP1\frontend\src\videos\videoplayback.mp4'} type="video/mp4" />
      </video> */}
      <div className="content">
      <h1 className="about-us-heading" style={{fontWeight: 'bold'}}>About the Application</h1>
        <div className="about-us-content">
          <ul>
            <li>Welcome to our website! We're dedicated to exploring urban environments and promoting sustainability.</li> <br></br>
            <li>Our project integrates innovative technologies with urban planning principles.</li> <br></br>
            <li>We empower individuals and communities to make informed decisions about their cities.</li> <br></br>
            <li>Core to our project is Conway's Game of Life, highlighting urban dynamics and sustainability.</li><br></br>
            <li>We provide real-time Air Quality Index (AQI) data for informed outdoor activities and health precautions.</li><br></br>
            <li>Our shortest path feature helps users plan eco-friendly travel routes, reducing environmental impact.</li><br></br>
            <li>Additionally, we track carbon footprints to raise awareness and encourage sustainable practices.</li><br></br>
            <li>Our team is committed to promoting sustainable urban planning for a greener future.</li><br></br>
            <li>Join us on our journey towards a more sustainable world!</li><br></br>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
