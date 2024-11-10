import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({
  plants,
  onAddPlant,
  onUpdatePlant,
  onDeletePlant,
  searchQuery,
  onSearch,
}) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search query={searchQuery} onSearch={onSearch} />
      <PlantList
        plants={plants}
        onUpdatePlant={onUpdatePlant}
        onDeletePlant={onDeletePlant}
      />
    </main>
  );
}

export default PlantPage;
