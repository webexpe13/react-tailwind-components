import { iArticle, iSEO } from "../shared/interfaces";
import { MOCK_ARTICLES_LIST } from "../shared/mockArticles";

// env
const env = process.env.NODE_ENV;
export const IS_DEV_MODE = env === "development" ? true : false;

/**
 *
 * @param classes string
 * @returns string
 */
export const combineClasses = function (...classes: any): string {
  return classes.filter((item: any) => !!item).join(" ");
};

/**
 * Returns Device Type tablet , mobile, desktop
 * @returns string
 */
export const getDeviceType = (): string => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

/**
 * Returns true if desktop
 * @returns boolean
 */
export const isDesktopDevice = (): boolean => {
  if (getDeviceType() === "desktop") {
    return true;
  } else {
    return false;
  }
};

/**
 * Returns true if mobile
 * @returns boolean
 */
export const isMobileDevice = (): boolean => {
  if (getDeviceType() === "mobile") {
    return true;
  } else {
    return false;
  }
};

/**
 * Add no scroll class to body when modal isopen
 */
export const addBodyNoScroll = (): void => {
  document.body.classList.add("no-scroll");
};

/**
 * Removes no scroll class to body when modal isopen
 */
export const removeBodyNoScroll = (): void => {
  document.body.classList.remove("no-scroll");
};

/**
 * Removes /pages from article path
 * @param path
 * @returns
 */
export const removePagesFromPath = (path = ""): string => {
  return path.replace("/pages", "").replace(".tsx", "");
};

/**
 * Removes /pages from article path
 * @param path
 * @returns
 */
export const transformPath = removePagesFromPath;

/**
 * Removes /public from images path
 * @param path
 * @returns string
 */
export const removePublicFromPath = (path = ""): string => {
  return path.replace("/public", "");
};

/**
 * Removes /public from images path
 * @param path
 * @returns string
 */
export const transformImagePaths = removePublicFromPath;

/**
 * Returns Article details from SORTED_ARTICLES_BY_DATE wrt the path
 * @returns iArticle
 */
 export const getArticleDetails = (pathname: string, ALL_ARTICLES: iArticle[] ): iArticle => {
  const articlePath = "/pages" + pathname + ".tsx";
  return (
    MOCK_ARTICLES_LIST.filter((each) => each.path.includes(articlePath))[0] ||
    ALL_ARTICLES.filter((each) => each.path.includes(articlePath))[0]
  );
};


/**
 * Returns list of categories from your article list
 * @params ALL_ARTICLES: iArticle[]
 * @returns string[]
 */
 export const getCategories = (ALL_ARTICLES: iArticle[]): string[] => {
  let categories: string[] = [];
  ALL_ARTICLES.forEach((each) => {
    if (each.preview.category && !categories.includes(each.preview.category)) {
      categories.push(each.preview.category);
    }
  });
  return categories;
};

/**
 * Creates SEO Config from ArticleDetails.preview || ArticleDetails.seo ||  PAGE_SEO
 * @param PAGE_SEO : iSEO
 * @returns SEO config
 */
export const CREATE_BLOG_SEO_CONFIG = (PAGE_SEO: iSEO, WEBSITE_NAME: string, CURRENT_PATH: string) => {
  // set url and path
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  let seo_config = {
    title: PAGE_SEO.title,
    description: PAGE_SEO.description,
    canonical: PAGE_SEO.canonical || origin,
    additionalMetaTags: [
      {
        property: "keywords",
        content: PAGE_SEO.keywords,
      },
      {
        property: "al:web:url",
        content: PAGE_SEO.url,
      },
    ],
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: PAGE_SEO.url,
      site_name: WEBSITE_NAME,
      images: [
        {
          url: PAGE_SEO.ogImage,
          width: 1200,
          height: 630,
          alt: PAGE_SEO.title,
        },
      ],
    },
    twitter: {
      handle: PAGE_SEO.twitterHandle,
      site: PAGE_SEO.url,
      cardType: "summary_large_image",
    },
  };
  return seo_config;
};

/**
 * Share link or article method
 * @returns false if desktop else open share window on mobile devices
 */
export const webShare = (WEBSITE_URL: string) => {
  const pageTitle = document.title;
  const url =
    typeof window !== "undefined" ? window.location.href : WEBSITE_URL;

  if (isDesktopDevice()) {
    return false;
  } else {
    if (typeof window !== "undefined" && navigator) {
      navigator
        .share({
          text: pageTitle,
          url: url,
        })
        .catch(console.error);
      return true;
    } else {
      return false;
    }
  }
};
