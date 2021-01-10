import { useEffect, useState } from "react";

import LOCATIONS from "../../data/locations";

import "./place-list.css";

type PlaceListProps = {
  handleSelect: (location: string) => void;
  places: string[];
  active: string;
};

const PlaceList = ({ handleSelect, places, active }: PlaceListProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = places[currentIndex];
    if (id) {
      handleSelect(id);
    } else {
      setCurrentIndex(0);
    }
  }, [handleSelect, places, currentIndex]);

  const handleAdvance = (dir: string) => {
    let newIndex;
    if (dir === "next") {
      newIndex = currentIndex + 1 < places.length ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : places.length - 1;
    }
    setCurrentIndex(newIndex);
  };

  return (
    <div className="place-list">
      {places && (
        <ol>
          {places.map((locationId) => {
            const { city, state, country } = LOCATIONS[locationId];
            return (
              <li
                key={locationId}
                className={locationId === active ? "active" : ""}
              >
                <button
                  onClick={() => handleSelect(locationId)}
                >{`${city}, ${state}, ${country}`}</button>
              </li>
            );
          })}
        </ol>
      )}
      <button onClick={() => handleAdvance("next")}>next</button>
      <button onClick={() => handleAdvance("back")}>previous</button>
    </div>
  );
};

export default PlaceList;
