import axios from 'axios';
import type { Product, ProductsResponse } from '../types/Product';

// Tentei consumir direto da API da Econverse, mas o servidor não envia
// o header Access-Control-Allow-Origin e o navegador bloqueia a requisição
// por CORS. Como solução, baixei o JSON e deixei em /public/produtos.json
// para o axios continuar consumindo do mesmo jeito.
//
// const PRODUCTS_URL =
//   'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

const PRODUCTS_URL = '/produtos.json';

export async function fetchProducts(): Promise<Product[]> {
  const response = await axios.get<ProductsResponse>(PRODUCTS_URL);
  return response.data.products;
}
