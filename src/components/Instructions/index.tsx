import { Helmet } from "react-helmet-async";

const Instructions = () => {
  return (
    <div>
      <Helmet>
        <title>Instructions</title>
      </Helmet>
      <h1>Instructions</h1>
      <p>Click on a locations in the list to move the map marker.</p>
      <p>Click on a marker on the map to learn more about the location.</p>
      <p>Use the radio buttons to filter the locations displayed.</p>
    </div>
  );
};

export default Instructions;
