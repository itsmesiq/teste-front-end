import type { Brand } from "../../types/brand";
import './BrandCard.scss';

interface BrandCardProps {
    brand: Brand;
}

function BrandCard({ brand }: BrandCardProps) {
    return (
        <a href={brand.link} aria-label={brand.name} className="brand-card">
            <img src={brand.image} alt="" className="brand-card__logo" />
        </a>
    )
}

export default BrandCard;