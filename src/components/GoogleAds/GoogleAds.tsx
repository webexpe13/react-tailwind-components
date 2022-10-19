import { useEffect } from "react";

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

const GoogleAds = ({ AD_ID, format = 'auto', responsive = true, layout, GA_ADSENSE_ID, layoutKey }: iGoogleAdsProps) => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, [])

  return (
    <div className="block w-full relative text-center">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={GA_ADSENSE_ID}
        data-ad-slot={AD_ID}
        data-ad-format={format}
        data-full-width-responsive={responsive}
        data-ad-layout={layout}
        data-ad-layout-key={layoutKey}
      >
      </ins>
    </div>
  );
};

export default GoogleAds;
