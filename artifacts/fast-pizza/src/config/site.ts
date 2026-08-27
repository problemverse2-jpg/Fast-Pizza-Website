export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  tag?: string;
  category: string;
  featured?: boolean;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  tagline: string;
  phone: string;
  phoneE164: string;
  city: string;
  address: string;
  whatsappNumber: string;
  hours: string;
};

const defaults: SiteConfig = {
  name: "Fast Pizza",
  shortName: "FAST",
  tagline: "Hot pizza. No ceremony.",
  phone: "080002 11303",
  phoneE164: "+918000211303",
  city: "Jaipur",
  address: "Shop No. S 1, 92, MGH Road, near Mahatma Gandhi Hospital, behind Poornima Institute, Sitapura, Jaipur, Rajasthan 302022",
  whatsappNumber: "+918000211303",
  hours: "Every day · 11 AM – 3 AM",
};

const getOverrides = (): Partial<SiteConfig> => {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const keys: Array<keyof SiteConfig> = [
    "name",
    "shortName",
    "tagline",
    "phone",
    "phoneE164",
    "city",
    "address",
    "whatsappNumber",
  ];
  return keys.reduce<Partial<SiteConfig>>((overrides, key) => {
    const value = params.get(key);
    if (value?.trim()) overrides[key] = value.trim();
    return overrides;
  }, {});
};

export const site: SiteConfig = { ...defaults, ...getOverrides() };

export const menuCategories = [
  "Simply Veg",
  "Veg 1",
  "Veg 2",
  "Veg Supreme",
  "Special Pizza",
  "Sides",
  "Burgers",
  "Beverages & Desserts",
];

