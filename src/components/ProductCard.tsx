import { formatPrice, type Product } from "@/data/products";
import { site, waLink } from "@/lib/site";

export function ProductCard({ product }: { product: Product }) {
  const message = `Assalam o Alaikum ${site.name},\nI want to order:\n\nProduct: ${product.name}\nCategory: ${product.category}\nPrice: ${formatPrice(product.price)}${
    product.options ? `\n${product.options.label}: (please confirm)` : ""
  }\n\nPayment: Cash on Delivery`;

  return (
    <article className="card-premium group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          width={800}
          height={800}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-ink">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-base font-semibold">{product.name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>

        {product.options && (
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-muted-foreground">{product.options.label}:</span>
            {product.options.values.map((v) => (
              <span
                key={v}
                className="rounded-md border border-border px-2 py-0.5 text-xs text-foreground/80"
              >
                {v}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <span className="font-display text-lg font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          <a
            href={waLink(message)}
            target="_blank"
            rel="noreferrer"
            className="btn-base btn-primary px-4 py-2.5 text-sm"
          >
            Order Now
          </a>
        </div>
      </div>
    </article>
  );
}
