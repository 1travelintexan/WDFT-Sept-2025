export const PetCard = ({ pet, handleRemovePet }) => {
  return (
    <div className="pet-card">
      <img alt={pet.name} src={pet.picture} />
      <section>
        <h5>Pet Name: {pet.name}</h5>
        <h5>Pet Age: {pet.age}</h5>
        <h5>Pet Type: {pet.type === "Dog" ? "🐩" : "😾"}</h5>
        <h5>Premium: {pet.premiumPet && "🏆"}</h5>
      </section>
      <button
        onClick={() => {
          handleRemovePet(pet.id);
        }}
      >
        Remove
      </button>
    </div>
  );
};
