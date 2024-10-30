const books = [
  {
    id: 1,
    title: "Harry Potter and the Sorcerer's stone",
    pages: 223,
  },
  {
    id: 2,
    title: "Jurassic Park",
    pages: 448,
  },
];

const authors = [
  {
    id: 1,
    name: "J.K. Rowling",
    numBooksPublished: 7,
    books: [books[0]],
  },
  {
    id: 2,
    name: "Michael Crichton",
    numBooksPublished: 30,
    books: [books[1]],
  },
];

const travelers = [
  { id: 1, name: "Tanya Macquoid" },
  { id: 2, name: "Shane Patton" },
  {
    id: 3,
    name: "Rachel Patton",
  },
  {
    id: 4,
    name: "Nicole Mossbacher",
  },
  { id: 5, name: "Mark Mossbacher" },
  {
    id: 6,
    name: "Olivia Mossbacher",
  },
  { id: 7, name: "Quinn Mossbacher" },
  {
    id: 8,
    name: "Paula",
  },
  {
    id: 9,
    name: "Albie Di Grasso",
  },
  { id: 10, name: "Cameron Sullivan" },
  { id: 11, name: "Daphne Sullivan" },
  {
    id: 12,
    name: "Ethan Spiller",
  },
  { id: 13, name: "Harper Spiller" },
  {
    id: 14,
    name: "Portia",
  },
  {
    id: 15,
    name: "Bert Di Grasso",
  },
  {
    id: 16,
    name: "Dominic Di Grasso",
  },
  {
    id: 17,
    name: "Greg Hunt",
  },
];

const countries = [
  {
    id: 1,
    name: "Italy",
  },
  {
    id: 2,
    name: "USA",
  },
];

const trips = [
  {
    id: 1,
    countries: [countries[1]],
    destination: "Hawaii, USA",
    numTravelers: 9,
    travelers: [
      travelers[0],
      travelers[1],
      travelers[2],
      travelers[3],
      travelers[4],
      travelers[5],
      travelers[6],
      travelers[7],
      travelers[16],
    ],
    rate: 50000.0,
  },
  {
    id: 2,
    countries: [countries[0]],
    destination: "Sicily, Italy",
    numTravelers: 10,
    travelers: [
      travelers[0],
      travelers[8],
      travelers[9],
      travelers[10],
      travelers[11],
      travelers[12],
      travelers[13],
      travelers[14],
      travelers[15],
      travelers[16],
    ],
    rate: 100000.0,
  },
];

module.exports = { books, authors, travelers, trips, countries };
