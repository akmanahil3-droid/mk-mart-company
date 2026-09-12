import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { categories, products, type Category } from "@/data/products";
import { generalWaLink } from "@/lib/site";

type ProductSearch = { category?: Category };

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>): ProductSearch => {
    const c = search.category;
    return typeof c === "string" && (categories as readonly string[]).includes(c)
      ? { category: c as Category }
      : {};
  },
  head: () => ({
    meta: [
      { title: "Products — MK Mart Company | Cash on Delivery Shopping" },
      {
        name: "description",
        content:
          "Browse laptops, mobiles, clothes, shoes, cosmetics, watches and kids products at MK Mart Company. Order on WhatsApp with Cash on Delivery.",
      },
      { property: "og:title", content: "Products — MK Mart Company" },
      {
        property: "og:description",
        content: "Browse our full product range and order on WhatsApp with Cash on Delivery.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { category } = Route.useSearch();
  const list = category ? products.filter((p) => p.category === category) : products;

  return (
    <div className="container-page py-12 sm:py-16">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Our Store</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Products</h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Browse our categories and place your order through WhatsApp. Payment is collected as Cash
          on Delivery.
        </p>
      </header>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          to="/products"
          search={{}}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            category
              ? "border-border bg-card text-foreground/80 hover:border-gold hover:bg-gold-soft"
              : "border-primary bg-primary text-primary-foreground"
          }`}
        >
          All Products
        </Link>
        {categories.map((c) => (
          <Link
            key={c}
            to="/products"
            search={{ category: c }}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              category === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground/80 hover:border-gold hover:bg-gold-soft"
            }`}
          >
            {c}
          </Link>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {list.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">
          No products listed in this category yet. Contact us on WhatsApp for availability.
        </p>
      )}

      <div className="mt-16 rounded-3xl border border-border bg-secondary/70 p-8 text-center sm:p-12">
        <h2 className="text-2xl font-bold sm:text-3xl">Looking for something specific?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Send us a message on WhatsApp with the product you need and we will confirm availability
          and price.
        </p>
        <a
          href={generalWaLink}
          target="_blank"
          rel="noreferrer"
          className="btn-base btn-primary mt-6"
        >
          Order via WhatsApp
        </a>
      </div>
    </div>
  );
}
