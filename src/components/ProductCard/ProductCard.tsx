import type { Product } from '../../types/product';
import { calculateInstallment, formatCurrency } from '../../utils/currency';
import './ProductCard.scss';

interface ProductCardProps {
    product: Product;
}

function ProductCard({ product }: ProductCardProps) {
    const installment = calculateInstallment(product.price, 2);

    return (
        <article className='product-card'>
            <img className='product-card__image' src={product.photo} alt={product.productName} />

            <div className='product-card__content'>
                <h3 className='product-card__name'>{product.productName}</h3>
                <div className='product-card__price-container'>
                    <strong className='product-card__price'>{formatCurrency(product.price)}</strong>
                    <p className='product-card__installment'>ou 2x de {formatCurrency(installment)} sem juros</p>
                </div>
                <p className='product-card__shipping'>Frete Grátis</p>
                <button className='product-card__button'>Comprar</button>
            </div>
        </article>
    )
}

export default ProductCard;