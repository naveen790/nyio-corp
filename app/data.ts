// app/data.ts

export const CLIENT_LOGOS = [
  "Five Below",
  "GAP",
  "Disney",
  "Walmart",
  "Dollarama",
  "TJ Maxx"
];

export const PRODUCTS = [
  { 
    id: 1, 
    name: "Classic Heavyweight Tee", 
    category: "T-Shirt", 
    image: "/products/tee-black.jpg", 
    details: "220 GSM Combed Cotton. Features a reinforced neck rib and side-seamed construction for a premium retail fit." 
  },
  { 
    id: 2, 
    name: "Oversized Streetwear Hoodie", 
    category: "Hoodie", 
    image: "/products/mens-hoodies.jpg", 
    details: "400 GSM Heavyweight French Terry. Drop-shoulder design with a double-lined hood and no drawstrings for a minimalist look." 
  },
  { 
    id: 3, 
    name: "Essential Summer Tee", 
    category: "T-Shirt", 
    image: "/products/tee-white.jpg", 
    details: "160 GSM Lightweight. Breathable, soft-wash finish ideal for high-volume retail distribution." 
  },
  { 
    id: 4, 
    name: "Premium Pullover", 
    category: "Hoodie", 
    image: "/products/womens-grey-pullover.jpg", 
    details: "80% Cotton / 20% Polyester blend for durability and low shrinkage. Custom dyed to Nyio Corp standards." 
  }
];

export const FACTORY_INFO = {
  mainImage: "/factory-floor.jpg",
  totalExperience: "15+ Years",
  locations: ["New York", "Tiruppur"],
  specialties: ["Circular Knitting", "Eco-friendly Dyeing", "High-Speed Stitching"]
};