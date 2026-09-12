import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/mk-mart-logo.jpg.asset.json";
import { categories } from "@/data/products";
import { generalWaLink, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="MK Mart Company logo"
              width={52}
              height={52}
              loading="lazy"
              className="h-13 w-13 rounded-full object-contain"
            />
            <span className="font-display text-lg font-bold text-ink">{site.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A Pakistani online store offering a variety of useful products with simple WhatsApp
            ordering and Cash on Delivery.
          </p>
          <a href={generalWaLink} target="_blank" rel="noreferrer" className="btn-base btn-gold mt-5">
            Order via WhatsApp
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide text-ink uppercase">Categories</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {categories.map((c) => (
              <li key={c}>
                <Link
                  to="/products"
                  search={{ category: c }}
                  className="transition-colors hover:text-primary"
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide text-ink uppercase">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={generalWaLink} target="_blank" rel="noreferrer" className="hover:text-primary">
                {site.whatsappNumber}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-primary">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/80">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Owner: {site.owner} &middot; {site.website}</p>
        </div>
      </div>
    </footer>
  );
}
