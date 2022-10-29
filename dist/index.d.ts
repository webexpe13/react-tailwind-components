/// <reference types="react" />
interface iAccordian {
    title: string;
    children: any;
    keepOpen?: boolean;
}
declare const Accordian: ({ title, children, keepOpen }: iAccordian) => JSX.Element;

declare enum THEMES {
    LIGHT = "light",
    DARK = "dark"
}
declare enum ImageSize {
    DEFAULT = "default",
    FUll = "full",
    SMALL = "small",
    MEDIUM = "medium",
    XS = "xs"
}
declare enum NavbarType {
    DEFAULT = "default",
    CENTERED = "centered"
}
declare enum TextAlign {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center",
    JUSTIFY = "justify",
    NONE = "unset"
}
declare enum LogoType {
    TEXT = "text",
    IMAGE = "image"
}
declare enum ListType {
    disc = "list-disc",
    number = "list-decimal",
    none = "list-none"
}
declare enum GAEventType {
    CLICK = "click",
    OPENSCREEN = "openscreen"
}

interface IAuthor {
    profilePic?: string;
    name: string;
    designation?: string;
    bio?: string;
    social?: iNavSocials[];
    twitterHandle?: string;
}
interface IArticleHeaderData {
    author: IAuthor;
    date: string;
    articleTitle: string;
    tags: string;
    thumbnail: string;
    shortIntro: string;
    category?: string;
}
interface iArticle {
    path: string;
    featureArticle?: boolean;
    preview: IArticleHeaderData;
    seo?: iSEO;
    hide?: boolean;
}
interface iSEO {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    twitterHandle?: string;
    author?: string;
    url?: string;
    canonical?: string;
}
interface iNavbar {
    openSearch: () => void;
    toggleSideMenu: () => void;
    changeTheme?: () => void;
    openSidebar: boolean;
    navSetup: iNavSetup;
    scrolled?: boolean;
    onShareClick: () => void;
}
interface iNavSetup {
    type: NavbarType;
}
interface iNavSetup {
    type: NavbarType;
    navLinks: iNavLink[];
    sideNavLinks: iNavLink[];
    socials: iNavSocials[];
    logo: iNavLogo;
}
interface iNavLogo {
    type: LogoType;
    logo: string;
    logoLight?: string;
}
interface iNavLink {
    label: string;
    path: string;
    type?: string;
    newTab?: boolean;
}
interface iNavSocials {
    link: string;
    icon: any;
}

interface IProp$1 {
    article: IArticleHeaderData;
    path: string;
}
declare const DefaultArticleCard: ({ article, path }: IProp$1) => JSX.Element;

interface IProp {
    article: IArticleHeaderData;
    path: string;
}
declare const FeaturedArticle: ({ article, path }: IProp) => JSX.Element;

interface IArticleImage {
    src: string;
    caption?: string;
    size?: ImageSize;
    alt?: string;
    className?: string;
}
declare const Image: ({ src, caption, size, alt, className }: IArticleImage) => JSX.Element;

declare const CodeBlock: ({ code, className }: {
    code: string;
    className?: string | undefined;
}) => JSX.Element;

declare const Footer: ({ WEBSITE_NAME }: {
    WEBSITE_NAME: string;
}) => JSX.Element;

declare global {
    interface Window {
        adsbygoogle: any;
    }
}
interface iGoogleAdsProps {
    AD_ID: string;
    GA_ADSENSE_ID: string;
    format?: string;
    responsive?: boolean;
    layout?: string;
    layoutKey?: string;
}
declare const GoogleAds: ({ AD_ID, format, responsive, layout, GA_ADSENSE_ID, layoutKey }: iGoogleAdsProps) => JSX.Element;

interface iLinkTo {
    href: string;
    passHref?: boolean;
    newTab?: boolean;
    children?: any;
    external?: boolean;
    className?: string;
    onClick?: any;
}
declare const LinkTo: ({ href, passHref, newTab, external, children, className, onClick }: iLinkTo) => JSX.Element;

interface iListProps {
    children?: any;
    className?: string;
    disk?: boolean;
    number?: boolean;
}
declare const List: ({ children, className, disk, number, }: iListProps) => JSX.Element;

interface iProps {
    line?: boolean;
    dots?: boolean;
    className?: string;
}
declare const Seperator: ({ line, dots, className }: iProps) => JSX.Element;

