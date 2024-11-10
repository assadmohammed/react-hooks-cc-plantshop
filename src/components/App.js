import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  
  const addPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  
  const updatePlant = (updatedPlant) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === updatedPlant.id ? updatedPlant : plant
      )
    );
  };

  
  const deletePlant = (id) => {
    setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id));
  };

  
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
