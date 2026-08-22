import type { Brand } from "../../types/brand";
import BrandCard from "../BrandCard/BrandCard";
import './BrandSection.scss';

interface BrandSectionProps {
    brands: Brand[];
}

function BrandSection({ brands }: BrandSectionProps) {
    return(
        <section className="brand-section">
            <h2 className="brand-section__title">Navegue por marcas</h2>
            <div className="brand-section__brands">
            {brands.map((brand, index) => (
                <BrandCard key={index} brand={brand} />
            ))}
            </div>
        </section>
    )
}

export default BrandSection;