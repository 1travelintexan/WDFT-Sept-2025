function Footer(props) {
  //with desturcturing
  //   const { name } = props.onePet;
  return (
    <footer>
      <p>Special Thanks to {props.onePet.name} </p>
    </footer>
  );
}
export default Footer;
