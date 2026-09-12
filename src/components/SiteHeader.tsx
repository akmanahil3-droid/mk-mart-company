import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/mk-mart-logo.jpg.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="container-page flex h-18 items-center justify-between gap-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo.url}
            alt="MK Mart Company logo"
            width={48}
            height={48}
            className="h-12 w-12 shrink-0 rounded-full object-contain"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-bold text-ink sm:text-lg">
              MK Mart Company
            </span>
            <span className="hidden text-xs tracking-wide text-muted-foreground sm:block">
              Cash on Delivery across Pakistan
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/products" className="btn-base btn-primary">
            Shop Now
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-ink lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-xl px-3 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/products"
              onClick={() => setOpen(false)}
              className="btn-base btn-primary mt-2 w-full"
            >
              Shop Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
