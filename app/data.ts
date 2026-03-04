// app/data.ts
import { StaticImageData } from 'next/image';

// --- Men's Imports ---
import mens001 from '@/public/products/mens/SAN001.webp';
import mens002 from '@/public/products/mens/SAN002.webp';
import mens003 from '@/public/products/mens/SAN003.webp';
import mens004 from '@/public/products/mens/SAN004.webp';
import mens021 from '@/public/products/mens/SAN021.webp';
import mens022 from '@/public/products/mens/SAN022.webp';

// --- Women's Imports ---
import women005 from '@/public/products/womens/SAN005.webp';
import women006 from '@/public/products/womens/SAN006.webp';
import women007 from '@/public/products/womens/SAN007.webp';
import women008 from '@/public/products/womens/SAN008.webp';
import women009 from '@/public/products/womens/SAN009.webp';
import women010 from '@/public/products/womens/SAN010.webp';
import women011 from '@/public/products/womens/SAN011.webp';
import women012 from '@/public/products/womens/SAN012.webp';

// --- Kids Imports ---
import kids013 from '@/public/products/kids/SAN013.webp';
import kids014 from '@/public/products/kids/SAN014.webp';
import kids015 from '@/public/products/kids/SAN015.webp';
import kids016 from '@/public/products/kids/SAN016.webp';
import kids017 from '@/public/products/kids/SAN017.webp';
import kids018 from '@/public/products/kids/SAN018.webp';
import kids019 from '@/public/products/kids/SAN019.webp';
import kids020 from '@/public/products/kids/SAN020.webp';

export const CLIENT_LOGOS = [
  "Five Below", "Next", "Disney", "Walmart", "Ann Summers", "TJ Maxx", "Pepco", "Nui Organics", "Mothercare", "Dollarama"
];

interface PRODUCT {
  id: string; // Filename ID for manufacturing inquiries
  name: string;
  category: string;
  image: StaticImageData | string;
  details: string;
  specs: {
    Fabric?: string;
    Color: string;
    [key: string]: string | number | undefined;
  };
}

