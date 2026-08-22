export interface BannerSubtitle {
    text: string;
    highlight: boolean;
}

export interface Banner {
    title: string;
    subtitle: BannerSubtitle[];
    image: string;
    cta: string;
    link: string;
}