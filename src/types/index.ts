export type Category =
  | "desechables"
  | "pods"
  | "liquidos"
  | "pouches"
  | "accesorios";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  price: number; // DOP, integer
  image: string;
  flavors: string[];
  specs: {
    puffs?: number;
    nicotineMg?: number;
    batteryMah?: number;
    volumeMl?: number;
  };
  featured: boolean;
  inStock: boolean;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  hours: string;
  whatsapp: string;
  mapsUrl: string;
}
