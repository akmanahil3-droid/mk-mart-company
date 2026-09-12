import laptopImg from "@/assets/p-laptop.jpg";
import mobileImg from "@/assets/p-mobile.jpg";
import clothesImg from "@/assets/p-clothes.jpg";
import shoesImg from "@/assets/p-shoes.jpg";
import cosmeticsImg from "@/assets/p-cosmetics.jpg";
import watchImg from "@/assets/p-watch.jpg";
import kidsImg from "@/assets/p-kids.jpg";
import otherImg from "@/assets/p-other.jpg";

export const categories = [
  "Laptops",
  "Mobiles",
  "Clothes",
  "Shoes",
  "Cosmetics",
  "Watches",
  "Kids Products",
  "Other Products",
] as const;

export type Category = (typeof categories)[number];

export const categoryImages: Record<Category, string> = {
  Laptops: laptopImg,
  Mobiles: mobileImg,
  Clothes: clothesImg,
  Shoes: shoesImg,
  Cosmetics: cosmeticsImg,
  Watches: watchImg,
  "Kids Products": kidsImg,
  "Other Products": otherImg,
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  options?: { label: string; values: string[] };
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "lap-core-i5",
    name: "Core i5 Business Laptop",
    description: "Slim everyday laptop for office work, study and browsing.",
    price: 84500,
    category: "Laptops",
    image: laptopImg,
    options: { label: "Storage", values: ["256GB SSD", "512GB SSD"] },
    featured: true,
  },
  {
    id: "lap-student",
    name: "Student Notebook 14\"",
    description: "Lightweight notebook with long battery for daily classes.",
    price: 56000,
    category: "Laptops",
    image: laptopImg,
    options: { label: "RAM", values: ["8GB", "16GB"] },
  },
  {
    id: "mob-smart-pro",
    name: "Smart Phone Pro",
    description: "Large display smartphone with dual camera and fast charging.",
    price: 47900,
    category: "Mobiles",
    image: mobileImg,
    options: { label: "Colour", values: ["Black", "Silver", "Blue"] },
    featured: true,
  },
  {
    id: "mob-budget",
    name: "Everyday Budget Phone",
    description: "Reliable phone for calls, WhatsApp and everyday use.",
    price: 21500,
    category: "Mobiles",
    image: mobileImg,
  },
  {
    id: "clo-shirt",
    name: "Premium Cotton Shirt",
    description: "Soft breathable cotton shirt for formal and casual wear.",
    price: 2650,
    category: "Clothes",
    image: clothesImg,
    options: { label: "Size", values: ["S", "M", "L", "XL"] },
    featured: true,
  },
  {
    id: "clo-kurta",
    name: "Men's Wash & Wear Kurta",
    description: "Comfortable stitched kurta suitable for all seasons.",
    price: 3200,
    category: "Clothes",
    image: clothesImg,
    options: { label: "Size", values: ["M", "L", "XL"] },
  },
  {
    id: "sho-sneakers",
    name: "Casual Sport Sneakers",
    description: "Cushioned sneakers with durable sole for daily wear.",
    price: 4300,
    category: "Shoes",
    image: shoesImg,
    options: { label: "Size", values: ["39", "40", "41", "42", "43"] },
    featured: true,
  },
  {
    id: "sho-formal",
    name: "Classic Formal Shoes",
    description: "Smart formal shoes with soft lining and grip sole.",
    price: 5200,
    category: "Shoes",
    image: shoesImg,
    options: { label: "Size", values: ["40", "41", "42", "43"] },
  },
  {
    id: "cos-skincare",
    name: "Daily Skincare Set",
    description: "Cleanser, toner and moisturiser for a simple daily routine.",
    price: 3450,
    category: "Cosmetics",
    image: cosmeticsImg,
    featured: true,
  },
  {
    id: "cos-lipstick",
    name: "Matte Lipstick Pack",
    description: "Long lasting matte shades in a value pack.",
    price: 1250,
    category: "Cosmetics",
    image: cosmeticsImg,
    options: { label: "Shade", values: ["Nude", "Red", "Rose"] },
  },
  {
    id: "wat-chrono",
    name: "Leather Strap Chronograph",
    description: "Elegant analog watch with genuine-look leather strap.",
    price: 6900,
    category: "Watches",
    image: watchImg,
    options: { label: "Strap", values: ["Brown", "Black"] },
    featured: true,
  },
  {
    id: "wat-digital",
    name: "Digital Sports Watch",
    description: "Water resistant digital watch with backlight display.",
    price: 2400,
    category: "Watches",
    image: watchImg,
  },
  {
    id: "kid-toyset",
    name: "Kids Learning Toy Set",
    description: "Safe colourful toy set for early learning and play.",
    price: 1850,
    category: "Kids Products",
    image: kidsImg,
    featured: true,
  },
  {
    id: "kid-bag",
    name: "Kids School Backpack",
    description: "Light padded backpack with multiple compartments.",
    price: 2100,
    category: "Kids Products",
    image: kidsImg,
    options: { label: "Colour", values: ["Blue", "Pink"] },
  },
  {
    id: "oth-earbuds",
    name: "Wireless Earbuds",
    description: "Bluetooth earbuds with charging case and clear sound.",
    price: 3300,
    category: "Other Products",
    image: otherImg,
    featured: true,
  },
  {
    id: "oth-bottle",
    name: "Stainless Steel Water Bottle",
    description: "Leak proof insulated bottle for home, office and travel.",
    price: 1450,
    category: "Other Products",
    image: otherImg,
  },
];

export const formatPrice = (value: number) =>
  `Rs ${value.toLocaleString("en-PK")}`;
