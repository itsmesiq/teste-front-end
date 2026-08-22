import type { Banner } from '../../types/banner';
import './MainBanner.scss';

interface MainBannerProps {
    banner: Banner;
}

function MainBanner({ banner }: MainBannerProps) {
    return (
        <section className='main-banner' style={{ backgroundImage: `url(${banner.image})` }}>
            <div className='main-banner__content'>
                <h1 className='main-banner__title'>{banner.title}</h1>
                <p className='main-banner__subtitle'>
                    {banner.subtitle.map((part, index) => (
                        <span key={index} className={part.highlight ? 'main-banner__subtitle-highlight' : ''}>
                            {part.text}
                        </span>
                    ))}
                </p>
                <a href={banner.link} className='main-banner__cta'>{banner.cta}</a>
            </div>
            <div className='main-banner__gradient'></div>
        </section>
    )
}

export default MainBanner;