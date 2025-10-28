import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
//make sure to import the css for the leaf
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import heartImg from "../assets/heart.png";
const MyMap = () => {
  const heartIcon = new Icon({
    iconUrl: heartImg,
    iconSize: [25, 40],
  });

  return (
    <div className="map-page">
      <MapContainer center={[31, -95.75]} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[31, -95.75]} icon={heartIcon}>
          <Popup>Here is the cool popup</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
export default MyMap;
