export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
  oldPrice?: number;
}

export interface ProductsResponse {
  products: Product[];
}
