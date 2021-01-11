import { useState } from "react";

type filterProps = {
  handleFilter: (name: string) => void;
};

const Filters = ({ handleFilter }: filterProps) => {
  const [checked, setChecked] = useState<string>("all");

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setChecked(name);
    handleFilter(name);
  };

  return (
    <div>
      Type:
      <input
        type="radio"
        id="filter-all"
        name="all"
        onChange={handleCheck}
        checked={checked === "all"}
      />
      <label htmlFor="filter-all">All</label>
      <input
        type="radio"
        id="filter-education"
        name="education"
        onChange={handleCheck}
        checked={checked === "education"}
      />
      <label htmlFor="filter-education">Education</label>
      <input
        type="radio"
        id="filter-professional"
        name="professional"
        onChange={handleCheck}
        checked={checked === "professional"}
      />
      <label htmlFor="filter-professional">professional</label>
      <input
        type="radio"
        id="filter-enrichment"
        name="enrichment"
        onChange={handleCheck}
        checked={checked === "enrichment"}
      />
      <label htmlFor="filter-enrichment">enrichment</label>
    </div>
  );
};

export default Filters;
