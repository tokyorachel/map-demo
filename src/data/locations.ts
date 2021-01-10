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
    title: "Undergrad",
    type: "education",
    order: 4,
    description:
      "It was a big change moving from a desert to a place steeped in mist and rain. I was studying US history, but I still bought a heavily discounted student copy of Macromedia Flash here and made games for my friends.",
    coords: [37.871593, -122.272743],
  },
  TEMPE: {
    city: "Tempe",
    state: "AZ",
    country: "USA",
    title: "Hello world",
    type: "birth",
    order: 1,
    description: "This is where it all started, a long, long time ago.",
    coords: [33.425522, -111.941254],
  },
  HOPI: {
    city: "Phoenix",
    state: "AZ",
    country: "USA",
    title: "Hopi Elementary School",
    type: "education",
    order: 2,
    description:
      "It looks very fancy nowadays, but was a much humbler place when I went there.",
    coords: [33.497302, -111.969821],
  },
  XCP: {
    city: "Phoenix",
    state: "AZ",
    country: "USA",
    title: "High School",
    type: "education",
    order: 3,
    description:
      "I made some lifelong friends here, even if I hated the school uniform :-) Here's where I experienced my first taste of web development when one of my teachers made me figure out how to build a website for an after-school club.",
    coords: [33.505453, -112.067364],
  },
  CAMBRIDGE: {
    city: "Cambridge",
    state: "MA",
    country: "USA",
    title: "Student exchange program",
    type: "education",
    order: 5,
    description:
      "I applied for a college exchange program and was accepted. I spent a semester studying at Harvard while getting to know the Boston area.",
    coords: [42.373615, -71.109734],
  },
  MUNICH: {
    city: "Munich",
    state: "Bavaria",
    country: "Germany",
    title: "Language study",
    type: "education",
    order: 6,
    description:
      "Meine Deutsche ist jetz sehr schlecht, aber ich mag gerne die Wießwurst und die Bratkartoffeln.",
    coords: [48.13913, 11.58022],
  },
  UC: {
    city: "Chicago",
    state: "IL",
    country: "USA",
    title: "Graduate School",
    type: "education",
    order: 7,
    description:
      "After college, I had ambitions of becoming a history professor. I went to graduate school at the University of Chicago where I was a PhD candidate in the History and Philosphy of Science.",
    coords: [41.792135, -87.599967],
  },
  PILSEN: {
    city: "Chicago",
    state: "IL",
    country: "USA",
    title: "First full-time software job",
    type: "professional",
    order: 8,
    description:
      "I eventually left grad school and the neighborhood of Hyde Park and moved to the neighborhood of Pilsen while I transitioned to becoming a full stack developer.",
    coords: [41.856143, -87.672934],
  },
  WRIGLEYVILLE: {
    city: "Chicago",
    state: "IL",
    country: "USA",
    title: "Moving on up",
    type: "professional",
    order: 9,
    description:
      "You wouldn't believe how wild the rent was becoming in my neighborhoods, so I moved to the North Side of Chicago near Wrigley Field. I also began to specialize in front end development around this time.",
    coords: [41.948051, -87.655758],
  },
  WELLESLEY: {
    city: "Wellesley",
    state: "MA",
    country: "USA",
    title: "Return to New England",
    type: "professional",
    order: 10,
    description:
      "While waiting for my visa to work in Japan, I lived with a friend in New England and got to experience the joys of a New England fall.",
    coords: [42.296928, -71.291862],
  },
  TOKYO: {
    city: "Tokyo",
    state: "Meguro",
    country: "Japan",
    title: "The present day",
    type: "professional",
    order: 11,
    description:
      "That brings us to today. Here I am in Tokyo, trying to put my engineering skills to good use in making great digital experiences for the people here and learn to challenge myself in new ways. Where will my journey take me next?",
    coords: [35.651424, 139.683887],
  },
};

export default LOCATIONS;