export const PRODUCTS: PRODUCT[] = [
  /* --- MEN'S COLLECTION --- */
  {
    id: "SAN001",
    name: "Orange Essential Tee",
    category: "Men",
    image: mens001,
    details: "High-density 180 GSM 100% organic cotton single jersey. High quality Chest Print",
    specs: { Fabric: "100% Organic Cotton 180 GSM", Color: "Orange" },
  },
  {
    id: "SAN002",
    name: "White Collar",
    category: "Men",
    image: mens002,
    details: "Premium 100% cotton pique finish for a luxury feel.",
    specs: { Fabric: "100% Cotton Pique 240 GSM", Color: "White" },
  },
  {
    id: "SAN003",
    name: "Sage Mid-Weight Jersey",
    category: "Men",
    image: mens003,
    details: "Premium Heavy Weight 100% cotton french terry(300 GSM).",
    specs: { Fabric: "100% Cotton French Terry 300 GSM", Color: "Blue" },
  },
  {
    id: "SAN004",
    name: "Signature Structured Hoodie",
    category: "Men",
    image: mens004,
    details: "280 GSM Cotton Fleece. Features hidden seams and a double-layered hood for a sharp architectural silhouette.",
    specs: { Fabric: "100% Cotton Fleece 280 GSM", Color: "Green" },
  },

  // {
  //   id: "SAN021",
  //   name: "Performance Tech Knit",
  //   category: "Men",
  //   image: mens021,
  //   details: "Moisture-wicking active jersey engineered for high-performance athletic lifestyle brands.",
  //   specs: { Fabric: "Tech-Cotton Blend", Color: "Phantom" },
  // },
  // {
  //   id: "SAN022",
  //   name: "Heritage Box Tee",
  //   category: "Men",
  //   image: mens022,
  //   details: "Oversized 'Box' fit with dropped shoulders, utilizing our sustainable garment-dye process.",
  //   specs: { Fabric: "Heavyweight Jersey", Color: "Emerald Wash" },
  // },

  /* --- WOMEN'S COLLECTION --- */
  {
    id: "SAN005",
    name: "Women Pajamas",
    category: "Women",
    image: women005,
    details: "100% organic cotton single jersey 180 gsm. Non PVC print",
    specs: { Fabric: "100% Organic Cotton 180 GSM", Color: "Cherry Pink" },
  },
  {
    id: "SAN006",
    name: "Women Printed Pajamas",
    category: "Women",
    image: women006,
    details: "95% cotton 5% elasthane 180 gsm and discharge print for a sophisticated aesthetic.",
    specs: { Fabric: "95% Cotton 5% Elasthane 180 GSM", Color: "Brown" },
  },
  {
    id: "SAN007",
    name: "Womens Short Pajamas",
    category: "Women",
    image: women007,
    details: "100 % cotton jersey with elegant tailored sleeve detailing.",
    specs: { Fabric: "100% Cotton Single Jersey 180 GSM", Color: "Cream" },
  },
  {
    id: "SAN008",
    name: "Tank tops",
    category: "Women",
    image: women008,
    details: "100% cotton single jersey 200 gsm with discharge print",
    specs: { Fabric: "100% Cotton Single Jersey 200 GSM", Color: "Blue" },
  },
  {
    id: "SAN009",
    name: "Hoodie and shorts",
    category: "Women",
    image: women009,
    details: "62% cotton 33% viscose 5% elasthane french terry 240 gsm. Premium Hoodie with Shorts",
    specs: { Fabric: "62% Cotton 33% Viscose 5% Elasthane 240 GSM", Color: "Pink and Grey" },
  },
  // {
  //   id: "SAN010",
  //   name: "Premium Coordinates Set",
  //   category: "Women",
  //   image: women010,
  //   details: "62% cotton 33% polyester 5% elasthane fleece 240 gsm with Embroidery",
  //   specs: { Fabric: "62% cotton 33% polyester 5% elasthane fleece 240 gsm", Color: "Olive Green" },
  // },
  {
    id: "SAN011",
    name: "Womens Causal Set",
    category: "Women",
    image: women011,
    details: "62% cotton 33% viscose 5% elasthane French terry 240 gsm.",
    specs: { Fabric: "62% Cotton 33% Viscose 5% Elasthane 240 GSM", Color: "Light Green" },
  },
  {
    id: "SAN012",
    name: "Modern Dolman Tee",
    category: "Women",
    image: women012,
    details: "62% cotton 33% polyester 5% elasthane fleece 240 gsm",
    specs: { Fabric: "62% Cotton 33% Polyester 5% Elasthane 240 GSM", Color: "Cream" },
  },

  /* --- KIDS COLLECTION --- */
  {
    id: "SAN013",
    name: "Organic Junior Slub",
    category: "Kids",
    image: kids013,
    details: "GOTS certified 100% organic cotton with non-toxic dyes, ensuring safety and extreme softness. Print like spray effect. ",
    specs: { Fabric: "100% Organic Cotton Slub 160 GSM", Color: "Sunlight Gold" },
  },
  {
    id: "SAN014",
    name: "Kids Rompers",
    category: "Kids",
    image: kids014,
    details: "Safe, drawstring-free design with a durable knit that withstands frequent laundering.",
    specs: { Fabric: "100% Organic Cotton 160 GSM", Color: "Grey Marl" },
  },
  {
    id: "SAN015",
    name: "Kids Play-Day Pajamas",
    category: "Kids",
    image: kids015,
    details: "Cotton Polyster Jersey. 100% Cotton Pant. Applique 3d pocket+ ears+ pocket",
    specs: { 
      "Top Fabric": "98% Cotton 2% Poly 160 GSM", 
      "Pant Fabric": "100% Cotton Jersey 160 GSM", 
      Color: "Grey" 
    },
  },
  {
    id: "SAN016",
    name: "Kids Hoodie Set",
    category: "Kids",
    image: kids016,
    details: "Pant gross loop knit(looks like denim)",
    specs: { 
      "Top Fabric": "98% Cotton 2% Poly Fleece 220 GSM",
      "Pant Fabric": "95% Cotton 5% Elastane 180 GSM", 
      Color: "Half White" 
    },
  },
  {
    id: "SAN017",
    name: "Graphic Print Tank Top",
    category: "Kids",
    image: kids017,
    details: "Applique mesh fabric.",
    specs: { 
      "Front Fabric": "100% Polyester Mesh", 
      "Back Fabric": "100% Cotton Jersey 160 GSM", 
      Color: "Pink & White" 
    },
  },
  {
    id: "SAN018",
    name: "Peppa Pig Pajamas",
    category: "Kids",
    image: kids018,
    details: "Cross loop jersey. Applique embroidery + gliter print + mesh applique",
    specs: { 
      "Top Fabric": "100% Cotton Jersey 160 GSM", 
      "Bottom Fabric": "95% Cotton 5% Elastane", 
      Color: "Pink & Navy" 
    },
  },
  {
    id: "SAN019",
    name: "Kids Striped Sequin Tshirt",
    category: "Kids",
    image: kids019,
    details: "Printed stripes + sequins",
    specs: { Fabric: "100% Cotton Jersey 200 GSM", Color: "White & Navy" },
  },
  {
    id: "SAN020",
    name: "Kids Seasonal Romper",
    category: "Kids",
    image: kids020,
    details: "Special melange. AOP + CMYK print",
    specs: { 
      "Top Fabric": "56% Cotton 44% Poly 180 GSM", 
      "Bottom Fabric": "100% Cotton 160 GSM", 
      Color: "Light Pink" 
    },
  },
];


export const FACTORY_INFO = {
  mainImage: "/factory-floor.jpg",
  totalExperience: "15+ Years",
  headquarters: "USA",
  sourcingHubs: ["South Asia", "Southeast Asia", "Americas", "India", "Bangladesh", "China"],
  specialties: ["End-to-End Supply Chain", "Global Regulatory Compliance", "High-Volume Retail Fulfillment", "Ethical Manufacturing", "Sustainable Fabric Sourcing", "Global Compliance"],
  certifications: ["GOTS", "OEKO-TEX 100", "GRS", "Sedex"]
};