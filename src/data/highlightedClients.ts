export interface HighlightedClient {
  name: string;
  category: string;
  logo: string;
  description: string;
  branches: string;
}

const MART_DESC = "Multi-counter POS setup distributed across departments and checkout lanes";
const RESTAURANT_DESC = "Integrated KOT (Kitchen Order Ticket) workflow with department-wise order nodes";
const BAKERY_DESC = "Batch-expiry tracking, integrated weighing-scale POS interfaces, and rapid touch-billing nodes.";
const TECH_DESC = "IMEI/Serial-tracked inventory matrix with warranty profiling and dynamic barcode checkout.";

export const highlightedClients: HighlightedClient[] = [
  {
    name: "AL FAJR",
    category: "Restaurants",
    logo: "/Clientele-images/Xenith website images/al-fajr.png",
    description: RESTAURANT_DESC,
    branches: "4 Active Branches",
  },
  {
    name: "APPLE CITY",
    category: "Mobile & Accessories",
    logo: "/Clientele-images/Xenith website images/apple-city.jfif",
    description: TECH_DESC,
    branches: "1 Active Branch",
  },
  {
    name: "BISTRO TONIGHT",
    category: "Restaurants",
    logo: "/Clientele-images/Xenith website images/bistro-tonight.jpg",
    description: RESTAURANT_DESC,
    branches: "1 Active Branch",
  },
  {
    name: "CAFÉ ESCAPE",
    category: "Restaurants",
    logo: "/Clientele-images/Xenith website images/cafe-escape.jfif",
    description: RESTAURANT_DESC,
    branches: "1 Active Branch",
  },
  {
    name: "CREEK HILLS BAHRIA",
    category: "Restaurants",
    logo: "/Clientele-images/Xenith website images/creek-hills.png",
    description: RESTAURANT_DESC,
    branches: "1 Active Branch",
  },
  {
    name: "DA VINCI",
    category: "Restaurants",
    logo: "/Clientele-images/Xenith website images/da-vinci.jpeg",
    description: RESTAURANT_DESC,
    branches: "1 Active Branch",
  },
  {
    name: "GRILL TOWN",
    category: "Restaurants",
    logo: "/Clientele-images/Xenith website images/grill-town.jfif",
    description: RESTAURANT_DESC,
    branches: "1 Active Branch",
  },
  {
    name: "HYDERABAD BAKERY",
    category: "Bakery",
    logo: "/Clientele-images/Xenith website images/hyd-bakery.jfif",
    description: BAKERY_DESC,
    branches: "2 Active Branches",
  },
  {
    name: "LA MOOSH",
    category: "Restaurants",
    logo: "/Clientele-images/Xenith website images/la-moosh.jfif",
    description: RESTAURANT_DESC,
    branches: "1 Active Branch",
  },
  {
    name: "MELLOW TERRACE BAHRIA",
    category: "Restaurants",
    logo: "/Clientele-images/Xenith website images/mellow-terrace.jfif",
    description: RESTAURANT_DESC,
    branches: "1 Active Branch",
  },
  {
    name: "SUPER MADINA",
    category: "Marts",
    logo: "/Clientele-images/Xenith website images/super-madina.jfif",
    description: MART_DESC,
    branches: "12 Active Branches",
  },
  {
    name: "SUPER MADINA RESTAURANT",
    category: "Restaurants",
    logo: "/Clientele-images/Xenith website images/super-madina-restaurant.jfif",
    description: RESTAURANT_DESC,
    branches: "12 Active Branches",
  }
];
