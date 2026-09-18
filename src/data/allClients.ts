export type ClientCategory = 
  | "Marts & Superstores"
  | "Restaurants & Cafés"
  | "Healthcare & Labs"
  | "Garments & Apparel"
  | "Bakery & Sweets"
  | "Electronics & Home Appliances"
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

export const allClients: ClientData[] = [
  // GOVERNMENT & PUBLIC SECTOR (3)
  { name: "SINDH POLICE", category: "Government & Public Sector", highlighted: true, logo: "/clients/government/sindh-police.png", description: "Departmental POS billing, quartermaster procurement ledgers, and centralized institutional accounting." },
  { name: "SINDH FISHERIES DEPARTMENT", category: "Government & Public Sector", highlighted: true, logo: "/clients/government/fisheries.jfif", description: "Administrative billing desks, regional revenue reconciliation, and government audit ledger management." },
  { name: "SUI SOUTHERN GAS COMPANY (SSGC)", category: "Government & Public Sector", highlighted: true, logo: "/clients/government/ssgc.png", description: "High-volume billing desks, customer utility payment ledgers, and financial account balancing." },

  // MARTS (15)
  { name: "BAIG MART", category: "Marts & Superstores", highlighted: true, logo: "/clients/marts/baig-mart.jpeg", description: "Multi-lane barcode POS with integrated supplier payable ledgers and automated cash-counter reconciliation." },
  { name: "SUPER SAVE MART", category: "Marts & Superstores", logo: "/clients/marts/super-save.jfif", description: "High-speed retail POS checkout, vendor purchase accounting, and real-time inventory ledger sync." },
  { name: "DAILY BACHAT MART", category: "Marts & Superstores", logo: "/clients/marts/daily-bachat.jfif", description: "Fast counter POS, daily cash-drop accounting audits, and FMCG supplier ledger management." },
  { name: "GOHAR MART", category: "Marts & Superstores", logo: "/clients/marts/gohar-mart.jfif", description: "Integrated weighing-scale POS, cashier register balancing, and automated double-entry accounting." },
  { name: "NB MART", category: "Marts & Superstores", logo: "/clients/marts/nb%20mart.jfif", description: "Express lane POS billing, customer credit accounts, and supplier payment ledger integration." },
  { name: "SALAM MART (TAJ GASOLINE)", category: "Marts & Superstores", logo: "/clients/marts/salam-mart.jfif", description: "24/7 forecourt convenience POS, shift-end cash reconciliation, and automated vendor accounting." },
  { name: "MAKRO MART", category: "Marts & Superstores", logo: "/clients/marts/makro-mart.jfif", description: "Enterprise multi-terminal POS, wholesale customer ledgers, and automated stock valuation accounting." },
  { name: "SUPER MADINAH PETRO MARTS", category: "Marts & Superstores", highlighted: true, logo: "/clients/marts/super-madina.jfif", description: "High-volume fuel station mart POS, cashier shift balancing, and synchronized accounting ledgers." },
  { name: "SITARA E HILAL PETRO MARTS", category: "Marts & Superstores", logo: null, description: "Highway mart billing POS, daily sales book balancing, and automated vendor credit tracking." },
  { name: "SALWA MART", category: "Marts & Superstores", logo: null, description: "Barcode retail POS terminal, customer khata credit tracking, and monthly financial ledger reporting." },
  { name: "INDUS BACHAT MART T M KHAN", category: "Marts & Superstores", logo: "/clients/marts/indus-bachat.jpg", description: "Superstore multi-counter checkout, bulk supplier accounting, and daily profit & loss ledgers." },
  { name: "RJ MART", category: "Marts & Superstores", logo: "/clients/marts/rj-mart.jfif", description: "Rapid grocery checkout POS, cash drawer balancing registers, and purchase ledger management." },
  { name: "MAYA MART", category: "Marts & Superstores", logo: null, description: "Aisle-wise inventory POS billing, supplier invoice reconciliation, and day-end accounting summaries." },
  { name: "OZAN MART", category: "Marts & Superstores", logo: "/clients/marts/ozan-mart.jfif", description: "Multi-register retail POS, automated cashbook accounting, and supplier payable reconciliations." },
  { name: "S BROTHER MART", category: "Marts & Superstores", logo: null, description: "Neighborhood mart POS, customer ledger accounting, and daily sales register balancing." },

  // RESTAURANTS (28)
  { name: "SUPER MADINAH RESTAURANT", category: "Restaurants & Cafés", highlighted: true, logo: "/clients/restaurants/super-madina-restaurant.jfif", description: "Multi-station dining POS, kitchen order printing, and automated food cost & revenue accounting." },
  { name: "DA VINCI", category: "Restaurants & Cafés", highlighted: true, logo: "/clients/restaurants/da-vinci.jpeg", description: "Floor-plan dining POS, split-bill processing, and comprehensive daily sales & supplier ledgers." },
  { name: "LAMOOSH", category: "Restaurants & Cafés", highlighted: true, logo: "/clients/restaurants/la-moosh.jfif", description: "Café counter POS billing, barista ticket routing, and daily cash-in-drawer accounting balancing." },
  { name: "GRILL TOWN", category: "Restaurants & Cafés", highlighted: true, logo: "/clients/restaurants/grill-town.jfif", description: "Live order ticketing POS, parcel dispatch billing, and raw material inventory ledger tracking." },
  { name: "AL FAJR", category: "Restaurants & Cafés", highlighted: true, logo: "/clients/restaurants/al%20fajr.png", deployments: 3, description: "Fast-casual takeaway POS, cashier token sequencing, and daily banking ledger reconciliation." },
  { name: "SHAMA TIKKA HOUSE", category: "Restaurants & Cafés", highlighted: true, logo: "/clients/restaurants/shama-tikka.jfif", description: "Traditional dining POS billing, multi-waiter order tracking, and day-end kitchen expense ledgers." },
  { name: "PK ROLL", category: "Restaurants & Cafés", logo: "/clients/restaurants/pk-roll.jfif", description: "Express food counter POS, quick-cash checkout, and simplified daily sales ledger auditing." },
  { name: "CAFÉ ESSCAPE", category: "Restaurants & Cafés", highlighted: true, logo: "/clients/restaurants/cafe-escape.jfif", description: "Barista beverage POS, bakery counter ticketing, and synchronized expense ledger accounting." },
  { name: "PIZZA HOST N SPICY", category: "Restaurants & Cafés", logo: "/clients/restaurants/pizza-host.jfif", description: "Delivery & counter POS billing, rider cash collection tracking, and supplier expense ledgers." },
  { name: "SUFI MEHFIL", category: "Restaurants & Cafés", logo: "/clients/restaurants/sufi-mehfil.jpg", description: "Banquet table billing POS, party hall advance ledgers, and consolidated service accounting." },
  { name: "ROOPA MAARI", category: "Restaurants & Cafés", highlighted: true, logo: "/clients/restaurants/roopa-maari.jfif", description: "Patio dining terminal POS, guest check settlement, and automated end-of-shift revenue ledgers." },
  { name: "BOMBAY RESTAURANT", category: "Restaurants & Cafés", highlighted: true, logo: "/clients/restaurants/bombay-restaurant.jfif", description: "Heritage dining hall POS, steward billing management, and synchronized central accounting ledgers." },
  { name: "MELLOW TERRACE RESTAURANT BAHRIA", category: "Restaurants & Cafés", highlighted: true, logo: "/clients/restaurants/mellow-terrace.jfif", description: "Scenic dining POS, table folio settlement, and daily restaurant accounting reports." },
  { name: "MANNAN HOTEL", category: "Restaurants & Cafés", logo: "/clients/restaurants/mannan-hotel.jpg", deployments: 2, description: "High-frequency food token POS, fast counter checkout, and daily cashbook balancing ledgers." },
  { name: "HAMID BIRYANI", category: "Restaurants & Cafés", highlighted: true, logo: "/clients/restaurants/hamid-biryani.jfif", deployments: 2, description: "High-speed parcel billing POS, cash drawer balancing, and bulk meat supplier payable ledgers." },
  { name: "NASIR BIRYANI", category: "Restaurants & Cafés", logo: "/clients/restaurants/nasir-biryani.jfif", description: "Rush-hour takeaway POS, token queue settlement, and daily cashier sales ledger tracking." },
  { name: "NIGHT LOADER BIRYANI", category: "Restaurants & Cafés", logo: null, description: "Late-night parcel POS checkout, rider cash handover accounting, and supplier ledger entries." },
  { name: "BAGHDADI BEEF PULAO", category: "Restaurants & Cafés", logo: "/clients/restaurants/baghdadi-pulao.jfif", description: "Fast-counter dining POS, automated sales bill generation, and kitchen purchase ledgers." },
  { name: "ALLAH RAAZI BIRYANI AUR PAKWAN CENTER", category: "Restaurants & Cafés", highlighted: true, logo: "/clients/restaurants/Allah-razi.jfif", description: "Catering booking & retail counter POS with advance event billing and customer party ledgers." },
  { name: "SULTAN NAHARI", category: "Restaurants & Cafés", logo: null, description: "Breakfast rush counter POS, rapid parcel billing, and meat vendor payable ledger tracking." },
  { name: "CREEK HILLS BAHRIA", category: "Restaurants & Cafés", highlighted: true, logo: "/clients/restaurants/creek-hills.png", description: "Multi-hall dining POS, credit card terminal pairing, and consolidated daily financial accounting." },
  { name: "BISTRO TONIGHT", category: "Restaurants & Cafés", highlighted: true, logo: "/clients/restaurants/bistro-tonight.jpg", description: "Modern bistro table POS, dessert case cross-billing, and weekly vendor expense accounting." },
  { name: "TIKKA JEE", category: "Restaurants & Cafés", logo: "/clients/restaurants/tikka-jee.png", description: "Fast BBQ counter ticketing POS, phone order billing, and daily kitchen expense ledgers." },
  { name: "ROOF TOP RESTAURANT", category: "Restaurants & Cafés", logo: "/clients/restaurants/the-rooftop.jpg", description: "Open-air steward table POS, centralized cashier billing, and end-of-day revenue ledgers." },
  { name: "SKY ROOF TOP", category: "Restaurants & Cafés", highlighted: true, logo: "/clients/restaurants/sky-rooftop.jfif", description: "Skyline hospitality POS billing, lounge guest tab management, and automated sales ledgers." },
  { name: "POCO FRIES", category: "Restaurants & Cafés", logo: "/clients/restaurants/poco-fries.png", description: "Fast-food kiosk counter POS, rapid item ordering, and daily cash drawer accounting balance." },
  { name: "AL SALATEEN RESTAURANT", category: "Restaurants & Cafés", logo: "/clients/restaurants/al-salateen.jpg", description: "Fine dining & banquet hall POS billing, multi-floor table service management, and consolidated vendor expense accounting." },
  { name: "FLAVOUR FUSION BAHRIA", category: "Restaurants & Cafés", highlighted: true, logo: null, description: "Contemporary dining POS, kitchen ticket sync, and automated multi-tender financial accounting." },

  // PHARMACY (9)
  { name: "PAKISTAN CORPORATION PHARMACY", category: "Healthcare & Labs", highlighted: true, logo: "/clients/pharmacy/pc-pharmacy.jfif", description: "Wholesale & retail medicine POS with batch expiry tracking and automated distributor purchase ledgers." },
  { name: "STAR MEDICAL", category: "Healthcare & Labs", logo: "/clients/pharmacy/star-medical.jpg", description: "Batch-tracked medicine POS billing, strip-cutting pricing, and supplier payable accounting." },
  { name: "MEDI ZONE", category: "Healthcare & Labs", logo: "/clients/pharmacy/medi-zone.jfif", description: "Retail pharmacy counter POS, prescription billing, and automated pharmaceutical purchase ledgers." },
  { name: "ZAIN PHARMACY", category: "Healthcare & Labs", logo: null, description: "Fast prescription POS checkout, customer medical khata accounts, and daily cashbook registers." },
  { name: "AL NASEEB PHARMACY", category: "Healthcare & Labs", logo: null, description: "Medicine retail POS, batch expiry tracking, and distributor credit ledger reconciliation." },
  { name: "PARAGON PHARMACY", category: "Healthcare & Labs", logo: "/clients/pharmacy/paragon-pharmacy.jpg", description: "OTC & pharmaceutical POS billing, supplier invoice matching, and daily sales ledgers." },
  { name: "LIFE CARE PHARMACY", category: "Healthcare & Labs", logo: "/clients/pharmacy/life-care.jpg", description: "High-speed medical counter POS, customer credit ledgers, and distributor payment accounting." },
  { name: "SEHAT HOSPITAL PHARMACY", category: "Healthcare & Labs", highlighted: true, logo: "/clients/pharmacy/sehat-pharmacy.jfif", description: "24/7 inpatient pharmacy POS, ward medicine billing, and integrated pharmaceutical ledgers." },
  { name: "DAWAI MEDICOS", category: "Healthcare & Labs", logo: null, description: "Retail medicine sales POS, cash drawer balancing, and pharmacy supplier accounts management." },

  // GARMENTS (6)
  { name: "LEMON DENIM GARMENTS", category: "Garments & Apparel", highlighted: true, logo: "/clients/garments/lemon-denim.jfif", deployments: 2, description: "Apparel retail POS, barcode tag generation, and seasonal supplier credit ledger accounting." },
  { name: "R 99", category: "Garments & Apparel", logo: null, description: "Fast-fashion discount apparel POS, high-volume counter billing, and supplier purchase accounting." },
  { name: "RED & BLACK", category: "Garments & Apparel", logo: "/clients/garments/red-black.jpg", description: "Boutique garment POS, customer exchange billing, and daily fashion store accounting balances." },
  { name: "TOOBA ARMY STORE", category: "Garments & Apparel", highlighted: true, logo: "/clients/garments/tooba-army.jfif", description: "Custom uniform billing POS, institutional purchase order invoicing, and contract accounting ledgers." },
  { name: "TIFLI", category: "Garments & Apparel", logo: "/clients/garments/tifli-store.jpg", description: "Children's wear retail POS, barcode scanning checkout, and automated vendor purchase ledgers." },
  { name: "CHERRY PICK", category: "Garments & Apparel", logo: "/clients/garments/cherry-pick.jfif", description: "Fashion boutique POS billing, multi-buy bundle pricing, and end-of-day cash reconciliation." },

  // BAKERY (5)
  { name: "HYDERABAD BAKERY", category: "Bakery & Sweets", highlighted: true, logo: "/clients/bakery/hyd-bakery.jfif", description: "Weight-scale integrated bakery POS, confectionery billing, and daily ingredient purchase ledgers." },
  { name: "SOGHAT E SAJAWAL BAKERY", category: "Bakery & Sweets", logo: null, description: "Traditional sweet counter POS, live scale pricing, and daily raw milk & sugar expense ledgers." },
  { name: "MARHABA BAKERS & FAST FOOD", category: "Bakery & Sweets", logo: "/clients/bakery/marhaba-sweets.jpg", description: "Dual bakery & fast-food counter POS, unified billing receipt, and consolidated sales accounting." },
  { name: "SHABBIR PALACE", category: "Bakery & Sweets", logo: "/clients/bakery/shabbir-palace.jfif", description: "Confectionery counter POS, cake advance booking billing, and daily cashier cash balancing." },
  { name: "HUZAIFA RABRI HOUSE", category: "Bakery & Sweets", logo: null, description: "Perishable dairy sales POS, weight-based counter billing, and daily production expense ledgers." },

  // HOSPITALS AND LABS (5)
  { name: "MUSLIM MARWAR HOSPITAL", category: "Healthcare & Labs", logo: "/clients/hospitals/muslim-marwar.png", description: "Inpatient billing POS, consultant fee reconciliation, and departmental hospital accounting." },
  { name: "SMWS HOSPITAL KARACHI", category: "Healthcare & Labs", highlighted: true, logo: "/clients/hospitals/smws-hospital.jfif", description: "Hospital admission billing POS, medical department revenue tracking, and general ledger ERP." },
  { name: "ADVANCE MRI", category: "Healthcare & Labs", highlighted: true, logo: "/clients/hospitals/advance-mri.jfif", description: "Diagnostic scan billing POS, automated receipt generation, and referral commission accounting ledgers." },
  { name: "AMEEN LABORATORY", category: "Healthcare & Labs", logo: null, description: "Pathology test billing POS, barcode slip generation, and daily diagnostic lab revenue accounting." },
  { name: "AB CLINIC KHI & HYD", category: "Healthcare & Labs", highlighted: true, logo: null, deployments: 2, description: "Multi-branch OPD counter POS, doctor appointment ticketing, and centralized clinic accounting." },

  // ELECTRONICS (6)
  { name: "YASEEN ELECTRONICS", category: "Electronics & Home Appliances", highlighted: true, logo: "/clients/electronics/yaseen-electronics.jfif", description: "Home appliance POS, serialized warranty billing, and customer installment plan ledgers." },
  { name: "UMER ELECTRONICS", category: "Electronics & Home Appliances", logo: "/clients/electronics/umar-electronics.jpg", description: "Electrical supply POS, bulk contractor billing, and supplier trade credit ledgers." },
  { name: "UBAID ELECTRONICS", category: "Electronics & Home Appliances", logo: null, description: "Electrical hardware counter POS, wholesale contractor pricing, and vendor payable accounting." },
  { name: "ASAD ELECTRONICS", category: "Electronics & Home Appliances", logo: null, description: "Home appliance billing POS, warranty register indexing, and customer hire-purchase ledgers." },
  { name: "NAQI ELECTRONICS", category: "Electronics & Home Appliances", highlighted: true, logo: "/clients/electronics/naqi-elec.jfif", description: "Appliance retail POS, hire-purchase installment tracking, and supplier credit accounting." },
  { name: "GHAZI ELECTRONICS", category: "Electronics & Home Appliances", logo: "/clients/electronics/ghazi-electronics.jpg", description: "Electrical wiring & fixtures POS, bulk measure conversions, and trade ledger reconciliation." },

  // SCHOOLS (2)
  { name: "YAQEEN EDUCATION FOUNDATION", category: "Education", highlighted: true, logo: "/clients/schools/Yaqeen-edu.png", description: "Foundation fee collection POS, donor receipting, and centralized academic ledger accounting." },
  { name: "PROGENITORS HIGH SCHOOL", category: "Education", highlighted: true, logo: "/clients/schools/phs-school.jfif", description: "Institutional tuition fee billing POS, student challan printing, and school financial accounts ERP." },

  // AUTO MOBILE AND PARTS (6)
  { name: "SHAHMEER AUTOS", category: "Automobile & Parts", highlighted: true, logo: "/clients/autos/shameer-autos.jpg", description: "Automotive spare parts POS, OEM part number indexing, and supplier credit ledger accounting." },
  { name: "ATIF AUTOS", category: "Automobile & Parts", logo: "/clients/autos/atif-autos.jfif", description: "Motorcycle parts counter POS, quick-cash billing, and vendor purchase ledger management." },
  { name: "ABDULLAH AUTOS", category: "Automobile & Parts", logo: "/clients/autos/abdullah-autos.jfif", description: "Spare parts retail POS, mechanic trade credit accounts, and daily cashbook balancing." },
  { name: "RAIS AUTOS", category: "Automobile & Parts", logo: null, description: "Replacement auto parts POS billing, customer invoice registers, and supplier ledger reconciliation." },
  { name: "TAJ AUTOS", category: "Automobile & Parts", highlighted: true, logo: "/clients/autos/taj-autos.jfif", description: "Multi-category auto parts POS, wholesale dealer accounts, and real-time inventory ledger sync." },
  { name: "MEHRAN AUTOS", category: "Automobile & Parts", highlighted: true, logo: "/clients/autos/mehran-autos.jpg", description: "High-volume auto parts POS, counter sales ticketing, and comprehensive supplier accounts ledger." },

  // SHOES (2)
  { name: "BATA DELUX SHOES", category: "Footwear", logo: null, description: "Branded footwear POS billing, seasonal stock replenishment, and daily sales ledger auditing." },
  { name: "MILLI FOOT WEAR", category: "Footwear", logo: "/clients/shoes/milli-footwear.jpg", description: "Footwear retail POS, size-variant barcode checkout, and vendor payment ledger reconciliation." },

  // MOBILE AND ACCESSORIES (3)
  { name: "APPLE CARE JUGNU", category: "Mobile & Accessories", highlighted: true, logo: "/clients/mobile/jugnu-gsm-ac.jfif", deployments: 2, description: "Mobile device servicing POS, repair job sheet invoicing, and spare parts purchase ledgers." },
  { name: "APPLE CITY", category: "Mobile & Accessories", highlighted: true, logo: "/clients/mobile/apple-city.jfif", description: "Smartphone retail POS, IMEI warranty billing, and second-hand trade-in accounting ledgers." },
  { name: "APPLE CARE", category: "Mobile & Accessories", highlighted: true, logo: null, description: "Mobile repair counter POS, customer ticketing billing, and technician commission accounting." },
];
