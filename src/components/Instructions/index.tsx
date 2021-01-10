import { Helmet } from "react-helmet-async";

const Instructions = () => {
  return (
    <div>
      <Helmet>
        <title>Instructions</title>
      </Helmet>
      <h1>Instructions</h1>
      <p>Click on a locations in the list to move the map marker.</p>
    </div>
  );
};

export default Instructions;
