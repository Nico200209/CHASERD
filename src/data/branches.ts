import type { Branch } from "@/types";

export const branches: Branch[] = [
  {
    id: "plaza-amer",
    name: "Plaza Amer",
    address: "Plaza Amer, Av. Rómulo Betancourt 1212, Santo Domingo 10112",
    hours: "Todos los días: 9:00 AM – 11:00 PM",
    whatsapp: "18098806745",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Plaza+Amer%2C+Av.+R%C3%B3mulo+Betancourt+1212%2C+Santo+Domingo+10112",
  },
];

export const branchesLabel = branches.length === 1 ? "Sucursal" : "Sucursales";
