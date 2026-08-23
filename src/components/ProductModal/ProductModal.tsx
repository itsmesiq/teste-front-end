import type { Product } from "../../types/product";
import { CloseIcon } from "../../utils/icons";
import { formatCurrency } from "../../utils/currency";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import './ProductModal.scss';
import { useState, useEffect } from "react";

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

function ProductModal({ product, onClose }: ProductModalProps) {
    const [quantity, setQuantity] = useState(1);

    const total = product.price * quantity;

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <div className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
            <div className="product-modal__overlay" onClick={onClose}></div>
            <div className="product-modal__container">
                <button type="button" className="product-modal__close" onClick={onClose} aria-label="Fechar detalhes do produto">
                    <img src={CloseIcon} alt="" />
                </button>
                <div className="product-modal__main">
                    <img src={product.photo} alt={product.productName} className="product-modal__image" />
                    <div className="product-modal__content">
                        <div className="product-modal__heading">
                            <h2 id="product-modal-title" className="product-modal__title">{product.productName}</h2>
                            <span className="product-modal__price">{formatCurrency(total)}</span>
                        </div>
                        <div className="product-modal__description">
                            <p>{product.descriptionShort}</p>
                            <a href="/produto">Veja mais detalhes do produto &gt;
                            </a>
                        </div>
                        <div className="product-modal__actions">
                            <QuantitySelector quantity={quantity} onChange={setQuantity} />
                            <button type="button" className="product-modal__buy-button">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductModal;