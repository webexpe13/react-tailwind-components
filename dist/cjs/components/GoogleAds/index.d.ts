/// <reference types="react" />
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
export default GoogleAds;
