import React, { useEffect } from "react";
import { AdsContainer } from "./AdsElements";

function Ads() {
  useEffect(() => {
    const pushAd = () => {
      try {
        const adsbygoogle = window.adsbygoogle;
        console.log({ adsbygoogle });
        adsbygoogle.push({});
      } catch (e) {
        console.error(e);
      }
    };

    let interval = setInterval(() => {
      // Check if Adsense script is loaded every 300ms
      if (window.adsbygoogle) {
        pushAd();
        // clear the interval once the ad is pushed so that function isn't called indefinitely
        clearInterval(interval);
      }
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <AdsContainer>
      <ins
        className="adsbygoogle"
        style={{ display: "inline-block", width: "30px", height: "50px" }}
        data-ad-client="ca-pub-12121212"
        data-ad-slot="12121212"
        data-ad-format="auto"
      />
    </AdsContainer>
  );
}

export default Ads;
