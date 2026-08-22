import './MainBanner.scss';

interface MainBannerProps {
    title: string;
    subtitle: Array<{ text: string; highlight: boolean }>;
    imageUrl: string;
    ctaLabel: string;
    ctaHref: string;
}

function MainBanner({ title, subtitle, imageUrl, ctaLabel, ctaHref }: MainBannerProps) {
    return (
        <section className='main-banner' style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className='main-banner__content'>
                <h1 className='main-banner__title'>{title}</h1>
                <p className='main-banner__subtitle'>
                    {subtitle.map((part, index) => (
                        <span key={index} className={part.highlight ? 'main-banner__subtitle-highlight' : ''}>
                            {part.text}
                        </span>
                    ))}
                </p>
                <a href={ctaHref} className='main-banner__cta'>{ctaLabel}</a>
            </div>
            <div className='main-banner__gradient'></div>
        </section>
    )
}

export default MainBanner;