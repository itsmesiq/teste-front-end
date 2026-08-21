import { useEffect, useState } from "react";
import { getProducts } from "../../services/products";
import type { Product } from "../../types/product";

import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';

import ProductCard from "../ProductCard/ProductCard";
import './ProductSection.scss';

function ProductSection() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const CARD_WIDTH = 19;
    const CARD_GAP = 1.125;
    const CARD_STEP = CARD_WIDTH + CARD_GAP;
    const VISIBLE_PRODUCTS = 4;

    const handleNext = () => {
        setCurrentIndex((current) => Math.min(current + 1, products.length - 4));
    };

    const handlePrevious = () => {
        setCurrentIndex((current) => Math.max(current - 1, 0));
    };

    const canGoPrevious = currentIndex > 0;
    const canGoNext = currentIndex < products.length - 4;

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
        <section className="product-section">
            <div className="product-section__heading">
                <div className="product-section__line"></div>
                <h2 className="product-section__title">Produtos relacionados</h2>
                <div className="product-section__line"></div>
            </div>
            <a href="/produtos" className="product-section__link">Ver todos</a>
            <div className="product-section__carousel">
                <button type="button" className="product-section__arrow" onClick={handlePrevious} disabled={!canGoPrevious} aria-label="Produtos anteriores">
                    <img src={arrowLeft} alt="" />
                </button>
                <div className="product-section__viewport">
                    <div className="product-section__track" style={{ transform: `translateX(-${currentIndex * CARD_STEP}rem)` }}>
                        {products.map((product, index) => {
                            const isVisible =
                                index >= currentIndex &&
                                index < currentIndex + VISIBLE_PRODUCTS;

                            return (
                                <div className={`product-section__item ${isVisible ? 'product-section__item--visible' : ''}`} key={product.productName} >
                                    <ProductCard product={product} />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <button type="button" className="product-section__arrow" onClick={handleNext} disabled={!canGoNext} aria-label="Próximos produtos">
                    <img src={arrowRight} alt="" />
                </button>
            </div>
        </section>
    );
}

export default ProductSection;

