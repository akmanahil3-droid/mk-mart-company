export const site = {
  name: "MK Mart Company",
  owner: "Murtaza Akram",
  whatsappNumber: "03171131039",
  whatsappIntl: "923171131039",
  email: "mk8965897@gmail.com",
  address: "Jeewar Hathian, Tehsil Takht Bhai, District Mardan, Pakistan",
  website: "mkmartcompany.com",
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappIntl}?text=${encodeURIComponent(message)}`;
}

export const generalWaLink = waLink(
  `Assalam o Alaikum ${site.name}, I would like to know more about your products.`,
);
