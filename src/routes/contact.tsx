import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { categories } from "@/data/products";
import { site, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — MK Mart Company | WhatsApp Orders" },
      {
        name: "description",
        content:
          "Contact MK Mart Company on WhatsApp 0317 1131039 or email mk8965897@gmail.com for product details and Cash on Delivery orders in Pakistan.",
      },
      { property: "og:title", content: "Contact MK Mart Company" },
      {
        property: "og:description",
        content: "Reach MK Mart Company on WhatsApp or email for orders and product information.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState<string>("");
  const [details, setDetails] = useState("");

  const message = `Assalam o Alaikum ${site.name},

Name: ${name || "-"}
Phone: ${phone || "-"}
City: ${city || "-"}
Category: ${category || "-"}
Order details: ${details || "-"}

Payment: Cash on Delivery`;

  return (
    <div className="container-page py-12 sm:py-16">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Contact Us</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">We are here to help</h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Send your order details through WhatsApp and we will confirm availability, price and
          delivery.
        </p>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <a
            href={waLink(`Assalam o Alaikum ${site.name}, I need help with an order.`)}
            target="_blank"
            rel="noreferrer"
            className="card-premium flex items-start gap-4 p-6"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <MessageCircle className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block font-semibold text-ink">WhatsApp</span>
              <span className="block text-sm text-muted-foreground">{site.whatsappNumber}</span>
            </span>
          </a>

          <div className="card-premium flex items-start gap-4 p-6">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold-soft text-ink">
              <Phone className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block font-semibold text-ink">Phone</span>
              <span className="block text-sm text-muted-foreground">{site.whatsappNumber}</span>
            </span>
          </div>

          <a href={`mailto:${site.email}`} className="card-premium flex items-start gap-4 p-6">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold-soft text-ink">
              <Mail className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block font-semibold text-ink">Email</span>
              <span className="block text-sm break-all text-muted-foreground">{site.email}</span>
            </span>
          </a>

          <div className="card-premium flex items-start gap-4 p-6">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold-soft text-ink">
              <MapPin className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block font-semibold text-ink">Address</span>
              <span className="block text-sm text-muted-foreground">{site.address}</span>
            </span>
          </div>
        </div>

        <form
          className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(waLink(message), "_blank", "noopener");
          }}
        >
          <h2 className="text-xl font-bold">Quick Order Form</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Fill the form and continue on WhatsApp. No online payment required.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="font-medium text-ink">Your Name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-base outline-none focus:border-primary"
                placeholder="Full name"
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium text-ink">Phone Number</span>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                inputMode="tel"
                className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-base outline-none focus:border-primary"
                placeholder="03XX XXXXXXX"
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium text-ink">City</span>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-base outline-none focus:border-primary"
                placeholder="City / Area"
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium text-ink">Category</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-base outline-none focus:border-primary"
              >
                <option value="">Select a category</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-4 block text-sm">
            <span className="font-medium text-ink">Order Details</span>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              rows={4}
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-base outline-none focus:border-primary"
              placeholder="Product name, size/colour and quantity"
            />
          </label>

          <button type="submit" className="btn-base btn-primary mt-6 w-full">
            Send on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
