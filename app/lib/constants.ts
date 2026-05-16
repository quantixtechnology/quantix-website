export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Demo", href: "#lead-form" },
  { label: "Contact", href: "#lead-form" },
];

export const FEATURES_DATA = [
  {
    iconKey: "Receipt",
    title: "Billing & POS",
    description:
      "Fast billing, GST-ready invoices, and point-of-sale built for retail and service businesses.",
    color: "#1a3a6b",
    bg: "#eef2ff",
  },
  {
    iconKey: "Package",
    title: "Inventory Management",
    description:
      "Track stock levels, set reorder alerts, and manage multiple product categories with ease.",
    color: "#059669",
    bg: "#ecfdf5",
  },
  {
    iconKey: "BarChart3",
    title: "Sales Reports",
    description:
      "Daily, weekly, and monthly reports with visual charts to make data-driven decisions.",
    color: "#f97316",
    bg: "#fff7ed",
  },
  {
    iconKey: "Users",
    title: "Employee Management",
    description:
      "Manage staff access, track attendance, and assign roles across your business.",
    color: "#7c3aed",
    bg: "#f5f3ff",
  },
  {
    iconKey: "Smartphone",
    title: "Android App",
    description:
      "Run your business from anywhere with a dedicated Android app for on-the-go management.",
    color: "#0891b2",
    bg: "#ecfeff",
  },
  {
    iconKey: "UserCircle",
    title: "Customer Management",
    description:
      "Maintain customer records, track purchase history, and manage loyalty and credits.",
    color: "#dc2626",
    bg: "#fef2f2",
  },
];

export const PLAN_FEATURES = [
  "Customer Android App",
  "Ecommerce Website",
  "Admin Dashboard Panel",
  "Android Admin App",
  "Delivery Partner App",
  "POS Billing System",
  "24-hour setup & launch",
  "Priority support",
];

export const PRICING = {
  monthly: 4999,
  setup: 1999,
  yearly: 49999,
  // 4999 × 12 = 59,988 → save 9,989 ≈ 2 months free
  yearlySavings: 9989,
};

export const BUSINESS_TYPES: { label: string; value: string }[] = [
  { label: "Grocery Delivery",  value: "GROCERY"       },
  { label: "Food Delivery",     value: "FOOD_DELIVERY"  },
  { label: "Laundry",           value: "LAUNDRY"        },
  { label: "Car / Bike Wash",   value: "CAR_WASH"       },
  { label: "Pharmacy",          value: "PHARMACY"       },
  { label: "Home Services",     value: "HOME_SERVICES"  },
  { label: "E-Commerce",        value: "ECOMMERCE"      },
  { label: "Cosmetics",         value: "COSMETICS"      },
  { label: "Meat Delivery",     value: "MEAT_DELIVERY"  },
  { label: "Furniture",         value: "FURNITURE"      },
  { label: "Directory",         value: "DIRECTORY"      },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    iconKey: "ClipboardList",
    title: "Choose Plan",
    description:
      "Pick the plan that fits your business. Monthly, yearly, or a one-time setup — flexible options for everyone.",
  },
  {
    step: "02",
    iconKey: "Settings2",
    title: "We Setup Your Business",
    description:
      "Our team configures the entire platform for you within 24 hours — products, taxes, staff, and branding included.",
  },
  {
    step: "03",
    iconKey: "TrendingUp",
    title: "Start Managing",
    description:
      "Go live immediately. Manage billing, inventory, and reports from any device, anywhere.",
  },
];
