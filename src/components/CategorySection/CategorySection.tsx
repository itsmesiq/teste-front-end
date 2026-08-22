import './CategorySection.scss';
import category from '../../data/category.json';
import CategoryCard from '../CategoryCard/CategoryCard';

function CategorySection() {
    return (
        <section className='category-section'>
            {category.map((item, index) => (
                <CategoryCard
                    key={index}
                    name={item.name}
                    image={item.image}
                    href={item.href}
                />
            ))}
        </section>
    )
}

export default CategorySection;