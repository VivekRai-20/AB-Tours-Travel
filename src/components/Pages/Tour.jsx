import React from "react";
import { useParams } from "react-router-dom";
import TourDisplay from "../TourDisplay/TourDisplay";
import nashikData from "../Assets/naashik";
import mumbaiData from "../Assets/mumbai";
import puneData from "../Assets/pune";
import popular from "../Assets/popular";
import Custom from "../Custom/Custom"
import PopularTours from "../Popular/Popular";

const Tour = () => {
  const { id } = useParams(); // Fix: Change TourId to id

  // Combine all data into one array
  const allTours = [...nashikData, ...mumbaiData, ...puneData, ...popular];

  // Fix: Convert id to string for comparison
  const tour = allTours.find((t) => String(t.id) === id);

  // If tour is not found, show error message
  if (!tour) {
    return <h2 className="error-message">Tour Not Found</h2>;
  }

  return (
    <div>
      <TourDisplay tour={tour} />
      <PopularTours/>
      <Custom/>
    </div>
  );
};

export default Tour;
