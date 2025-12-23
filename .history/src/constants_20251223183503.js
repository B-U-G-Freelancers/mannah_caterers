import Silver from "./components/silver-package";
import Gold from "./components/gold-package";
import Platinum from "./components/platinum-package";

export const CATEGORIES = [
  { id: "biriyani", label: "Biriyani & Rice", title: "Biriyani & Rice Specials" },
  { id: "starters", label: "Starters", title: "Starters" },
  { id: "desserts", label: "Desserts", title: "Desserts" },
  { id: "live", label: "Live Stalls", title: "Live Counters" },
];


export const MENU_ITEMS = [
  // 🔥 STARTERS
  {
    id: "s1",
    name: "Chicken 65",
    description:
      "Crispy, spicy deep-fried chicken tossed in South Indian spices.",
    image: "/chicken65.jpg",
    isVeg: false,
    category: "starters",
  },
  {
    id: "s2",
    name: "Chicken Lollipop",
    description: "Frenched chicken wings marinated and fried to perfection.",
    image: "/chickenlolli.jpg",
    isVeg: false,
    category: "starters",
  },
  {
    id: "s3",
    name: "Mutton Chops",
    description: "Juicy mutton chops slow-cooked with aromatic spices.",
    image: "muttonchops.jpg",
    isVeg: false,
    category: "starters",
  },
  {
    id: "s4",
    name: "Fish Finger",
    description: "Crispy breaded fish fingers served golden and crunchy.",
    image: "/fishfinger.jpg",
    isVeg: false,
    category: "starters",
  },
  {
    id: "s5",
    name: "Chicken Popcorn",
    description: "Bite-sized crunchy chicken popcorn with mild seasoning.",
    image: "/chickenpopcorn.jpg",
    isVeg: false,
    category: "starters",
  },
  {
    id: "s6",
    name: "Chicken Tikka",
    description: "Char-grilled chicken cubes marinated in yogurt and spices.",
    image: "/chickentikka.jpg",
    isVeg: false,
    category: "starters",
  },
  {
    id: "s7",
    name: "Prawn Pepper Fry",
    description: "Spicy prawn fry tossed with cracked pepper and curry leaves.",
    image: "/prawnpepperfry.jpg",
    isVeg: false,
    category: "starters",
  },
  {
    id: "s8",
    name: "Fish Tikka",
    description: "Soft fish cubes marinated and grilled in tandoor style.",
    image: "/fishtikka.jpg",
    isVeg: false,
    category: "starters",
  },
  {
    id: "s9",
    name: "Chicken Cutlets",
    description: "Crispy shallow-fried cutlets with spiced minced chicken meat.",
    image: "/chickencutlets.jpg",
    isVeg: false,
    category: "starters",
  },
  {
    id: "s10",
    name: "Pepper Chicken Dry",
    description: "Hot and spicy pepper chicken tossed in South Indian style.",
    image: "/pepperchicken.jpg",
    isVeg: false,
    category: "starters",
  },
  {
    id: "s11",
    name: "Prawn 65",
    description: "Crispy fried prawns coated in signature 65 masala.",
    image: "prawn65.jpg",
    isVeg: false,
    category: "starters",
  },
  {
    id: "s12",
    name: "Mutton Cutlets",
    description: "Perfectly spiced mutton, pan-fried for a rich crunch.",
    image: "/muttoncutlets.jpg",
    isVeg: false,
    category: "starters",
  },

  // 🍨 DESSERTS
  {
    id: "d1",
    name: "Pineapple Kesari",
    description: "Classic South Indian kesari infused with pineapple.",
    image: "/images/pineapple-kesari.jpg",
    isVeg: true,
    category: "desserts",
    isPopular: true,
  },

  // 🍦 LIVE COUNTERS
  {
    id: "l1",
    name: "Live Salad Counter",
    description: "Freshly prepared salads with multiple dressings.",
    image: "/images/salad-counter.jpg",
    isVeg: true,
    category: "live",
  },
  {
    id: "l2",
    name: "Ice Cream Counter",
    description: "Multiple ice cream flavors served live.",
    image: "/images/ice-cream.jpg",
    isVeg: true,
    category: "live",
    isPopular: true,
  },
  {
    id: "l3",
    name: "Fresh Fruit Counter",
    description: "Seasonal fruits served fresh.",
    image: "/images/fruits.jpg",
    isVeg: true,
    category: "live",
    isPopular: true,
  },
];

export const PACKAGES = [
  {
    id: "silver",
    name: "Silver Package",
    description: "Perfect for small family functions and intimate gatherings.",
    icon: Silver,
    items: ["s1", "s2", "m1", "m4", "d1"],
    features: [
      { label: "Starters", value: "2 Items" },
      { label: "Main Course", value: "2 Rice Items" },
      { label: "Dessert", value: "1 Item" },
    ],
  },

  {
    id: "gold",
    name: "Gold Package",
    description: "Ideal for weddings and medium-sized celebrations.",
    icon: Gold,
    isPopular: true,
    items: ["s1", "s2", "s3", "m1", "m2", "m4", "d1", "l2"],
    features: [
      { label: "Starters", value: "3 Items" },
      { label: "Biriyani", value: "Chicken & Mutton" },
      { label: "Live Counter", value: "Ice Cream" },
      { label: "Dessert", value: "1 Item" },
    ],
  },

  {
    id: "platinum",
    name: "Platinum Package",
    description: "Premium experience with live counters and full spread.",
    icon: Platinum,
    items: [
      "s1",
      "s2",
      "s3",
      "s4",
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6",
      "d1",
      "l1",
      "l2",
      "l3",
    ],
    features: [
      { label: "Starters", value: "4 Items" },
      { label: "Biriyani", value: "Chicken, Mutton & Beef" },
      { label: "Live Counters", value: "Salad, Ice Cream & Fruits" },
      { label: "Dessert", value: "Included" },
    ],
  },
];
