interface shopItem {
  id?: number;
  productName: string;
  productPrice: number;
  productDescription: string;
  productSlug: string;
  productMedia: string[];
  isQuantityLimited: boolean;
}

type storeResponse = {
  status: boolean;
  message: string;
  data?: {
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
    products: shopItem[];
  };
};

type TopDistance = "0" | "vw";

interface shellProps {
  match: { params: { product?: string; shop?: string } };
}
