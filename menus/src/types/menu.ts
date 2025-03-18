export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
  tags?: string[];
  available: boolean;
  popular?: boolean;
  allergens?: string[];
  nutritionalInfo?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
  };
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  image?: string;
  items: MenuItem[];
}

export interface Restaurant {
  id: string;
  name: string;
  logo?: string;
  description: string;
  categories: MenuCategory[];
  currency: string;
  contactInfo?: {
    phone?: string;
    email?: string;
    address?: string;
    website?: string;
    socialMedia?: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
    };
  };
}
