import React from "react";

function Pet({ name, type, gender, age, weight, isAdopted, id, onAdoptPet}) {

  function handleAdopt() {
    onAdoptPet(id);
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender === "male"? "♂" : "♀"}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted === true? 
          <button className="ui disabled button">Already adopted</button>
          :
          <button onClick={handleAdopt}className="ui primary button">Adopt pet</button>}
      </div>
    </div>
  );
}

export default Pet;