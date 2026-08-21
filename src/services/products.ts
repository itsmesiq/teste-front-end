import type { Product } from '../types/product'

const PRODUCTS_URL = '/api/produtos.json';

interface ProductResponse {
    success: boolean;
    products: Product[];
}

export async function getProducts(): Promise<Product[]> {
    const response = await fetch(PRODUCTS_URL);

    if (!response.ok) {
        throw new Error('Não foi possível carregar os produtos.');
    }

    const data: ProductResponse = await response.json();

    if (!data.success) {
        throw new Error('A API não retornou sucesso ao buscar os produtos.');
    }

    return data.products;
}