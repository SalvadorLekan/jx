interface ShopItem {
  id: number;
  productName: string;
  productPrice: number;
  productDescription: string;
  productSlug: string;
  productMedia: string[];
  isQuantityLimited: boolean;
}

interface ShopData {
  id: number;
  storeName: string;
  storeCurrency: string;
  storeSlug: string;
  welcomeMessage: string;
  contact: {
    whatsapp: string;
    phoneNumber: string;
    email: string;
  };
  socialMedia?: { [key: string]: string };
  business: {
    businessId: number;
    businessDescription: string;
    businessName: string;
  };
  products: ShopItem[];
}

interface StoreResponse {
  status: boolean;
  message: string;
  data?: ShopData;
}

type LeftDistance = "0" | "vw";

interface ShellProps {
  match: { params: { product?: string; shop: string } };
}

type ProductPropsType = {
  shopItem: ShopItem[];
  currency: string;
  match: { params: { item: string; shop: string } };
};
