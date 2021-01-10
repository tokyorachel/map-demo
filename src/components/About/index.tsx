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
      <p>
        It documents in a very general sense, my life's journey, from birth to
        the present day, with some milestones along the way. Of course, I don't
        want my entire life on the internet, so don't believe everything you
        read here ;-)
      </p>
      <p>
        The technologies used are fairly simple as this is only a rapid
        prototype, but the power of React and Leaflet combined made it
        surprisingly easy to get this up and running. There are undoubtedly ways
        to improve.
      </p>
    </div>
  );
};

export default About;
