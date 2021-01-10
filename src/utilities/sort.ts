import { ILocations } from "../data/locations";

const sortByChronological = (list: ILocations) => {
  const sortable = Object.entries(list);
  const sorted = sortable.sort(([, a], [, b]) => a.order - b.order);
  return sorted.map((item) => item[0]);
};

const filterByType = (list: ILocations, type: string) => {
  const filtered = Object.entries(list).filter(
    ([, item]) => item.type === type
  );
  return filtered.map((item) => item[0]);
};

export { sortByChronological, filterByType };
