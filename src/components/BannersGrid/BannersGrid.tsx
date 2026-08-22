import type { Banner } from '../../types/banner';
import './BannersGrid.scss';

interface BannersGridProps {
    banners: Banner[];
}

function BannersGrid({ banners }: BannersGridProps) {
    return (
        <section className='banners-grid'>
            {banners.map((banner, index) => (
                <article key={index} className='banners-grid__item' style={{ backgroundImage: `url(${banner.image})` }}>
                    <div className='banners-grid__content'>
                        <h2 className='banners-grid__title'>{banner.title}</h2>
                        <p className='banners-grid__subtitle'>
                            {banner.subtitle.map((part, index) => (
                                <span key={index} className={part.highlight ? 'banners-grid__highlight' : ''}>
                                    {part.text}
                                </span>
                            ))}
                        </p>
                        <a href={banner.link} className='banners-grid__cta'>{banner.cta}</a>
                    </div>
                    <div className='banners-grid__gradient'></div>
                </article>
            ))}
        </section>
    )
}

export default BannersGrid;