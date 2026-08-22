import ProductCarousel from '../ProductCarousel/ProductCarousel';
import './ProductSection.scss';

interface ProductSectionProp {
    categories: boolean
}

function ProductSection({ categories }: ProductSectionProp) {

    return (
        <section className='product-section'>
            <div className='product-section__container'>
                <div className='product-section__heading'>
                    <div className='product-section__line'></div>
                    <h2 className='product-section__title'>Produtos relacionados</h2>
                    <div className='product-section__line'></div>
                </div>
                <a href="/produtos" className={categories ? 'product-section__link-none' : 'product-section__link'}>Ver todos</a>
                <nav className={categories ? 'product-section__categories' : 'product-section__categories-none'} aria-label='Categorias de produtos'>
                    <a href="/celulares" className='product-section__category'>Celular</a>
                    <a href="/acessorios" className='product-section__category'>Acessórios</a>
                    <a href="/tablet" className='product-section__category'>Tablets</a>
                    <a href="/notebook" className='product-section__category'>Notebooks</a>
                    <a href="/tvs" className='product-section__category'>TVS</a>
                    <a href="/produtos" className='product-section__category'>Ver Todos</a>
                </nav>
            </div>
            <ProductCarousel />
        </section>
    )
}

export default ProductSection;