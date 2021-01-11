export interface ILocation {
  city: string;
  state: string;
  country: string;
  title: string;
  type: string;
  order: number;
  description: string;
  coords: [number, number];
}

export interface ILocations {
  [id: string]: ILocation;
}

const LOCATIONS: ILocations = {
  UCB: {
    city: "Berkeley",
    state: "CA",
    country: "USA",
    title: "Undergraduate education",
    type: "education",
    order: 1988,
    description:
      "Ready to learn and grow beyond the confines of the so-called Valley of the Sun, our adventurer left the desert to attend college in northern California. Here she was excited, and even a little overwhelmed at all the possibilities. Hardware, software, literature, and history all competed for her attention.",
    coords: [37.871593, -122.272743],
  },
  TEMPE: {
    city: "Tempe",
    state: "AZ",
    country: "USA",
    title: "Hello world",
    type: "birth",
    order: 1965,
    description:
      "This is where our intrepid adventurer's story begins, one rainy Saturday morning, a long time ago.",
    coords: [33.425522, -111.941254],
  },
  GS: {
    city: "Phoenix",
    state: "AZ",
    country: "USA",
    title: "Elementary school",
    type: "education",
    order: 1970,
    description:
      "Our adventurer was a bookworm in her early years; the school librarian knew her by name. But grade school also introduced her to a wider world, a world in which one could be immersed in games and learning using Apple II computers.",
    coords: [33.48935, -111.982],
  },
  BAND: {
    city: "Minnesota",
    state: "MN",
    country: "USA",
    title: "Resistance is futile",
    type: "enrichment",
    order: 2010,
    description:
      "Discontent with her day-to-day routine, our developer fled for a time to an even colder section of the American midwest, where she founded the punk band, Warp Core Malfunction. Their initial album, Resistance is Futile, sold 2161 copies.",
    coords: [44.977753, -93.265015],
  },
  HS: {
    city: "Glendale",
    state: "AZ",
    country: "USA",
    title: "High school",
    type: "education",
    order: 1980,
    description:
      "High school was a time for making lasting friendships, partly based on a shared dislike of the school's official uniform. She didn't realize it yet, but when our protagonist had to learn to build a website for an after-school club, she was building the  foundations of a life-long journey in exploring software development.",
    coords: [33.52396, -112.15344],
  },
  SALEM: {
    city: "Salem",
    state: "MA",
    country: "USA",
    title: "A research trip",
    type: "education",
    order: 1995,
    description:
      "Enamored of history, our story's hero began to dream of becoming a history professor. She journey to New England to better understand both the best and the worst of America's past.",
    coords: [42.52121, -70.89402],
  },
  MUNICH: {
    city: "Munich",
    state: "Bavaria",
    country: "Germany",
    title: "Language study",
    type: "education",
    order: 2001,
    description:
      "Ihr Deutsch ist jetz nicht sehr gut, aber sie mag Wießwurst und Bratkartoffeln.",
    coords: [48.13913, 11.58022],
  },
  UC: {
    city: "Chicago",
    state: "IL",
    country: "USA",
    title: "Graduate school",
    type: "education",
    order: 1999,
    description:
      "Our protagonist had decided to chase her ambitions of becoming a history professor. She packed her bag for that snowy Midwest megalopolis, Chicago and began graduate studies at the University of Chicago. She labored away there for many years, teaching and doing research while a PhD candidate in the History and Philosphy of Science.",
    coords: [41.792135, -87.599967],
  },
  BEACH: {
    city: "Santa Monica",
    state: "CA",
    country: "USA",
    title: "Secret software squirrel",
    type: "professional",
    order: 2006,
    description:
      "But software never left her. While in grad school, she would always make time to get away and recharge after long semesters of teaching by working on side projects: websites, Flash games, anything to grow her portfolio and keep learning about web engineering.",
    coords: [34.009717, -118.496514],
  },
  PILSEN: {
    city: "Chicago",
    state: "IL",
    country: "USA",
    title: "First full-time software job",
    type: "professional",
    order: 2008,
    description:
      "Eventually our protagonist knew that academic life was not meant to be. She left grad school, sad about what she was leaving behind, but also excited to give in to the calling that had been chasing her all this time. Software. She began working as a full-stack developer for a small healthcare company near Chicago's famous Loop.",
    coords: [41.856143, -87.672934],
  },
  MADISON: {
    city: "Madison",
    state: "WI",
    country: "USA",
    title: "Worlds collide",
    type: "professional",
    order: 2007,
    description:
      "History and software have always waged a war in our hero's heart. So she made a work of interactive fiction about the yellow fever epidemic in Philadelphia in 1793. The editors at the online journal The Appendix helper her bring it to a broader audience.",
    coords: [43.074457, -89.380029],
  },
  EVANSTON: {
    city: "Evanston",
    state: "IL",
    country: "USA",
    title: "Moving on up",
    type: "professional",
    order: 2012,
    description:
      "Our protagonist knew that there were still many ways to change the world. She hadn't quit her day job, but returned to it, invigorated with dream of using software to make the world a better, safe, and more accessible place for all.",
    coords: [41.948051, -87.655758],
  },
  WALL_STREET: {
    city: "New York",
    state: "NY",
    country: "USA",
    title: "Occupy Wall Street",
    type: "enrichment",
    order: 2011,
    description:
      "Our adventurer knew something was not right in the world. She joined the thousands amassed in New York, frustrated by the growing economic disparity in America and the rest of the world.",
    coords: [40.709094, -74.01099],
  },
  WELLESLEY: {
    city: "Wellesley",
    state: "MA",
    country: "USA",
    title: "Return to New England",
    type: "professional",
    order: 2017,
    description:
      "In late 2017, opportunity knocked. Our developer was offered a role far across the globe. She was invited to bring her front end skills to Tokyo and help create a software platform that would help small-to-mid level businesses expand their digital presense in an accessible and effective way. It seemed impossible to say no. She anxiously awaited news of her work visa while living with a friend in New England and baking a great deal of banana bread.",
    coords: [42.296928, -71.291862],
  },
  TOKYO: {
    city: "Meguro",
    state: "Tokyo",
    country: "Japan",
    title: "The present day",
    type: "professional",
    order: 2018,
    description:
      "The present. Tokyo. Our adventurer has learned that things don't always work out as one expects. Sometimes there are layoffs or pandemics or all sorts of unexpected bumps in the road. But she's still here, hoping to put her engineering skills to good use in making great digital experiences. She's still trying to balance finding her feet while also learning to face new challenges. Where will her journey take her next?",
    coords: [35.651424, 139.683887],
  },
};

export default LOCATIONS;
