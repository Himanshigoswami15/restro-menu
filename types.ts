
export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  isBestseller?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  image: string;
  items: MenuItem[];
}
