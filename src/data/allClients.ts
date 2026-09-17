export type ClientCategory = 
  | "Marts & Superstores"
  | "Restaurants & Cafés"
  | "Healthcare & Labs"
  | "Garments & Apparel"
  | "Bakery & Sweets"
  | "Electronics & Retail"
  | "Education"
  | "Automobile & Parts"
  | "Footwear"
  | "Mobile & Accessories"
  | "Government & Public Sector";

export interface ClientData {
  name: string;
  category: ClientCategory;
  highlighted?: boolean;
  logo?: string | null;
  deployments?: number;
  description?: string;
}

const MART_DESC = "Multi-counter POS setup distributed across departments and checkout lanes";
const RESTAURANT_DESC = "Integrated KOT (Kitchen Order Ticket) workflow with department-wise order nodes";
const HEALTHCARE_DESC = "Centralized patient billing, diagnostic lab report sync, and multi-counter pharmacy inventory integration.";
const TECH_DESC = "IMEI/Serial-tracked inventory matrix with warranty profiling and dynamic barcode checkout.";
const APPAREL_DESC = "Multi-variant SKU management (size/color/matrix), real-time shelf tracking, and automated POS reordering.";
const BAKERY_DESC = "Batch-expiry tracking, integrated weighing-scale POS interfaces, and rapid touch-billing nodes.";
const GOV_DESC = "Air-gapped mission-critical infrastructure, local database redundancy, and role-based audit compliance.";

