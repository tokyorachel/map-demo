import { useEffect } from "react";

import LOCATIONS from "../../data/locations";

import "./place-list.css";

type PlaceListProps = {
  handleSelect: (location: string) => void;
  active: string;
};

const PlaceList = ({ handleSelect, active }: PlaceListProps) => {
  useEffect(() => {
    const id = Object.keys(LOCATIONS)[0];
    handleSelect(id);
  }, [handleSelect]);

  return (
    <div className="place-list">
      <ol>
        {Object.keys(LOCATIONS).map((location) => {
          return (
            <li key={location} className={location === active ? "active" : ""}>
              <button onClick={() => handleSelect(location)}>{location}</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default PlaceList;
