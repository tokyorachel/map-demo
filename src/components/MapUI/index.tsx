import { useCallback, useEffect, useReducer, useState } from "react";
import Leaflet from "../Leaflet";
import PlaceList from "../PlaceList";
import Filter from "../Filter";
import Sort from "../Sort";
import LOCATIONS from "../../data/locations";
import { filterByType } from "../../utilities/filter";

import sortReducer, { Sorts } from "../../reducers/sortReducer";

import "./map-ui.css";

export type Filters = "all" | "professional" | "education" | "enrichment";
export type coordinate = [number, number] | null | undefined;

const initialSort: Sorts = "chrono";
const initialFilter: Filters = "all";

const MapUI = () => {
  const [coords, setCoords] = useState<coordinate>();
  const [locationId, setLocationId] = useState<string>("");
  const [filterType, setFilterType] = useState<Filters>(initialFilter);
  const [places, setPlaces] = useState(LOCATIONS);

  const [sorted, dispatchSort] = useReducer(sortReducer, LOCATIONS);

  useEffect(() => {
    const filtered = filterByType(sorted, filterType);
    setPlaces(filtered);
  }, [sorted, filterType]);

  useEffect(() => {
    dispatchSort({ type: initialSort });
  }, []);

  const updateFiltered = (filter: Filters = "all") => {
    setFilterType(filter);
  };

  const updateSort = (sort: Sorts = "chrono") => {
    dispatchSort({ type: sort });
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
        <h2>(a somewhat true story)</h2>
        <Sort handleSort={updateSort} />
        {places && (
          <PlaceList
            places={Object.entries(places).map((item) => item[0])}
            handleSelect={updateLocation}
            active={locationId}
          />
        )}
        <Filter handleFilter={updateFiltered} />
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
