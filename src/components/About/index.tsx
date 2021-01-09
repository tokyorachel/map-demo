import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About this project</title>
      </Helmet>
      <h1>About</h1>
      <p>
        This is a demo app using Leaflet and React to build an interactive map.
      </p>
    </div>
  );
};

export default About;
