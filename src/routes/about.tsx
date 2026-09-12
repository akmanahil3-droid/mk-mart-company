import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, HandCoins, MessageCircle, Store } from "lucide-react";
import logo from "@/assets/mk-mart-logo.jpg.asset.json";
import { categories } from "@/data/products";
import { generalWaLink, site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — MK Mart Company | Pakistani Online Store" },
      {
        name: "description",
        content:
          "MK Mart Company is a Pakistani online shopping business owned by Murtaza Akram, offering a variety of products with WhatsApp ordering and Cash on Delivery.",
      },
      { property: "og:title", content: "About MK Mart Company" },
      {
        property: "og:description",
        content: "Learn about MK Mart Company, a Pakistani online store built on simple, trusted shopping.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Store,
    title: "A Variety of Products",
    text: "From electronics to clothing and daily use items, we keep a broad selection in one place.",
  },
  {
    icon: HandCoins,
    title: "Cash on Delivery",
    text: "No online payment is required. Customers pay when the order is delivered.",
  },
  {
    icon: MessageCircle,
    title: "Ordering on WhatsApp",
    text: "Orders are placed through a short WhatsApp message, no account or checkout needed.",
  },
  {
    icon: BadgeCheck,
    title: "Clear Communication",
    text: "We confirm product details, price and delivery information before dispatch.",
  },
];

function AboutPage() {
  return (
    <div className="pb-4">
      <section className="border-b border-border bg-secondary/50">
        <div className="container-page grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">About Us</p>
            <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              A Pakistani online store built on simple, honest shopping
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {site.name} is owned and operated by {site.owner} in {site.address}.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={logo.url}
              alt="MK Mart Company logo"
              width={280}
              height={280}
              className="h-52 w-52 rounded-full object-contain shadow-lift sm:h-64 sm:w-64"
            />
          </div>
        </div>
      </section>

      <section className="container-page py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Who We Are</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                MK Mart Company is a Pakistani online shopping business focused on providing
                customers with a variety of useful products through a simple and convenient shopping
                experience.
              </p>
              <p>
                The store offers categories including laptops, mobiles, clothes, shoes, cosmetics,
                watches, kids products and other products.
              </p>
              <p>
                Customers can browse products online, place their order through WhatsApp and receive
                their order through Cash on Delivery.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <h2 className="text-2xl font-bold sm:text-3xl">Our Mission</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To provide customers across Pakistan with a trustworthy and convenient way to shop
              online — clear product information, fair prices, easy WhatsApp ordering and Cash on
              Delivery, so shopping stays simple for everyone.
            </p>
            <div className="gold-rule mt-8 h-px" />
            <ul className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {categories.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 shrink-0 text-gold" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page pb-16">
        <h2 className="text-2xl font-bold sm:text-3xl">How We Work</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="card-premium p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-soft text-ink">
                <v.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link to="/products" className="btn-base btn-primary">
            Browse Products
          </Link>
          <a href={generalWaLink} target="_blank" rel="noreferrer" className="btn-base btn-outline">
            Order via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