export const allClients: ClientData[] = [
  // GOVERNMENT & PUBLIC SECTOR (3)
  { name: "SINDH POLICE", category: "Government & Public Sector", highlighted: true  , logo: "/clients/government/sindh-police.png", description: GOV_DESC },
  { name: "SINDH FISHERIES DEPARTMENT", category: "Government & Public Sector", highlighted: true  , logo: "/clients/government/fisheries.jfif", description: GOV_DESC },
  { name: "SUI SOUTHERN GAS COMPANY (SSGC)", category: "Government & Public Sector", highlighted: true , logo: "/clients/government/ssgc.png", description: GOV_DESC },

  // MARTS (15)
  { name: "BAIG MART", category: "Marts & Superstores", highlighted: true  , logo: "/clients/marts/baig-mart.jpeg", description: MART_DESC },
  { name: "SUPER SAVE MART", category: "Marts & Superstores"  , logo: "/clients/marts/super-save.jfif", description: MART_DESC },
  { name: "DAILY BACHAT MART", category: "Marts & Superstores"  , logo: "/clients/marts/daily-bachat.jfif", description: MART_DESC },
  { name: "GOHAR MART", category: "Marts & Superstores"  , logo: "/clients/marts/gohar-mart.jfif", description: MART_DESC },
  { name: "NB MART", category: "Marts & Superstores"  , logo: "/clients/marts/nb%20mart.jfif", description: MART_DESC },
  { name: "SALAM MART (TAJ GASOLINE)", category: "Marts & Superstores"  , logo: "/clients/marts/salam-mart.jfif", description: MART_DESC },
  { name: "MAKRO MART", category: "Marts & Superstores"  , logo: "/clients/marts/makro-mart.jfif", description: MART_DESC },
  { name: "SUPER MADINAH PETRO MARTS", category: "Marts & Superstores", highlighted: true  , logo: "/clients/marts/super-madina.jfif", description: MART_DESC },
  { name: "SITARA E HILAL PETRO MARTS", category: "Marts & Superstores" , logo: null, description: MART_DESC },
  { name: "SALWA MART", category: "Marts & Superstores"  , logo: null, description: MART_DESC },
  { name: "INDUS BACHAT MART T M KHAN", category: "Marts & Superstores"  , logo: "/clients/marts/indus-bachat.jpg", description: MART_DESC },
  { name: "RJ MART", category: "Marts & Superstores"  , logo: "/clients/marts/rj-mart.jfif", description: MART_DESC },
  { name: "MAYA MART", category: "Marts & Superstores"  , logo: null, description: MART_DESC },
  { name: "OZAN MART", category: "Marts & Superstores"  , logo: "/clients/marts/ozan-mart.jfif", description: MART_DESC },
  { name: "S BROTHER MART", category: "Marts & Superstores" , logo: null, description: MART_DESC },

  // RESTAURANTS (28)
  { name: "SUPER MADINAH RESTAURANT", category: "Restaurants & Cafés", highlighted: true  , logo: "/clients/restaurants/super-madina-restaurant.jfif", description: RESTAURANT_DESC },
  { name: "DA VINCI", category: "Restaurants & Cafés", highlighted: true  , logo: "/clients/restaurants/da-vinci.jpeg", description: RESTAURANT_DESC },
  { name: "LAMOOSH", category: "Restaurants & Cafés", highlighted: true  , logo: "/clients/restaurants/la-moosh.jfif", description: RESTAURANT_DESC },
  { name: "GRILL TOWN", category: "Restaurants & Cafés", highlighted: true  , logo: "/clients/restaurants/grill-town.jfif", description: RESTAURANT_DESC },
  { name: "AL FAJR", category: "Restaurants & Cafés", highlighted: true  , logo: "/clients/restaurants/al%20fajr.png", deployments: 3, description: RESTAURANT_DESC },
  { name: "SHAMA TIKKA HOUSE", category: "Restaurants & Cafés", highlighted: true  , logo: "/clients/restaurants/shama-tikka.jfif", description: RESTAURANT_DESC },
  { name: "PK ROLL", category: "Restaurants & Cafés"  , logo: "/clients/restaurants/pk-roll.jfif", description: RESTAURANT_DESC },
  { name: "CAFÉ ESSCAPE", category: "Restaurants & Cafés", highlighted: true  , logo: "/clients/restaurants/cafe-escape.jfif", description: RESTAURANT_DESC },
  { name: "PIZZA HOST N SPICY", category: "Restaurants & Cafés"  , logo: "/clients/restaurants/pizza-host.jfif", description: RESTAURANT_DESC },
  { name: "SUFI MEHFIL", category: "Restaurants & Cafés"  , logo: "/clients/restaurants/sufi-mehfil.jpg", description: RESTAURANT_DESC },
  { name: "ROOPA MAARI", category: "Restaurants & Cafés", highlighted: true  , logo: "/clients/restaurants/roopa-maari.jfif", description: RESTAURANT_DESC },
  { name: "BOMBAY RESTAURANT", category: "Restaurants & Cafés", highlighted: true  , logo: "/clients/restaurants/bombay-restaurant.jfif", description: RESTAURANT_DESC },
  { name: "MELLOW TERRACE RESTAURANT BAHRIA", category: "Restaurants & Cafés", highlighted: true  , logo: "/clients/restaurants/mellow-terrace.jfif", description: RESTAURANT_DESC },
  { name: "MANNAN HOTEL", category: "Restaurants & Cafés"  , logo: "/clients/restaurants/mannan-hotel.jpg", deployments: 2, description: RESTAURANT_DESC },
  { name: "HAMID BIRYANI", category: "Restaurants & Cafés", highlighted: true  , logo: "/clients/restaurants/hamid-biryani.jfif", deployments: 2, description: RESTAURANT_DESC },
  { name: "NASIR BIRYANI", category: "Restaurants & Cafés"  , logo: "/clients/restaurants/nasir-biryani.jfif", description: RESTAURANT_DESC },
  { name: "NIGHT LOADER BIRYANI", category: "Restaurants & Cafés" , logo: null, description: RESTAURANT_DESC },
  { name: "BAGHDADI BEEF PULAO", category: "Restaurants & Cafés"  , logo: "/clients/restaurants/baghdadi-pulao.jfif", description: RESTAURANT_DESC },
  { name: "ALLAH RAAZI BIRYANI", category: "Restaurants & Cafés", highlighted: true  , logo: "/clients/restaurants/Allah-razi.jfif", description: RESTAURANT_DESC },
  { name: "SULTAN NAHARI", category: "Restaurants & Cafés" , logo: null, description: RESTAURANT_DESC },
  { name: "CREEK HILLS BAHRIA", category: "Restaurants & Cafés", highlighted: true  , logo: "/clients/restaurants/creek-hills.png", description: RESTAURANT_DESC },
  { name: "BISTRO TONIGHT", category: "Restaurants & Cafés", highlighted: true  , logo: "/clients/restaurants/bistro-tonight.jpg", description: RESTAURANT_DESC },
  { name: "TIKKA JEE", category: "Restaurants & Cafés"  , logo: "/clients/restaurants/tikka-jee.png", description: RESTAURANT_DESC },
  { name: "ROOF TOP RESTAURANT", category: "Restaurants & Cafés"  , logo: "/clients/restaurants/the-rooftop.jpg", description: RESTAURANT_DESC },
  { name: "SKY ROOF TOP", category: "Restaurants & Cafés", highlighted: true  , logo: "/clients/restaurants/sky-rooftop.jfif", description: RESTAURANT_DESC },
  { name: "POCO FRIES", category: "Restaurants & Cafés"  , logo: "/clients/restaurants/poco-fries.png", description: RESTAURANT_DESC },
  { name: "AL SALATEEN RESTAURANT", category: "Restaurants & Cafés"  , logo: "/clients/restaurants/al-salateen.jpg", description: RESTAURANT_DESC },
  { name: "FLAVOUR FUSION BAHRIA", category: "Restaurants & Cafés", highlighted: true , logo: null, description: RESTAURANT_DESC },

  // PHARMACY (9)
  { name: "PAKISTAN CORPORATION PHARMACY", category: "Healthcare & Labs", highlighted: true  , logo: "/clients/pharmacy/pc-pharmacy.jfif", description: HEALTHCARE_DESC },
  { name: "STAR MEDICAL", category: "Healthcare & Labs"  , logo: "/clients/pharmacy/star-medical.jpg", description: HEALTHCARE_DESC },
  { name: "MEDI ZONE", category: "Healthcare & Labs"  , logo: "/clients/pharmacy/medi-zone.jfif", description: HEALTHCARE_DESC },
  { name: "ZAIN PHARMACY", category: "Healthcare & Labs"  , logo: null, description: HEALTHCARE_DESC },
  { name: "AL NASEEB PHARMACY", category: "Healthcare & Labs" , logo: null, description: HEALTHCARE_DESC },
  { name: "PARAGON PHARMACY", category: "Healthcare & Labs"  , logo: "/clients/pharmacy/paragon-pharmacy.jpg", description: HEALTHCARE_DESC },
  { name: "LIFE CARE PHARMACY", category: "Healthcare & Labs"  , logo: "/clients/pharmacy/life-care.jpg", description: HEALTHCARE_DESC },
  { name: "SEHAT HOSPITAL PHARMACY", category: "Healthcare & Labs", highlighted: true  , logo: "/clients/pharmacy/sehat-pharmacy.jfif", description: HEALTHCARE_DESC },
  { name: "DAWAI MEDICOS", category: "Healthcare & Labs" , logo: null, description: HEALTHCARE_DESC },

  // GARMENTS (6)
  { name: "LEMON DENIM GARMENTS", category: "Garments & Apparel", highlighted: true  , logo: "/clients/garments/lemon-denim.jfif", deployments: 2, description: APPAREL_DESC },
  { name: "R 99", category: "Garments & Apparel"  , logo: null, description: APPAREL_DESC },
  { name: "RED & BLACK", category: "Garments & Apparel"  , logo: "/clients/garments/red-black.jpg", description: APPAREL_DESC },
  { name: "TOOBA ARMY STORE", category: "Garments & Apparel", highlighted: true  , logo: "/clients/garments/tooba-army.jfif", description: APPAREL_DESC },
  { name: "TIFLI", category: "Garments & Apparel" , logo: "/clients/garments/tifli-store.jpg", description: APPAREL_DESC },
  { name: "CHERRY PICK", category: "Garments & Apparel"  , logo: "/clients/garments/cherry-pick.jfif", description: APPAREL_DESC },

  // BAKERY (5)
  { name: "HYDERABAD BAKERY", category: "Bakery & Sweets", highlighted: true , logo: "/clients/bakery/hyd-bakery.jfif", description: BAKERY_DESC },
  { name: "SOGHAT E SAJAWAL BAKERY", category: "Bakery & Sweets" , logo: null, description: BAKERY_DESC },
  { name: "MARHABA BAKERS & FAST FOOD", category: "Bakery & Sweets"  , logo: "/clients/bakery/marhaba-sweets.jpg", description: BAKERY_DESC },
  { name: "SHABBIR PALACE", category: "Bakery & Sweets"  , logo: "/clients/bakery/shabbir-palace.jfif", description: BAKERY_DESC },
  { name: "HUZAIFA RABRI HOUSE", category: "Bakery & Sweets" , logo: null, description: BAKERY_DESC },

  // HOSPITALS AND LABS (5)
  { name: "MUSLIM MARWAR HOSPITAL", category: "Healthcare & Labs"  , logo: "/clients/hospitals/muslim-marwar.png", description: HEALTHCARE_DESC },
  { name: "SMWS HOSPITAL KARACHI", category: "Healthcare & Labs", highlighted: true  , logo: "/clients/hospitals/smws-hospital.jfif", description: HEALTHCARE_DESC },
  { name: "ADVANCE MRI", category: "Healthcare & Labs", highlighted: true  , logo: "/clients/hospitals/advance-mri.jfif", description: HEALTHCARE_DESC },
  { name: "AMEEN LABORATORY", category: "Healthcare & Labs" , logo: null, description: HEALTHCARE_DESC },
  { name: "AB CLINIC KHI & HYD", category: "Healthcare & Labs", highlighted: true , logo: null, deployments: 2, description: HEALTHCARE_DESC },

  // ELECTRONICS (6)
  { name: "YASEEN ELECTRONICS", category: "Electronics & Retail", highlighted: true  , logo: "/clients/electronics/yaseen-electronics.jfif", description: TECH_DESC },
  { name: "UMER ELECTRONICS", category: "Electronics & Retail"  , logo: "/clients/electronics/umar-electronics.jpg", description: TECH_DESC },
  { name: "UBAID ELECTRONICS", category: "Electronics & Retail"  , logo: null, description: TECH_DESC },
  { name: "ASAD ELECTRONICS", category: "Electronics & Retail"  , logo: null, description: TECH_DESC },
  { name: "NAQI ELECTRONICS", category: "Electronics & Retail", highlighted: true  , logo: "/clients/electronics/naqi-elec.jfif", description: TECH_DESC },
  { name: "GHAZI ELECTRONICS", category: "Electronics & Retail"  , logo: "/clients/electronics/ghazi-electronics.jpg", description: TECH_DESC },

  // SCHOOLS (2)
  { name: "YAQEEN EDUCATION FOUNDATION", category: "Education", highlighted: true  , logo: "/clients/schools/Yaqeen-edu.png" },
  { name: "PROGENITORS HIGH SCHOOL", category: "Education", highlighted: true  , logo: "/clients/schools/phs-school.jfif" },

  // AUTO MOBILE AND PARTS (6)
  { name: "SHAHMEER AUTOS", category: "Automobile & Parts", highlighted: true  , logo: "/clients/autos/shameer-autos.jpg" },
  { name: "ATIF AUTOS", category: "Automobile & Parts"  , logo: "/clients/autos/atif-autos.jfif" },
  { name: "ABDULLAH AUTOS", category: "Automobile & Parts"  , logo: "/clients/autos/abdullah-autos.jfif" },
  { name: "RAIS AUTOS", category: "Automobile & Parts"  , logo: null },
  { name: "TAJ AUTOS", category: "Automobile & Parts", highlighted: true  , logo: "/clients/autos/taj-autos.jfif" },
  { name: "MEHRAN AUTOS", category: "Automobile & Parts", highlighted: true  , logo: "/clients/autos/mehran-autos.jpg" },

  // SHOES (2)
  { name: "BATA DELUX SHOES", category: "Footwear" , logo: null, description: APPAREL_DESC },
  { name: "MILLI FOOT WEAR", category: "Footwear"  , logo: "/clients/shoes/milli-footwear.jpg", description: APPAREL_DESC },

  // MOBILE AND ACCESSORIES (2)
  { name: "APPLE CARE", category: "Mobile & Accessories", highlighted: true , logo: "/clients/mobile/jugnu-gsm-ac.jfif", deployments: 2, description: TECH_DESC },
  { name: "APPLE CITY", category: "Mobile & Accessories", highlighted: true  , logo: "/clients/mobile/apple-city.jfif", description: TECH_DESC },
];
