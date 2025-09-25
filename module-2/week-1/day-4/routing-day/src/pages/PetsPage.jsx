import { Link } from "react-router-dom";

export const PetsPage = ({ petState }) => {
  console.log(petState);
  return (
    <div>
      <h2>All the Pets</h2>
      <div id="pets-container">
        {petState.map((onePet) => {
          return (
            <div className="pet-card" key={onePet.id}>
              <img src={onePet.picture} alt={onePet.name} />
              <Link to={`/one-pet/${onePet.id}`}>
                <h4>{onePet.name}</h4>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
