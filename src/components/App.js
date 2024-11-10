import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch plants data from backend when the component mounts
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  // Function to add a new plant
  const addPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  // Function to update plant details
  const updatePlant = (updatedPlant) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === updatedPlant.id ? updatedPlant : plant
      )
    );
  };

  // Function to delete a plant
  const deletePlant = (id) => {
    setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id));
  };

  // Filter plants based on search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={filteredPlants}
        onAddPlant={addPlant}
        onUpdatePlant={updatePlant}
        onDeletePlant={deletePlant}
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
      />
    </div>
  );
}

export default App;
