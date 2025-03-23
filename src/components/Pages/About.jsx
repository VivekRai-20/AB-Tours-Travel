import React from "react";
import "./About.css";
import Custom from "../Custom/Custom"
import PopularTours from "../Popular/Popular";

const About = () => {
  return (
    <div>
    <div className="about-container">
      <h1>AB Tours & Travels in Dwarka, Nashik</h1>
      <p>
        AB Tours & Travels in Dwarka, Nashik is a premier transportation company
        that has been providing top-notch solutions to meet diverse client
        needs. The company’s commitment to excellence, passion for customer
        service, and continuous improvement have earned them an impressive 5.0
        rating based on 1 review, reflecting their dedication to quality and
        reliability.
      </p>

      <h2>Overview</h2>
      <p>
        The company offers a wide range of vehicles to suit every travel need.
        Their diverse fleet ensures they can accommodate any group size or
        travel requirement, ensuring comfort and satisfaction.
      </p>

      <h2>Vehicle Segments</h2>
      <p>AB Tours & Travels specializes in offering:</p>
      <ul>
        <li>
          <strong>Sedans:</strong> Perfect for corporate events, airport
          transfers, and city tours. Comfortable ride with ample legroom and
          luggage space.
        </li>
        <li>
          <strong>SUVs:</strong> Ideal for large groups or families needing
          extra space.
        </li>
        <li>
          <strong>Tempo Travelers:</strong> Suitable for school trips, family
          vacations, or corporate outings.
        </li>
        <li>
          <strong>Buses:</strong> Best for large groups or events.
        </li>
      </ul>

      <h2>Seating Capacity</h2>
      <p>
        The company prioritizes space and comfort with a variety of vehicles,
        ideal for traveling with family, friends, or colleagues of any group
        size.
      </p>

      <h2>Commitment</h2>
      <p>
        AB Tours & Travels aims to provide more than just transportation; they
        deliver exceptional experiences exceeding expectations. Their dedicated
        team assists in selecting the right vehicle, ensuring a safe,
        comfortable, and memorable journey.
      </p>

      <h2>Summary</h2>
      <p>
        AB Tours & Travels offers a variety of vehicles to suit different
        segments. Their commitment to excellence and passion for customer
        service ensure quality and reliability. The dedicated team is ready to
        assist in selecting the right vehicle for your needs.
      </p>

      <h2>Frequently Asked Questions</h2>
      <ul>
        <li>
          <strong>Can I rent a car for a few weeks?</strong> Yes, but this
          service may vary from one car rental company to another.
        </li>
        <li>
          <strong>Do car rental companies provide a driver with a car?</strong>
          Yes, but this service may vary. It’s advisable to call the company
          ahead.
        </li>
        <li>
          <strong>Will I have to pay for any damage while in possession?</strong>
          Yes, you would need to pay for any damages.
        </li>
        <li>
          <strong>Where is the office of AB Tours & Travels in Dwarka?</strong>
          Near INOX Theater.
        </li>
        <li>
          <strong>What are the operating hours?</strong> Open 24/7.
        </li>
        <li>
          <strong>Do they have different types of cars available?</strong> Yes,
          including SUVs and Sedans.
        </li>
        <li>
          <strong>Can I hire a car for a weekend trip?</strong> Yes, but it’s
          advised to call in advance.
        </li>
      </ul>
    </div>
    <PopularTours/>
    <Custom/>
    </div>
  );
};

export default About;
