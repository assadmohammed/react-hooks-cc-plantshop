import React from "react";

function PlantCard({ plant, onUpdatePlant, onDeletePlant }) {
  const { id, name, image, price, soldOut } = plant;

  // Toggle sold out status
  const handleToggleSoldOut = () => {
    const updatedPlant = { ...plant, soldOut: !soldOut };
    onUpdatePlant(updatedPlant);
  };

  // Handle delete plant
  const handleDelete = () => {
    onDeletePlant(id);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button className={soldOut ? "" : "primary"} onClick={handleToggleSoldOut}>
        {soldOut ? "Out of Stock" : "In Stock"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
