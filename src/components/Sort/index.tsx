import { useState } from "react";
import { Sorts } from "../../reducers/sortReducer";

import "./sort.css";

type sortProps = {
  handleSort: (name: Sorts) => void;
};

const Sort = ({ handleSort }: sortProps) => {
  const [checked, setChecked] = useState<string>("all");

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setChecked(name);
    handleSort(name as Sorts);
  };

  return (
    <div className="sort">
      Sort:
      <ul>
        <li>
          <input
            type="radio"
            id="sort-chrono"
            name="chrono"
            onChange={handleCheck}
            checked={checked === "chrono"}
          />
          <label htmlFor="filter-chrono">by date descending</label>
        </li>
        <li>
          <input
            type="radio"
            id="filter-chronoR"
            name="chronoR"
            onChange={handleCheck}
            checked={checked === "chronoR"}
          />
          <label htmlFor="filter-chronoR">by date ascending</label>
        </li>
        <li>
          <input
            type="radio"
            id="filter-alpha"
            name="alpha"
            onChange={handleCheck}
            checked={checked === "alpha"}
          />
          <label htmlFor="filter-alpha">by city name descending</label>
        </li>
        <li>
          <input
            type="radio"
            id="filter-alphaR"
            name="alphaR"
            onChange={handleCheck}
            checked={checked === "alphaR"}
          />
          <label htmlFor="filter-alphaR">by city name ascending</label>
        </li>
      </ul>
    </div>
  );
};

export default Sort;
