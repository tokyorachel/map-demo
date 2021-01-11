import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About this project</title>
      </Helmet>
      <h1>About</h1>
      <p>
        This is a demo app using Leaflet and React to build an interactive map
        that tells a story, my story over several decades.
      </p>
      <p>
        It documents my life's journey, from birth to the present day, but only
        in a very general sense. Truth and fiction blend in this timeline. Some
        things are true, but did not occur when and where they are said to have
        occurred here. Other things may not have happened, but perhaps I wish
        that they would have?
      </p>
      <p>
        The technologies used are fairly simple as this is only a rapid
        prototype, but the power of React and Leaflet combined made it
        surprisingly easy to get this up and running. There are undoubtedly ways
        to improve. Unit testing, for example. Third party libraries may have
        more efficient sorting algorithms. Code-splitting or server-side
        rendering if there were more pieces to the app. And of course, the data
        structure might be very differently orgranized if coming from a database
        and API rather than some inline js.
      </p>
      <p>
        Advantages are that it's fairly performant: lighthouse scores are good
        for only very limited optimization. Minimally responsive and can be used
        on a mobile device. And most importantly, tells the story it was meant
        to tell.
      </p>
      <p>Thanks for checking it out,</p>
      <p>
        <a href="https://github.com/tokyorachel/map-demo">@tokyorachel</a>
      </p>
    </div>
  );
};

export default About;
