import { MessageCircle } from "lucide-react";
import { generalWaLink } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={generalWaLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Order via WhatsApp"
      className="fixed right-4 bottom-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
