import React from "react";
import PlantCard from "./PlantCard";

// Accept plants as a prop from App.js
function PlantList({ plants, onUpdatePlant, onDeletePlant }) {
  return (
    <ul className="cards">
      {/* Map through the plants array and render a PlantCard for each plant */}
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}             // Key for React's list rendering
          plant={plant}               // Pass each plant's data to PlantCard
          onUpdatePlant={onUpdatePlant}  // Pass the update function to PlantCard
          onDeletePlant={onDeletePlant}  // Pass the delete function to PlantCard
        />
      ))}
    </ul>
  );
}

export default PlantList;
