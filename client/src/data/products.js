import p1 from "../assets/Products/p1.jpg";
import p2 from "../assets/Products/p2.jpg";
import p3 from "../assets/Products/p3.jpg";
import p4 from "../assets/Products/p4.jpg";
import p5 from "../assets/Products/p5.jpg";
import p6 from "../assets/Products/p6.jpg";
import p7 from "../assets/Products/p7.jpg";
import p8 from "../assets/Products/p8.jpg";
import p9 from "../assets/Products/chair/chair1.jpg";
import p10 from "../assets/Products/table/table1.jpg";
import p11 from "../assets/Products/table/table2.jpg";
import p12 from "../assets/Products/table/table3.png";
import bed1 from "../assets/Products/bed/bed1.png";
import bed2 from "../assets/Products/bed/bed2.png";
import bed3 from "../assets/Products/bed/bed3.png";
import wardrobe1 from "../assets/Products/wardrobe/wardrobe1.png";
import wardrobe2 from "../assets/Products/wardrobe/wardrobe2.png";
import wardrobe3 from "../assets/Products/wardrobe/wardrobe3.png";



const PRODUCTS = [
  {
    id: "1",
    name: "Verdant Vase",
    priceINR: 1500,
    category: "Decor",
    sku: 214,
    tags: ["Evergreen", "Modern"],
    img: p1,
    description: "A minimal decorative vase for modern interiors.",
  },
  {
    id: "2",
    name: "Leafy Planter",
    priceINR: 2300,
    category: "Decor",
    sku: 215,
    tags: ["Plant", "Nature"],
    img: p2,
    description: "Perfect planter to bring greenery indoors.",
  },
  {
    id: "3",
    name: "Bloom Pot",
    priceINR: 2199,
    category: "Decor",
    sku: 216,
    tags: ["Decor", "Floral"],
    img: p3,
    description: "Elegant pot for floral decoration.",
  },
  {
    id: "4",
    name: "Max Sofa",
    priceINR: 6099,
    category: "Sofa",
    sku: 302,
    tags: ["Modern", "Spacious"],
    img: p4,
    description: "Spacious modern sofa for large living rooms.",
  },
  {
    id: "5",
    name: "Aura Lamp",
    priceINR: 2199,
    category: "Lighting",
    sku: 501,
    tags: ["Warm", "Ambient"],
    img: p5,
    description: "Warm ambient lamp for cozy evenings.",
  },
  {
    id: "6",
    name: "Aura Lamp Pro",
    priceINR: 2599,
    category: "Lighting",
    sku: 502,
    tags: ["Premium", "Modern"],
    img: p6,
    description: "Premium lamp with modern design.",
  },
  {
    id: "7",
    name: "Chic Sofa",
    priceINR: 5799,
    category: "Sofa",
    sku: 301,
    tags: ["Comfort", "Luxury"],
    img: p7,
    description: "Comfortable sofa with premium cushioning.",
  },
  {
    id: "8",
    name: "Retro Chair",
    priceINR: 3049,
    category: "Chair",
    sku: 401,
    tags: ["Retro", "Wood"],
    img: p8,
    description: "Retro-style chair with solid build quality.",
  },

  
  {
    id: "9",
    name: "Swivel Chair",
    priceINR: 4000,
    category: "Chair",
    sku: 402,
    tags: ["Modern", "Comfort"],
    img: p9,
    description: "Modern swivel chair with smooth finish and comfort.",
  },

  {
    id: "10",
    name: "Writing Desk",
    priceINR: 4500,
    category: "Table",
    sku: 601,
    tags: ["Work", "Minimal"],
    img: p10,
    description: "Minimal wooden writing desk for home office.",
  },
  {
    id: "11",
    name: "Sleek Table",
    priceINR: 5200,
    category: "Table",
    sku: 602,
    tags: ["Modern", "Utility"],
    img: p11,
    description: "Sleek table design with strong wooden finish.",
  },
  {
    id: "12",
    name: "Classic Desk",
    priceINR: 6000,
    category: "Table",
    sku: 603,
    tags: ["Classic", "Office"],
    img: p12,
    description: "Classic desk perfect for office and study rooms.",
  },
  {
  id: "13",
  name: "Modern Queen Bed",
  priceINR: 18500,
  category: "Bed",
  sku: 701,
  tags: ["Bedroom", "Modern"],
  img: bed1,
  description: "Modern queen-size bed with solid wooden frame.",
},
{
  id: "14",
  name: "Classic Wooden Bed",
  priceINR: 22000,
  category: "Bed",
  sku: 702,
  tags: ["Classic", "Wood"],
  img: bed2,
  description: "Classic wooden bed with premium finish.",
},
{
  id: "15",
  name: "Premium King Bed",
  priceINR: 25500,
  category: "Bed",
  sku: 703,
  tags: ["Bedroom", "Luxury"],
  img: bed3,  
  description: "Premium king-size bed with elegant finish and strong build.",
},
{
  id: "16",
  name: "Modern Sliding Wardrobe",
  priceINR: 32000,
  category: "Wardrobe",
  sku: 801,
  tags: ["Bedroom", "Sliding", "Modern"],
  img: wardrobe1,
  images: [wardrobe1, wardrobe2, wardrobe3],
  description: "Modern sliding-door wardrobe with spacious storage.",
},
{
  id: "17",
  name: "Classic Wooden Wardrobe",
  priceINR: 28500,
  category: "Wardrobe",
  sku: 802,
  tags: ["Classic", "Wood", "Bedroom"],
  img: wardrobe2,
  images: [wardrobe2, wardrobe1, wardrobe3],
  description: "Classic wooden wardrobe with premium finish and durability.",
},
{
  id: "18",
  name: "Compact 2-Door Wardrobe",
  priceINR: 21000,
  category: "Wardrobe",
  sku: 803,
  tags: ["Compact", "Minimal", "Bedroom"],
  img: wardrobe3,
  images: [wardrobe3, wardrobe1, wardrobe2],
  description: "Compact wardrobe ideal for small bedrooms and apartments.",
},

];

export default PRODUCTS;
