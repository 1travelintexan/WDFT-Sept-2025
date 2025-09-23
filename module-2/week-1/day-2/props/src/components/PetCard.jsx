const PetCard = (props) => {
  console.log(props);
  const { picture, name, age } = props.onePet;
  return (
    <div id="pet-card">
      <img src={picture} />
      <h3>Pet Name: {name} </h3>
      <h3>Pet Age: {age} </h3>
    </div>
  );
};
export default PetCard;
