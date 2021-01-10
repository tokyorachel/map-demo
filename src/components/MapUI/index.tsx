import { useCallback, useState } from "react";
import Leaflet from "../Leaflet";
import PlaceList from "../PlaceList";
import Filters from "../Filters";
import LOCATIONS from "../../data/locations";
import { sortByChronological, filterByType } from "../../utilities/sort";

import "./map-ui.css";

export type coordinate = [number, number] | null | undefined;

const MapUI = () => {
  const [coords, setCoords] = useState<coordinate>();
  const [locationId, setLocationId] = useState<string>("");
  const [sorted, setSorted] = useState(sortByChronological(LOCATIONS));

  const updateFiltered = (id: string) => {
    if (id === "all") {
      setSorted(sortByChronological(LOCATIONS));
    } else {
      setSorted(filterByType(LOCATIONS, id));
    }
  };

  const updateLocation = useCallback((location: string) => {
    setLocationId(location);
    const newCoords: coordinate = LOCATIONS[location].coords;
    setCoords(newCoords);
  }, []);

  return (
    <div className="map-ui">
      <div>
        <h1>A Developer's Life Journey</h1>
        <h2>(a mostly true story)</h2>
        <PlaceList
          places={sorted}
          handleSelect={updateLocation}
          active={locationId}
        />
        <Filters handleFilter={updateFiltered} />
      </div>
      {locationId && (
        <Leaflet
          pinLocation={coords}
          title={LOCATIONS[locationId].title}
          desc={LOCATIONS[locationId].description}
        />
      )}
    </div>
  );
};

export default MapUI;
