import { useParams } from "react-router-dom";

export const PetDetailPage = ({ petState }) => {
  //this hook will grab parameters from the URL
  const { petId } = useParams();
  // const [petDetail, setPetDetail] = useState()
  //find the pet in the array with the same id
  const theOneSpecialPet = petState.find((pet) => {
    if (pet.id === Number(petId)) {
      return true;
    }
  });
  console.log(petId, petState, theOneSpecialPet);
  return (
    <div>
      <h2>{theOneSpecialPet.name}'s Details page</h2>
      <img
        src={theOneSpecialPet.picture}
        alt={theOneSpecialPet.name}
        style={{ height: "500px" }}
      />
      <h3>Age: {theOneSpecialPet.age}</h3>
      <h3>Type: {theOneSpecialPet.type}</h3>
      <h3>Premium: {theOneSpecialPet.premiumPet ? "yes sir" : "Nope"}</h3>
    </div>
  );
};
