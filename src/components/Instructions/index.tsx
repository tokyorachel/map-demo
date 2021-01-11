import { Helmet } from "react-helmet-async";

const Instructions = () => {
  return (
    <div>
      <Helmet>
        <title>Instructions</title>
      </Helmet>
      <h1>Instructions</h1>
      <p>Click on a location in the list to move the map marker.</p>
      <p>
        Click on the tooltip to dismiss it. Click on the marker to make it
        reappear. The tooltip will also reappear when you change locations.
      </p>
      <p>Use the radio buttons to filter the locations displayed.</p>
    </div>
  );
};

export default Instructions;