declare const Slider: ({ images, className, loop }: {
    images: string[];
    className?: string | undefined;
    loop?: boolean | undefined;
}) => JSX.Element;

interface iAvatar {
    author?: IAuthor;
    className?: string;
    name?: string;
}
declare const Avatar: ({ author, className, name }: iAvatar) => JSX.Element;

interface iVideoPlayer {
    url?: string;
    className?: String;
}
declare const VideoPlayer: ({ url, className }: iVideoPlayer) => JSX.Element;

declare const CURRENT_YEAR: number;

declare const MAYUR: IAuthor;
declare const RUPALI: IAuthor;
declare const MOCK_ARTICLES_LIST: iArticle[];

declare const IS_DEV_MODE: boolean;
/**
 *
 * @param classes string
 * @returns string
 */
declare const combineClasses: (...classes: any) => string;
/**
 * Returns Device Type tablet , mobile, desktop
 * @returns string
 */
declare const getDeviceType: () => string;
/**
 * Returns true if desktop
 * @returns boolean
 */
declare const isDesktopDevice: () => boolean;
/**
 * Returns true if mobile
 * @returns boolean
 */
declare const isMobileDevice: () => boolean;
/**
 * Add no scroll class to body when modal isopen
 */
declare const addBodyNoScroll: () => void;
/**
 * Removes no scroll class to body when modal isopen
 */
declare const removeBodyNoScroll: () => void;
/**
 * Removes /pages from article path
 * @param path
 * @returns
 */
declare const removePagesFromPath: (path?: string) => string;
/**
 * Removes /pages from article path
 * @param path
 * @returns
 */
declare const transformPath: (path?: string) => string;
/**
 * Removes /public from images path
 * @param path
 * @returns string
 */
declare const removePublicFromPath: (path?: string) => string;
/**
 * Removes /public from images path
 * @param path
 * @returns string
 */
declare const transformImagePaths: (path?: string) => string;
/**
 * Returns Article details from SORTED_ARTICLES_BY_DATE wrt the path
 * @returns iArticle
 */
declare const getArticleDetails: (pathname: string, ALL_ARTICLES: iArticle[]) => iArticle;
/**
 * Returns list of categories from your article list
 * @params ALL_ARTICLES: iArticle[]
 * @returns string[]
 */
declare const getCategories: (ALL_ARTICLES: iArticle[]) => string[];
/**
 * Creates SEO Config from ArticleDetails.preview || ArticleDetails.seo ||  PAGE_SEO
 * @param PAGE_SEO : iSEO
 * @returns SEO config
 */
declare const CREATE_BLOG_SEO_CONFIG: (PAGE_SEO: iSEO, WEBSITE_NAME: string, CURRENT_PATH: string) => {
    title: string | undefined;
    description: string | undefined;
    canonical: string;
    additionalMetaTags: {
        property: string;
        content: string | undefined;
    }[];
    openGraph: {
        type: string;
        locale: string;
        url: string | undefined;
        site_name: string;
        images: {
            url: string | undefined;
            width: number;
            height: number;
            alt: string | undefined;
        }[];
    };
    twitter: {
        handle: string | undefined;
        site: string | undefined;
        cardType: string;
    };
};
/**
 * Share link or article method
 * @returns false if desktop else open share window on mobile devices
 */
declare const webShare: (WEBSITE_URL: string) => boolean;

export { Accordian, Image as ArticleImage, CREATE_BLOG_SEO_CONFIG, CURRENT_YEAR, CodeBlock, DefaultArticleCard as DefaultArcicleCard, FeaturedArticle as FeaturedArcicleCard, Footer, GAEventType, GoogleAds, IArticleHeaderData, IAuthor, IS_DEV_MODE, ImageSize, LinkTo, List, ListType, LogoType, MAYUR, MOCK_ARTICLES_LIST, NavbarType, RUPALI, Seperator, Slider, THEMES, TextAlign, Avatar as UserAvatar, VideoPlayer as Video, addBodyNoScroll, combineClasses, getArticleDetails, getCategories, getDeviceType, iArticle, iNavLink, iNavLogo, iNavSetup, iNavSocials, iNavbar, iSEO, isDesktopDevice, isMobileDevice, removeBodyNoScroll, removePagesFromPath, removePublicFromPath, transformImagePaths, transformPath, webShare };
