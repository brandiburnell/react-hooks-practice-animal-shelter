import React from "react";
import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  const petComponents = pets.map(pet => {
    return (
      <Pet
        name={pet.name}
        type={pet.type}
        gender={pet.gender}
        age={pet.age}
        isAdopted={pet.isAdopted}
        id={pet.id}
        key={pet.id}
        weight={pet.weight}
        onAdoptPet={onAdoptPet}
      />
    );
  });

  return <div className="ui cards">{petComponents}</div>;
}

export default PetBrowser;