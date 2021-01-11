import { ILocations } from "../data/locations";

export type Sorts = "chrono" | "chronoR" | "alpha" | "alphaR";

type Action = {
  type: Sorts;
};

const reducer = (state: ILocations, action: Action): ILocations => {
  const sortable = Object.entries(state);

  switch (action.type) {
    case "chrono":
      return {
        ...Object.fromEntries(
          sortable.sort(([, a], [, b]) => a.order - b.order)
        ),
      };
    case "chronoR":
      return {
        ...Object.fromEntries(
          sortable.sort(([, a], [, b]) => b.order - a.order)
        ),
      };
    case "alpha":
      return {
        ...Object.fromEntries(
          sortable.sort(([, a], [, b]) => a.city.localeCompare(b.city))
        ),
      };
    case "alphaR":
      return {
        ...Object.fromEntries(
          sortable.sort(([, a], [, b]) => b.city.localeCompare(a.city))
        ),
      };
    default:
      throw new Error();
  }
};

export default reducer;
