
import React from "react";
import "./solutions.css";
import Image from "next/image";
import itinerary from "./itinerary.png";
import deal from "./deal.png";
import budget from "./budget.png";
import calendar from "./calendar.png";
import travel from "./travel.png";
import transport from "./transportation.png";
export default (params) => {
  return (
    <React.Fragment>
      <div className="hero">
        <h1>Your Travel Planning Made Simple</h1>
        <p>Discover how our solutions solve your travel challenges.</p>
        <a href="#solutions" className="cta-button">
          Learn More
        </a>
      </div>

      <div id="solutions" className="solutions">
        <div className="solution-card">
          <Image src={itinerary} alt="Itinerary" width={50} height={50} />
          <h3>Custom Itinerary Planning</h3>
          <p>
            Design your perfect trip with ease using our drag-and-drop day
            planner, personalized recommendations, and seamless scheduling
            tools.
          </p>
        </div>
        <div className="solution-card">
          <Image src={deal} alt="Deals" width={50} height={50} />
          <h3>Find the Best Deals</h3>
          <p>
            Discover exclusive discounts on flights, hotels, and activities, all
            tailored to your budget and preferences.
          </p>
        </div>
        <div className="solution-card">
          <Image src={travel} alt="Group travel" width={50} height={50} />

          <h3>Coordinate Group Travel</h3>
          <p>
            Simplify group trips with shared itineraries, collaborative planning
            tools, and easy communication features.
          </p>
        </div>
      </div>

      <div className="features">
        <h2>Our Key Features</h2>
        <div className="feature-item">
          <Image src={calendar} alt="calendar" width={50} height={50} />

          <h3>Itinerary Planner</h3>
        </div>
        <div className="feature-item">
          <Image src={budget} alt="budget" width={50} height={50} />

          <h3>Budget Calculator</h3>
        </div>
        <div className="feature-item">
          <Image src={transport} alt="transport" width={50} height={50} />

          <h3>Transit Guides</h3>
        </div>
      </div>

      
      
    </React.Fragment>
  );
};
