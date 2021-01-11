import { ILocations } from "../data/locations";

const filterByType = (list: ILocations, type: string) => {
  if (type === "all") {
    return list;
  }
  const filtered = Object.entries(list).filter(
    ([, item]) => item.type === type
  );
  return Object.fromEntries(filtered);
};

export { filterByType };
