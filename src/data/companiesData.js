const companies = [
  {
    id: "meta",
    name: "Meta",
    rating: 4.2,
    reviews: 1200,
    logo: "https://cdn-icons-png.flaticon.com/128/6033/6033716.png",
    description:
      "Meta builds technologies that help people connect, find communities, and grow businesses.",
    tags: ["Product", "1000+ employees"],
    location: "USA",
    jobs: [
      { title: "Frontend Developer", type: "Full-time", location: "Remote" },
      { title: "Backend Engineer", type: "Full-time", location: "USA" },
    ],
  },
  {
    id: "netflix",
    name: "Netflix",
    rating: 4.5,
    reviews: 900,
    logo: "https://cdn-icons-png.flaticon.com/128/2504/2504929.png",
    description:
      "Netflix is a streaming service offering award-winning TV shows and movies globally.",
    tags: ["Streaming", "Global"],
    location: "USA",
    jobs: [
      { title: "UI Engineer", type: "Full-time", location: "Remote" },
      { title: "Data Analyst", type: "Full-time", location: "USA" },
    ],
  },
  {
    id: "spotify",
    name: "Spotify",
    rating: 4.3,
    reviews: 700,
    logo: "https://cdn-icons-png.flaticon.com/128/3669/3669986.png",
    description:
      "Spotify is a digital music service that gives access to millions of songs.",
    tags: ["Music", "Tech"],
    location: "Sweden",
    jobs: [
      { title: "Android Developer", type: "Full-time", location: "Remote" },
    ],
  },
  {
    id: "google",
    name: "Google",
    rating: 4.6,
    reviews: 2000,
    logo: "https://cdn-icons-png.flaticon.com/128/300/300221.png",
    description:
      "Google specializes in internet-related services and AI-powered products.Our mission is to organize the world’s information and make it universally accessible and useful",
    tags: ["Tech", "MNC"],
    location: "Global",
    jobs: [
      { title: "Software Engineer", type: "Full-time", location: "India" },
      { title: "Product Manager", type: "Full-time", location: "USA" },
    ],
  },
];

export default companies;