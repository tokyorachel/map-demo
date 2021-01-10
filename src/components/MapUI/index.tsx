import { useCallback, useState } from "react";
import Leaflet from "../Leaflet";
import PlaceList from "../PlaceList";
import LOCATIONS from "../../data/locations";

import "./map-ui.css";

export type coordinate = [number, number] | null | undefined;

const MapUI = () => {
  const [coords, setCoords] = useState<coordinate>();
  const [location, setLocationId] = useState<string>("");

  const updateLocation = useCallback((location: string) => {
    setLocationId(location);
    const newCoords: coordinate = LOCATIONS[location];
    setCoords(newCoords);
  }, []);

  return (
    <div className="map-ui">
      <div>
        <h1>A Developer's Life Journey</h1>
        <h2>(a mostly true story)</h2>
        <PlaceList handleSelect={updateLocation} active={location} />
      </div>
      <Leaflet pinLocation={coords} />
    </div>
  );
};

export default MapUI;
