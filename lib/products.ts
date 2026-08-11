export type Product = {
  id: string
  name: string
  subtitle: string
  form: string
  count: string
  price: number
  image: string
  tag: string
  description: string
}

export const products: Product[] = [
  {
    id: "omega-3",
    name: "Omega-3 Fatty Acids",
    subtitle: "EPA & DHA",
    form: "Softgels",
    count: "60 Softgels",
    price: 899,
    image: "/product-omega3.png",
    tag: "Heart & Brain",
    description:
      "High-potency EPA & DHA to support cardiovascular health, brain function, and healthy joints.",
  },
  {
    id: "multivitamin",
    name: "Multivitamin & Multimineral",
    subtitle: "With Antioxidants",
    form: "Tablets",
    count: "60 Tablets",
    price: 699,
    image: "/product-multivitamin.png",
    tag: "Daily Essential",
    description:
      "A complete blend of essential vitamins, minerals and antioxidants for everyday vitality and immunity.",
  },
  {
    id: "green-tea",
    name: "Green Tea Extract",
    subtitle: "Nutraceutical",
    form: "Capsules",
    count: "60 Capsules",
    price: 799,
    image: "/product-greentea.png",
    tag: "Metabolism",
    description:
      "Standardized green tea extract rich in polyphenols to support metabolism and antioxidant defense.",
  },
  {
    id: "ginseng",
    name: "Ginseng Extract",
    subtitle: "Nutraceutical",
    form: "Capsules",
    count: "60 Capsules",
    price: 999,
    image: "/product-ginseng.png",
    tag: "Energy & Focus",
    description:
      "Premium ginseng root extract traditionally used to support energy, stamina and mental focus.",
  },
]

export const BRAND = {
  name: "Health Nutra",
  tagline: "Nourishing Life Naturally",
  phones: ["8109064346", "7987565674"],
  email: "healthnutra16@gmail.com",
  established: "March 16, 2026",
}

export const FREE_SHIPPING_OVER = 1500

// Format a number as Indian Rupees, e.g. 1899 -> "₹1,899"
export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount)
}
