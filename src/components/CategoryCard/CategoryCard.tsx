import type React from 'react';
import './CategoryCard.scss';

interface CategoryCardProps {
    name: string;
    image: string;
    href: string;
}

function CategoryCard({ name, image, href }: CategoryCardProps) {
    return (
        <a href={href} className='category-card'>
            <div className='category-card__box'>
                <div className='category-card__icon' style={{ '--category-icon': `url(${image})` } as React.CSSProperties} aria-hidden="true"></div>
            </div>
            <span className='category-card__name'>{name}</span>
        </a>
    )
}

export default CategoryCard;