export const menuItems: MenuItem[] = [
  { id: "margherita", name: "Margherita", description: "Cheese classic, kept clean.", price: "₹150*", tag: "Classic", category: "Simply Veg", featured: true },
  { id: "cheese-tomato", name: "Cheese & Tomato", description: "Cheese, tomato and a little brightness.", price: "₹150*", category: "Simply Veg" },
  { id: "double-cheese-margherita", name: "Double Cheese Margherita", description: "Loaded with extra cheese.", price: "₹185*", tag: "Extra cheese", category: "Simply Veg" },
  { id: "cheese-corn", name: "Cheese & Corn", description: "Sweet corn, melted cheese, zero fuss.", price: "₹185*", category: "Simply Veg" },
  { id: "fresh-veggie", name: "Fresh Veggie", description: "Onion and capsicum.", price: "₹185*", category: "Veg 1" },
  { id: "spicy-triple-tango", name: "Spicy Triple Tango", description: "Red pepper, corn and jalapeño.", price: "₹185*", tag: "Spicy", category: "Veg 1", featured: true },
  { id: "tandoori-corn", name: "Tandoori Corn", description: "Corn with smoky tandoori flavour.", price: "₹185*", category: "Veg 1" },
  { id: "country-special", name: "Country Special", description: "Onion, capsicum and tomato.", price: "₹220*", category: "Veg 2" },
  { id: "farm-fresh", name: "Farm Fresh", description: "Onion, capsicum, tomato and mushroom.", price: "₹220*", category: "Veg 2" },
  { id: "mexican-green-wave", name: "Mexican Green Wave", description: "Onion, capsicum, tomato and jalapeño.", price: "₹220*", tag: "Spicy", category: "Veg 2" },
  { id: "tandoori-onion-paneer", name: "Tandoori Onion Paneer", description: "Onion, paneer and smoky flavour.", price: "₹250*", category: "Veg 2" },
  { id: "paprika-paneer", name: "Paprika Paneer", description: "Paneer, capsicum, corn, mushroom and red pepper.", price: "₹250*", category: "Special Pizza" },
  { id: "deluxe-veggie", name: "Deluxe Veggie Delight", description: "Onion, capsicum, corn, mushroom and paneer.", price: "₹250*", category: "Special Pizza" },
  { id: "5-pepperika", name: "5 Pepperika", description: "Capsicum, red pepper, yellow pepper and jalapeño.", price: "₹250*", tag: "Hot", category: "Special Pizza" },
  { id: "spicy-veg-peri-peri", name: "Spicy Veg Peri-Peri", description: "Capsicum, red pepper, corn and peri-peri.", price: "₹250*", tag: "Hot", category: "Special Pizza" },
  { id: "makhani-paneer", name: "Makhani Paneer", description: "Capsicum, paneer and a good Indian makhani sauce.", price: "₹250*", category: "Special Pizza", featured: true },
  { id: "extravaganza-feast", name: "Extravaganza Feast Pizza", description: "Onion, capsicum, tomato, jalapeño, sweet corn and mushroom.", price: "₹250*", category: "Veg Supreme" },
  { id: "cloud-one", name: "Cloud One Pizza", description: "Capsicum, tomato, paneer, jalapeño and corn.", price: "₹250*", category: "Veg Supreme" },
  { id: "chefs-veg-special", name: "Chef’s Veg Special", description: "Red paprika, capsicum, mushroom and paneer.", price: "₹250*", category: "Veg Supreme" },
  { id: "cheesy-pizza-fingers", name: "Cheesy Pizza Fingers", description: "Crisp, pull-apart cheese bites.", price: "₹80*", tag: "5 pieces", category: "Sides", featured: true },
  { id: "cheesy-corn-triangles", name: "Cheesy Corn Triangles", description: "Golden triangles with corn and cheese.", price: "₹95*", tag: "7 pieces", category: "Sides" },
  { id: "cheese-jalapeno-poppers", name: "Cheese & Jalapeño Poppers", description: "Crunchy, cheesy, with a little heat.", price: "₹80*", tag: "9 pieces", category: "Sides" },
  { id: "stuffed-garlic-bread", name: "Stuffed Garlic Bread", description: "Soft garlic bread with a cheesy centre.", price: "₹115*", category: "Sides" },
  { id: "creamy-garlic-breadstick", name: "Creamy Garlic Bread Stick", description: "The late-night favourite with a creamy dip.", price: "₹99*", tag: "Standout side", category: "Sides", featured: true },
  { id: "garlic-bread-sticks", name: "Garlic Bread Sticks", description: "Simple, buttery and properly garlicky.", price: "₹80*", category: "Sides" },
  { id: "calzone-pocket", name: "Calzone Pocket", description: "A folded, cheesy pocket for the road.", price: "₹100*", category: "Sides" },
  { id: "french-fries", name: "French Fries", description: "Golden and ready for dipping.", price: "₹60*", category: "Sides" },
  { id: "masala-fries", name: "Masala Fries", description: "Fries with a warm masala hit.", price: "₹80*", category: "Sides" },
  { id: "peri-peri-fries", name: "Peri-Peri Fries", description: "Fries, turned up.", price: "₹90*", category: "Sides" },
  { id: "veg-parcel", name: "Veg Parcel", description: "A pocket-sized savoury snack.", price: "₹45*", category: "Sides" },
  { id: "aloo-tikki-burger", name: "Aloo Tikki Burger", description: "Crisp potato tikki in a soft bun.", price: "₹49*", category: "Burgers" },
  { id: "veggie-burger", name: "Veggie Burger", description: "A full, familiar veggie burger.", price: "₹60*", category: "Burgers" },
  { id: "big-crunchy-veg-burger", name: "Big Crunchy Veg Burger", description: "More crunch, more to hold onto.", price: "₹80*", category: "Burgers" },
  { id: "spicy-paneer-burger", name: "Spicy Paneer Burger", description: "Paneer with a little bite.", price: "₹90*", tag: "Spicy", category: "Burgers" },
  { id: "corn-spinach-burger", name: "Corn & Spinach Burger", description: "A softer, savoury veggie stack.", price: "₹90*", category: "Burgers" },
  { id: "mad-over-cheese-burger", name: "Mad Over Cheese Burger", description: "For when regular cheese is not enough.", price: "₹90*", tag: "Extra cheese", category: "Burgers" },
  { id: "choco-lava-cake", name: "Choco Lava Cake", description: "Warm chocolate centre.", price: "₹95*", category: "Beverages & Desserts" },
  { id: "chocolate-brownie", name: "Chocolate Brownie", description: "A fudgy finish.", price: "₹80*", category: "Beverages & Desserts" },
  { id: "cold-coffee", name: "Cold Coffee", description: "Chilled and easy to sip.", price: "₹40*", category: "Beverages & Desserts" },
  { id: "hot-coffee", name: "Hot Coffee", description: "For the late shift.", price: "₹30*", category: "Beverages & Desserts" },
  { id: "hazelnut-cold-coffee", name: "Hazelnut Cold Coffee", description: "Cold coffee with hazelnut notes.", price: "₹60*", category: "Beverages & Desserts" },
  { id: "crumbled-oreo-shake", name: "Crumbled Oreo Shake", description: "Thick, cold and crumbly.", price: "₹90*", category: "Beverages & Desserts" },
  { id: "strawberry-shake", name: "Strawberry Shake", description: "Sweet, cold and pink.", price: "₹90*", category: "Beverages & Desserts" },
  { id: "chocolate-shake", name: "Chocolate Shake", description: "Chocolate in a glass.", price: "₹90*", category: "Beverages & Desserts" },
];

export const whatsappHref = (message = `Hi ${site.name}, I'd like to order.`) =>
  `https://wa.me/${site.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;