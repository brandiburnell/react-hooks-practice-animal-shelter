import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function handleFilter(newType) {
    setFilters({ type: newType});
  }

  function handleFindPets() {
    let fetchUrl;

    if (filters.type === "cat") {
      fetchUrl = "http://localhost:3001/pets?type=cat"
    }
    else if (filters.type === "dog") {
      fetchUrl = "http://localhost:3001/pets?type=dog"
    }
    else if (filters.type === "micropig") {
      fetchUrl = "http://localhost:3001/pets?type=micropig"
    }
    else {
      fetchUrl = "http://localhost:3001/pets";
    }

    fetch(`${fetchUrl}`)
      .then(r => r.json())
      .then(petsFetched => setPets(petsFetched));
  }

  function handleAdopt(id) {
    console.log(id);
    const updatedPets = pets.map(pet => {
      if (pet.id === id) {
        pet.isAdopted = true;
        return pet;
      }
      else {
        return pet;
      }
    });

    setPets(updatedPets);
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
              onChangeType={handleFilter} 
              onFindPetsClick={handleFindPets}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser 
              pets={pets}
              onAdoptPet={handleAdopt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;