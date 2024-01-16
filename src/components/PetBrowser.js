import React from "react";
import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  const petComponents = pets.map(pet => {
    return (
      <Pet
        onAdoptPet={onAdoptPet}
        pet={pet}
      />
    );
  });

  return <div className="ui cards">{petComponents}</div>;
}

export default PetBrowser;