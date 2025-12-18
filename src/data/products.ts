import boxProfileImg from "@/assets/BOX PROFILE.jpg";
import versatileImg from "@/assets/VERSATILE.jpeg";
import romantileImg from "@/assets/romantile.jpg";
import corrugatedImg from "@/assets/Corrugated.jpg";
import aluZincImg from "@/assets/aluzinc.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  subcategory?: string;
  specifications: string[];
  features: string[];
  image: string;
  inStock: boolean;
  unit?: string;
}

export const products: Product[] = [
  // Deformed Steel Bars
  {
    id: "d8",
    name: "D8 Steel Bar",
    description: "High-quality 8mm deformed steel bar for construction and reinforcement applications",
    price: 450,
    currency: "KSh",
    category: "Steel Bars",
    subcategory: "Deformed Bars",
    specifications: ["Diameter: 8mm", "Grade: Y460", "Length: 12m", "Weight: 4.74 kg/m"],
    features: ["High tensile strength", "Excellent bond with concrete", "Corrosion resistant", "KEBS certified"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY6H6IjGCTqe5Y1yWcRN3FzhOwH8S4CFgQ1g&s",
    inStock: true,
    unit: "per bar"
  },
  {
    id: "d10",
    name: "D10 Steel Bar",
    description: "10mm deformed steel bar for construction and reinforcement applications",
    price: 750,
    currency: "KSh",
    category: "Steel Bars",
    subcategory: "Deformed Bars",
    specifications: ["Diameter: 10mm", "Grade: Y460", "Length: 12m", "Weight: 7.40 kg/m"],
    features: ["High tensile strength", "Excellent bond with concrete", "Corrosion resistant", "KEBS certified"],
    image: "/images/D101.jpg",
    inStock: true,
    unit: "per bar"
  },
  {
    id: "d12",
    name: "D12 Steel Bar",
    description: "12mm deformed steel bar for construction and reinforcement applications",
    price: 1020,
    currency: "KSh",
    category: "Steel Bars",
    subcategory: "Deformed Bars",
    specifications: ["Diameter: 12mm", "Grade: Y460", "Length: 12m", "Weight: 10.65 kg/m"],
    features: ["High tensile strength", "Excellent bond with concrete", "Corrosion resistant", "KEBS certified"],
    image: "/images/d16-1-300x300.jpg",
    inStock: true,
    unit: "per bar"
  },
  {
    id: "d16",
    name: "D16 Steel Bar",
    description: "16mm deformed steel bar for construction and reinforcement applications",
    price: 2050,
    currency: "KSh",
    category: "Steel Bars",
    subcategory: "Deformed Bars",
    specifications: ["Diameter: 16mm", "Grade: Y460", "Length: 12m", "Weight: 18.96 kg/m"],
    features: ["High tensile strength", "Excellent bond with concrete", "Corrosion resistant", "KEBS certified"],
    image: "/images/D16.jpg",
    inStock: true,
    unit: "per bar"
  },
  {
    id: "d25",
    name: "D25 Steel Bar",
    description: "25mm deformed steel bar for heavy construction and reinforcement applications",
    price: 5750,
    currency: "KSh",
    category: "Steel Bars",
    subcategory: "Deformed Bars",
    specifications: ["Diameter: 25mm", "Grade: Y460", "Length: 12m", "Weight: 46.16 kg/m"],
    features: ["High tensile strength", "Excellent bond with concrete", "Corrosion resistant", "KEBS certified"],
    image: "/images/rebar-1.jpg",
    inStock: true,
    unit: "per bar"
  },
  // Round Steel Bars
  {
    id: "r6",
    name: "R6 Steel Bar",
    description: "6mm round steel bar for light construction and binding applications",
    price: 210,
    currency: "KSh",
    category: "Steel Bars",
    subcategory: "Round Bars",
    specifications: ["Diameter: 6mm", "Grade: Y250", "Length: 12m", "Weight: 2.67 kg/m"],
    features: ["Smooth surface", "Easy to bend", "Cost effective", "KEBS certified"],
    image: "/images/images-7--500x500.jpeg",
    inStock: true,
    unit: "per bar"
  },
  {
    id: "r8",
    name: "R8 Steel Bar",
    description: "8mm round steel bar for light construction and binding applications",
    price: 450,
    currency: "KSh",
    category: "Steel Bars",
    subcategory: "Round Bars",
    specifications: ["Diameter: 8mm", "Grade: Y250", "Length: 12m", "Weight: 4.74 kg/m"],
    features: ["Smooth surface", "Easy to bend", "Cost effective", "KEBS certified"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWnkZXVmwBcmjKil319TdJc-M11FW37TJTaw&s",
    inStock: true,
    unit: "per bar"
  },
  {
    id: "r10",
    name: "R10 Steel Bar",
    description: "10mm round steel bar for construction and binding applications",
    price: 850,
    currency: "KSh",
    category: "Steel Bars",
    subcategory: "Round Bars",
    specifications: ["Diameter: 10mm", "Grade: Y250", "Length: 12m", "Weight: 7.40 kg/m"],
    features: ["Smooth surface", "Easy to bend", "Cost effective", "KEBS certified"],
    image: "/images/Round-Bar-Front-Cover-Image.jpg",
    inStock: true,
    unit: "per bar"
  },
  {
    id: "r12",
    name: "R12 Steel Bar",
    description: "12mm round steel bar for construction and binding applications",
    price: 1350,
    currency: "KSh",
    category: "Steel Bars",
    subcategory: "Round Bars",
    specifications: ["Diameter: 12mm", "Grade: Y250", "Length: 12m", "Weight: 10.65 kg/m"],
    features: ["Smooth surface", "Easy to bend", "Cost effective", "KEBS certified"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ820tgDKU48lYHCi9Y_sxT8Oq_ch3SUwfZZA&s",
    inStock: true,
    unit: "per bar"
  },
  {
    id: "r16",
    name: "R16 Steel Bar",
    description: "16mm round steel bar for construction and binding applications",
    price: 2300,
    currency: "KSh",
    category: "Steel Bars",
    subcategory: "Round Bars",
    specifications: ["Diameter: 16mm", "Grade: Y250", "Length: 12m", "Weight: 18.96 kg/m"],
    features: ["Smooth surface", "Easy to bend", "Cost effective", "KEBS certified"],
    image: "/images/round-bar.jpg",
    inStock: true,
    unit: "per bar"
  },
  // Construction Materials
  {
    id: "hoop-iron",
    name: "Hoop Iron",
    description: "Galvanized hoop iron for binding and construction applications",
    price: 3000,
    currency: "KSh",
    category: "Construction Materials",
    specifications: ["Width: 32mm", "Thickness: 2.5mm", "Length: 6m", "Galvanized coating"],
    features: ["Corrosion resistant", "High strength", "Easy to work with", "Galvanized finish"],
    image: "/images/63959008_NjIwLTYyMC1mMzQ2NTY2NzNjLTE.webp",
    inStock: true,
    unit: "per piece"
  },
  {
    id: "binding-wire",
    name: "Binding Wire",
    description: "High-quality galvanized binding wire for construction applications",
    price: 3400,
    currency: "KSh",
    category: "Construction Materials",
    specifications: ["Gauge: 16", "Material: Galvanized steel", "Weight: 25kg", "Length: 600m approx"],
    features: ["Galvanized coating", "High tensile strength", "Easy to twist", "Corrosion resistant"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXxwWtD3sdf-PZ6eBk_sE52tzFK6-RGGjWQ&s",
    inStock: true,
    unit: "per coil"
  },
  {
    id: "polythene",
    name: "Polythene Sheets",
    description: "Heavy-duty polythene sheets for construction dampproof applications",
    price: 2000,
    currency: "KSh",
    category: "Construction Materials",
    specifications: ["Thickness: 250 microns", "Width: 4m", "Length: 100m", "UV stabilized"],
    features: ["Waterproof", "UV resistant", "Durable", "Easy to install"],
    image: "/images/BLACK%20POLYTHENE%20IN%20NAIROBI,%20KENYA%20-%20ALI%20GLAZIERS%20LTD-800x800.jpg",
    inStock: true,
    unit: "per roll"
  },
  {
    id: "marine-boards",
    name: "Marine Boards (Marineplex)",
    description: "Waterproof marine plywood boards for construction and marine applications",
    price: 2700,
    currency: "KSh",
    category: "Construction Materials",
    specifications: ["Size: 8ft x 4ft", "Thickness: 18mm", "Grade: Marine", "Waterproof adhesive"],
    features: ["Waterproof", "Boil water proof", "Termite resistant", "High strength"],
    image: "/images/1220X2440X18mm-Shuttering-Film-Faced-Plywood-Marine-Plex-Plywood.webp",
    inStock: true,
    unit: "per sheet"
  },
  // Security Products - Barbed Wire
  {
    id: "barbed-wire-240",
    name: "Barbed Wire 240m",
    description: "High-quality galvanized barbed wire for security fencing",
    price: 1900,
    currency: "KSh",
    category: "Security Products",
    subcategory: "Barbed Wire",
    specifications: ["Length: 240 meters", "Gauge: 16g", "Barb spacing: 10cm", "Galvanized coating"],
    features: ["Sharp barbs", "Galvanized coating", "Weather resistant", "Easy installation"],
    image: "/images/barbed-wire-fencing-500x500-550x550.jpg",
    inStock: true,
    unit: "per roll"
  },
  {
    id: "barbed-wire-480",
    name: "Barbed Wire 480m",
    description: "High-quality galvanized barbed wire for security fencing",
    price: 3400,
    currency: "KSh",
    category: "Security Products",
    subcategory: "Barbed Wire",
    specifications: ["Length: 480 meters", "Gauge: 16g", "Barb spacing: 10cm", "Galvanized coating"],
    features: ["Sharp barbs", "Galvanized coating", "Weather resistant", "Easy installation"],
    image: "/images/barbed-wire-fencing-500x500-550x550.jpg",
    inStock: true,
    unit: "per roll"
  },
  {
    id: "barbed-wire-610",
    name: "Barbed Wire 610m",
    description: "High-quality galvanized barbed wire for security fencing",
    price: 4200,
    currency: "KSh",
    category: "Security Products",
    subcategory: "Barbed Wire",
    specifications: ["Length: 610 meters", "Gauge: 16g", "Barb spacing: 10cm", "Galvanized coating"],
    features: ["Sharp barbs", "Galvanized coating", "Weather resistant", "Easy installation"],
    image: "/images/barbed-wire-fencing-500x500-550x550.jpg",
    inStock: true,
    unit: "per roll"
  },
  // Chain Links
  {
    id: "chainlink-4ft",
    name: "Chain Link 4ft x 18m",
    description: "Galvanized chain link fencing for perimeter security",
    price: 2000,
    currency: "KSh",
    category: "Security Products",
    subcategory: "Chain Link",
    specifications: ["Height: 4ft", "Length: 18m", "Gauge: 16g", "Mesh size: 50mm"],
    features: ["Galvanized coating", "Durable mesh", "Easy installation", "Weather resistant"],
    image: "/images/NO%2050%20CHAIN%20LINK.jpg",
    inStock: true,
    unit: "per roll"
  },
  {
    id: "chainlink-5ft",
    name: "Chain Link 5ft x 18m",
    description: "Galvanized chain link fencing for perimeter security",
    price: 2500,
    currency: "KSh",
    category: "Security Products",
    subcategory: "Chain Link",
    specifications: ["Height: 5ft", "Length: 18m", "Gauge: 16g", "Mesh size: 50mm"],
    features: ["Galvanized coating", "Durable mesh", "Easy installation", "Weather resistant"],
    image: "/images/NO%2050%20CHAIN%20LINK.jpg",
    inStock: true,
    unit: "per roll"
  },
  {
    id: "chainlink-6ft",
    name: "Chain Link 6ft x 18m",
    description: "Galvanized chain link fencing for perimeter security",
    price: 3000,
    currency: "KSh",
    category: "Security Products",
    subcategory: "Chain Link",
    specifications: ["Height: 6ft", "Length: 18m", "Gauge: 16g", "Mesh size: 50mm"],
    features: ["Galvanized coating", "Durable mesh", "Easy installation", "Weather resistant"],
    image: "/images/NO%2050%20CHAIN%20LINK.jpg",
    inStock: true,
    unit: "per roll"
  },
  {
    id: "chainlink-7ft",
    name: "Chain Link 7ft x 18m",
    description: "Galvanized chain link fencing for perimeter security",
    price: 3500,
    currency: "KSh",
    category: "Security Products",
    subcategory: "Chain Link",
    specifications: ["Height: 7ft", "Length: 18m", "Gauge: 16g", "Mesh size: 50mm"],
    features: ["Galvanized coating", "Durable mesh", "Easy installation", "Weather resistant"],
    image: "/images/NO%2050%20CHAIN%20LINK.jpg",
    inStock: true,
    unit: "per roll"
  },
  // BRC Mesh
  {
    id: "brc-a142",
    name: "BRC Mesh A142",
    description: "Welded reinforcement mesh for concrete reinforcement",
    price: 29500,
    currency: "KSh",
    category: "BRC Mesh",
    specifications: ["Size: 6m x 2.4m", "Wire diameter: 6mm", "Mesh size: 200mm x 200mm", "Grade: Y460"],
    features: ["Pre-fabricated", "Time saving", "Consistent quality", "Easy installation"],
    image: "/images/roll-stee.jpg",
    inStock: true,
    unit: "per sheet"
  },
  {
    id: "brc-a98",
    name: "BRC Mesh A98",
    description: "Welded reinforcement mesh for concrete reinforcement",
    price: 21500,
    currency: "KSh",
    category: "BRC Mesh",
    specifications: ["Size: 6m x 2.4m", "Wire diameter: 5mm", "Mesh size: 200mm x 200mm", "Grade: Y460"],
    features: ["Pre-fabricated", "Time saving", "Consistent quality", "Easy installation"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghcsOTuq4ElcRS11ZgYbODBVNuPoNECxSMA&s",
    inStock: true,
    unit: "per sheet"
  },
  {
    id: "brc-a66",
    name: "BRC Mesh A66",
    description: "Welded reinforcement mesh for concrete reinforcement",
    price: 4700,
    currency: "KSh",
    category: "BRC Mesh",
    specifications: ["Size: 6m x 2.4m", "Wire diameter: 4mm", "Mesh size: 200mm x 200mm", "Grade: Y460"],
    features: ["Pre-fabricated", "Time saving", "Consistent quality", "Easy installation"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm9JqzSi_6w3LNtugsxXpucfEciO0mlYlb6A&s",
    inStock: true,
    unit: "per sheet"
  },
  {
    id: "brc-a610",
    name: "BRC Mesh A610",
    description: "Welded reinforcement mesh for concrete reinforcement",
    price: 3500,
    currency: "KSh",
    category: "BRC Mesh",
    specifications: ["Size: 6m x 2.4m", "Wire diameter: 3.5mm", "Mesh size: 200mm x 200mm", "Grade: Y460"],
    features: ["Pre-fabricated", "Time saving", "Consistent quality", "Easy installation"],
    image: "/images/48297195_NjIwLTYyMi0wMmJhZWIyY2VjLTE.webp",
    inStock: true,
    unit: "per sheet"
  },
  // Mabati Roofing Products
  {
    id: "box-profile",
    name: "BOX PROFILE",
    description: "Premium box profile roofing sheets with superior durability and modern aesthetics.",
    price: 470,
    currency: "KSh",
    category: "Mabati Roofing",
    subcategory: "Box Profile",
    specifications: ["Gauge: 28", "Width: 1000mm", "Length: Custom", "Profile: Box"],
    features: ["Weather Resistant", "25 Year Warranty", "Free Delivery", "LIMITED OFFER"],
    image: boxProfileImg,
    inStock: true,
    unit: "per meter"
  },
  {
    id: "versatile-roofing",
    name: "VERSATILE",
    description: "Versatile roofing solution perfect for residential and commercial applications.",
    price: 555,
    currency: "KSh",
    category: "Mabati Roofing",
    subcategory: "Versatile",
    specifications: ["Gauge: 28", "Width: 1000mm", "Length: Custom", "Multi-Purpose Design"],
    features: ["Multi-Purpose Design", "Anti-Corrosion", "Free Delivery", "VERSATILE"],
    image: versatileImg,
    inStock: true,
    unit: "per meter"
  },
  {
    id: "romantile",
    name: "ROMANTILE",
    description: "Elegant tile appearance with the durability of metal roofing at affordable prices.",
    price: 550,
    currency: "KSh",
    category: "Mabati Roofing",
    subcategory: "Tile Profile",
    specifications: ["Gauge: 28", "Width: 1000mm", "Length: Custom", "Tile Design"],
    features: ["Tile-Like Appearance", "Lightweight", "Free Delivery", "SALE!"],
    image: romantileImg,
    inStock: true,
    unit: "per meter"
  },
  {
    id: "corrugated-iron",
    name: "CORRUGATED IRON SHEET",
    description: "Traditional corrugated iron sheets offering reliable protection and timeless design.",
    price: 390,
    currency: "KSh",
    category: "Mabati Roofing",
    subcategory: "Corrugated",
    specifications: ["Gauge: 28", "Width: 1000mm", "Length: Custom", "Classic Profile"],
    features: ["Classic Design", "High Strength", "Free Delivery", "LIMITED OFFER"],
    image: corrugatedImg,
    inStock: true,
    unit: "per meter"
  },
  {
    id: "maisha-alu-zinc",
    name: "MAISHA ALU-ZINC MABATI",
    description: "Advanced alu-zinc coating technology for maximum protection and longevity.",
    price: 390,
    currency: "KSh",
    category: "Mabati Roofing",
    subcategory: "Alu-Zinc",
    specifications: ["Gauge: 28", "Width: 1000mm", "Coating: Alu-Zinc", "Length: Custom"],
    features: ["Aluminium-Zinc Coating", "Superior Corrosion Resistance", "Free Delivery", "LIMITED OFFER"],
    image: aluZincImg,
    inStock: true,
    unit: "per meter"
  },
  {
    id: "maisha-tile",
    name: "MAISHA TILE",
    description: "Stone-coated steel roofing tiles combining beauty, durability, and weather protection.",
    price: 520,
    currency: "KSh",
    category: "Mabati Roofing",
    subcategory: "Stone Coated",
    specifications: ["Gauge: 28", "Width: 1000mm", "Coating: Stone", "Length: Custom"],
    features: ["Premium Finish", "Stone Coated", "Free Delivery", "SALE!"],
    image: romantileImg,
    inStock: true,
    unit: "per meter"
  }
];

export const categories = [
  "Steel Bars",
  "Construction Materials", 
  "Security Products",
  "BRC Mesh",
  "Mabati Roofing"
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};