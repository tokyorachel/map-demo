import { Helmet } from "react-helmet-async";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  MapConsumer,
} from "react-leaflet";

import { violetIcon } from "../../data/icons";

import { coordinate } from "../MapUI";

import "./leaflet.css";

type LeafletProps = {
  pinLocation: coordinate;
  title: string;
  desc: string;
};

const Leaflet = ({ pinLocation, title, desc }: LeafletProps) => {
  const position: coordinate = pinLocation ? pinLocation : [0, 0];

  return (
    <div className="leaflet-map">
      <Helmet>
        <title>Leaflet Section</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          crossOrigin=""
        ></script>
      </Helmet>
      <MapContainer center={position} zoom={4} scrollWheelZoom={true}>
        <MapConsumer>
          {(map) => {
            map.setView(position, 4);
            return null;
          }}
        </MapConsumer>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={violetIcon} position={position}>
          <Popup>
            <article>
              <h1>{title}</h1>
              <p>{desc}</p>
            </article>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Leaflet;
