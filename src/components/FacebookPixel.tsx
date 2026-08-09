"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { CONSENT_EVENT, ConsentState, getStoredConsent } from "@/lib/consent";

const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ?? "1278366556967335";

/**
 * Only loads the Meta Pixel once the visitor has granted marketing
 * consent. Renders nothing until then — no init, no PageView, no
 * noscript tracking pixel.
 */
export default function FacebookPixel() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored?.marketing) setAllowed(true);

    function onChange(e: Event) {
      const detail = (e as CustomEvent<ConsentState>).detail;
      setAllowed(Boolean(detail?.marketing));
    }
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!allowed) return null;

  return (
    <>
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
