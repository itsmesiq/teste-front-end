import { useEffect, useState } from "react";
import { getProducts } from "../../services/products";
import type { Product } from "../../types/product";

import { ArrowLeftIcon, ArrowRightIcon } from '../../utils/icons';

import ProductCard from "../ProductCard/ProductCard";
import './ProductCarousel.scss';

function ProductCarousel() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const CARD_WIDTH = 19;
    const CARD_GAP = 1.125;
    const CARD_STEP = CARD_WIDTH + CARD_GAP;
    const VISIBLE_PRODUCTS = 4;

    const handleNext = () => {
        setCurrentIndex((current) => Math.min(current + 1, products.length - VISIBLE_PRODUCTS));
    };

    const handlePrevious = () => {
        setCurrentIndex((current) => Math.max(current - 1, 0));
    };

    const canGoPrevious = currentIndex > 0;
    const canGoNext = currentIndex < products.length - VISIBLE_PRODUCTS;

    useEffect(() => {
        async function loadProducts() {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch {
                setError('Não foi possível carregar os produtos. Por favor, tente novamente mais tarde.');
            } finally {
                setIsLoading(false);
            }
        }

        loadProducts();
    }, []);

    if (isLoading) {
        return <p>Carregando produtos...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div className="product-carousel__carousel">
            <button type="button" onClick={handlePrevious} disabled={!canGoPrevious} aria-label="Produtos anteriores" className={`product-carousel__arrow ${canGoPrevious ? '' : 'product-carousel__arrow--disabled'}`}>
                <img src={ArrowLeftIcon} alt="" />
            </button>
            <div className="product-carousel__viewport">
                <div className="product-carousel__track" style={{ transform: `translateX(-${currentIndex * CARD_STEP}rem)` }}>
                    {products.map((product, index) => {
                        const isVisible =
                            index >= currentIndex &&
                            index < currentIndex + VISIBLE_PRODUCTS;

                        return (
                            <div className={`product-carousel__item ${isVisible ? 'product-carousel__item--visible' : ''}`} key={product.productName} >
                                <ProductCard product={product} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <button type="button" onClick={handleNext} disabled={!canGoNext} aria-label="Próximos produtos" className={`product-carousel__arrow ${canGoNext ? '' : 'product-carousel__arrow--disabled'}`} >
                <img src={ArrowRightIcon} alt="" />
            </button>
        </div>
    );
}

export default ProductCarousel;

