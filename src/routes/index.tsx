import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Baby,
  HandCoins,
  Headphones,
  Laptop,
  MessageCircle,
  Package,
  ShieldCheck,
  Shirt,
  Smartphone,
  Sparkles,
  Truck,
  Watch,
  Footprints,
} from "lucide-react";
import heroImg from "@/assets/hero-products.jpg";
import { ProductCard } from "@/components/ProductCard";
import { categories, categoryImages, products, type Category } from "@/data/products";
import { generalWaLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MK Mart Company — Shop Smart With Cash on Delivery" },
      {
        name: "description",
        content:
          "Shop laptops, mobiles, clothes, shoes, cosmetics, watches and kids products at MK Mart Company. Easy WhatsApp ordering with Cash on Delivery across Pakistan.",
      },
      { property: "og:title", content: "MK Mart Company — Shop Smart. Shop With Confidence." },
      {
        property: "og:description",
        content:
          "Quality products with Cash on Delivery across Pakistan. Order easily through WhatsApp.",
      },
    ],
  }),
  component: Index,
});

const categoryIcons: Record<Category, typeof Laptop> = {
  Laptops: Laptop,
  Mobiles: Smartphone,
  Clothes: Shirt,
  Shoes: Footprints,
  Cosmetics: Sparkles,
  Watches: Watch,
  "Kids Products": Baby,
  "Other Products": Package,
};

const benefits = [
  {
    icon: ShieldCheck,
    title: "Quality Products",
    text: "We focus on providing useful and quality products for our customers.",
  },
  {
    icon: HandCoins,
    title: "Cash on Delivery",
    text: "Order conveniently and pay when your order is delivered.",
  },
  {
    icon: MessageCircle,
    title: "Easy Ordering",
    text: "Simple ordering through WhatsApp makes the process quick and convenient.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    text: "Customers can contact MK Mart Company through WhatsApp for product information and order assistance.",
  },
];

function Index() {
  const featured = products.filter((p) => p.featured);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-secondary/40">
        <div className="container-page grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-gold-soft px-4 py-1.5 text-xs font-semibold text-ink">
              <Truck className="h-4 w-4" /> Cash on Delivery across Pakistan
            </span>
            <h1 className="mt-5 text-4xl leading-[1.08] font-extrabold sm:text-5xl lg:text-6xl">
              Shop Smart.
              <br />
              <span className="text-primary">Shop With Confidence.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Discover quality products at MK Mart Company with convenient Cash on Delivery across
              Pakistan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="btn-base btn-primary">
                Shop Now <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={generalWaLink}
                target="_blank"
                rel="noreferrer"
                className="btn-base btn-outline"
              >
                <MessageCircle className="h-4 w-4" /> Order via WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-lift">
              <img
                src={heroImg}
                alt="Laptops, mobiles, watches, shoes and cosmetics available at MK Mart Company"
                width={1408}
                height={1008}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container-page py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Categories</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Shop By Category</h2>
          <p className="mt-3 text-muted-foreground">
            Pick a category to see the products available in our store.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c) => {
            const Icon = categoryIcons[c];
            return (
              <Link
                key={c}
                to="/products"
                search={{ category: c }}
                className="card-premium group flex flex-col overflow-hidden"
              >
                <div className="aspect-4/3 overflow-hidden bg-muted">
                  <img
                    src={categoryImages[c]}
                    alt={c}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 p-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-ink">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="min-w-0 truncate text-sm font-semibold text-ink">{c}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured products */}
      <section className="border-y border-border bg-secondary/40 py-16 sm:py-20">
        <div className="container-page">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Selection
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Featured Products</h2>
            </div>
            <Link
              to="/products"
              search={{}}
              className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary hover:underline sm:inline-flex"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className="mt-10 sm:hidden">
            <Link to="/products" search={{}} className="btn-base btn-outline w-full">
              View all products
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="container-page py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Trust</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Why Choose MK Mart Company?</h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="card-premium p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-soft text-ink">
                <b.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COD trust */}
      <section className="container-page pb-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center sm:px-12">
          <div className="gold-rule absolute inset-x-0 top-0 h-1" />
          <h2 className="text-3xl font-bold text-background sm:text-4xl">Shop With Confidence</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-background/75">
            Order your favorite products through MK Mart Company with Cash on Delivery. No online
            payment is required.
          </p>
          <a
            href={generalWaLink}
            target="_blank"
            rel="noreferrer"
            className="btn-base btn-gold mt-8"
          >
            <MessageCircle className="h-4 w-4" /> Order via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
