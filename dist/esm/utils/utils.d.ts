import { iArticle, iSEO } from "../shared/interfaces";
export declare const IS_DEV_MODE: boolean;
/**
 *
 * @param classes string
 * @returns string
 */
export declare const combineClasses: (...classes: any) => string;
/**
 * Returns Device Type tablet , mobile, desktop
 * @returns string
 */
export declare const getDeviceType: () => string;
/**
 * Returns true if desktop
 * @returns boolean
 */
export declare const isDesktopDevice: () => boolean;
/**
 * Returns true if mobile
 * @returns boolean
 */
export declare const isMobileDevice: () => boolean;
/**
 * Add no scroll class to body when modal isopen
 */
export declare const addBodyNoScroll: () => void;
/**
 * Removes no scroll class to body when modal isopen
 */
export declare const removeBodyNoScroll: () => void;
/**
 * Removes /pages from article path
 * @param path
 * @returns
 */
export declare const removePagesFromPath: (path?: string) => string;
/**
 * Removes /pages from article path
 * @param path
 * @returns
 */
export declare const transformPath: (path?: string) => string;
/**
 * Removes /public from images path
 * @param path
 * @returns string
 */
export declare const removePublicFromPath: (path?: string) => string;
/**
 * Removes /public from images path
 * @param path
 * @returns string
 */
export declare const transformImagePaths: (path?: string) => string;
/**
 * Returns Article details from SORTED_ARTICLES_BY_DATE wrt the path
 * @returns iArticle
 */
export declare const getArticleDetails: (pathname: string, ALL_ARTICLES: iArticle[]) => iArticle;
/**
 * Returns list of categories from your article list
 * @params ALL_ARTICLES: iArticle[]
 * @returns string[]
 */
export declare const getCategories: (ALL_ARTICLES: iArticle[]) => string[];
/**
 * Creates SEO Config from ArticleDetails.preview || ArticleDetails.seo ||  PAGE_SEO
 * @param PAGE_SEO : iSEO
 * @returns SEO config
 */
export declare const CREATE_BLOG_SEO_CONFIG: (PAGE_SEO: iSEO, WEBSITE_NAME: string, CURRENT_PATH: string) => {
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
export declare const webShare: (WEBSITE_URL: string) => boolean;
