export interface Product {
  id: string;
  title: string;
  subtitle: string;
  category: 'outerwear' | 'streetwear' | 'tailored' | 'footwear' | 'knitwear' | 'accessories';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  badgeType?: 'primary' | 'secondary' | 'error' | 'outline';
  edition?: string;
  image: string;
  gallery: string[];
  colors: {
    name: string;
    hex: string;
    image?: string;
  }[];
  sizes: string[];
  inStockSizes: string[];
  description: string;
  details: string[];
  specs: {
    silhouette: string;
    closure: string;
    lining: string;
    origin: string;
    fabricDensity?: string;
    sku: string;
  };
  materialsCare: string[];
  shippingInfo: string[];
  fitScale: string; // e.g. "True Oversized"
  fabricWeight: string; // e.g. "Substantial (680G)"
}

export interface Review {
  id: string;
  author: string;
  verified: boolean;
  edition: string;
  rating: number;
  date: string;
  content: string;
  sizePurchased: string;
  height: string;
}

export interface CartItem {
  product: Product;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}

export type ScreenType = 'home' | 'catalog' | 'product';
