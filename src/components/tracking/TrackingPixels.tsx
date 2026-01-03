import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Replace these with your actual tracking IDs
const TRACKING_IDS = {
  META_PIXEL_ID: 'YOUR_META_PIXEL_ID', // Facebook/Meta Pixel ID
  GOOGLE_ANALYTICS_ID: 'YOUR_GA4_ID', // Google Analytics 4 Measurement ID (G-XXXXXXXXXX)
  GOOGLE_ADS_ID: 'YOUR_GOOGLE_ADS_ID', // Google Ads Conversion ID (AW-XXXXXXXXXX)
  TIKTOK_PIXEL_ID: 'YOUR_TIKTOK_PIXEL_ID', // TikTok Pixel ID
};

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: unknown;
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
    ttq: {
      load: (id: string) => void;
      page: () => void;
      track: (event: string, data?: unknown) => void;
      identify: (data: unknown) => void;
      instances: () => unknown[];
      debug: (enabled: boolean) => void;
      on: (event: string, callback: () => void) => void;
      off: (event: string, callback: () => void) => void;
      once: (event: string, callback: () => void) => void;
      ready: (callback: () => void) => void;
      alias: (alias: string) => void;
      group: (groupId: string, traits?: unknown) => void;
    };
  }
}

// Initialize Meta/Facebook Pixel
const initMetaPixel = () => {
  if (TRACKING_IDS.META_PIXEL_ID === 'YOUR_META_PIXEL_ID') return;
  
  const script = document.createElement('script');
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${TRACKING_IDS.META_PIXEL_ID}');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);

  // Add noscript fallback
  const noscript = document.createElement('noscript');
  const img = document.createElement('img');
  img.height = 1;
  img.width = 1;
  img.style.display = 'none';
  img.src = `https://www.facebook.com/tr?id=${TRACKING_IDS.META_PIXEL_ID}&ev=PageView&noscript=1`;
  noscript.appendChild(img);
  document.body.appendChild(noscript);
};

// Initialize Google Analytics & Google Ads
const initGoogleTracking = () => {
  if (TRACKING_IDS.GOOGLE_ANALYTICS_ID === 'YOUR_GA4_ID') return;

  // Load gtag.js
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_IDS.GOOGLE_ANALYTICS_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', TRACKING_IDS.GOOGLE_ANALYTICS_ID, {
    send_page_view: true,
  });

  // Add Google Ads conversion tracking if configured
  if (TRACKING_IDS.GOOGLE_ADS_ID !== 'YOUR_GOOGLE_ADS_ID') {
    window.gtag('config', TRACKING_IDS.GOOGLE_ADS_ID);
  }
};

// Initialize TikTok Pixel
const initTikTokPixel = () => {
  if (TRACKING_IDS.TIKTOK_PIXEL_ID === 'YOUR_TIKTOK_PIXEL_ID') return;

  const script = document.createElement('script');
  script.innerHTML = `
    !function (w, d, t) {
      w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
      ttq.load('${TRACKING_IDS.TIKTOK_PIXEL_ID}');
      ttq.page();
    }(window, document, 'ttq');
  `;
  document.head.appendChild(script);
};

// Custom event tracking functions
export const trackEvent = {
  // Meta/Facebook events
  meta: {
    lead: () => window.fbq?.('track', 'Lead'),
    contact: () => window.fbq?.('track', 'Contact'),
    viewContent: (contentName: string) => window.fbq?.('track', 'ViewContent', { content_name: contentName }),
    initiateCheckout: () => window.fbq?.('track', 'InitiateCheckout'),
    purchase: (value: number, currency = 'INR') => window.fbq?.('track', 'Purchase', { value, currency }),
  },
  
  // Google Analytics events
  google: {
    lead: () => window.gtag?.('event', 'generate_lead'),
    contact: () => window.gtag?.('event', 'contact'),
    viewContent: (contentName: string) => window.gtag?.('event', 'view_item', { item_name: contentName }),
    whatsappClick: () => window.gtag?.('event', 'click', { event_category: 'WhatsApp', event_label: 'CTA Click' }),
    emailClick: () => window.gtag?.('event', 'click', { event_category: 'Email', event_label: 'CTA Click' }),
  },
  
  // TikTok events
  tiktok: {
    contact: () => window.ttq?.track('Contact'),
    submitForm: () => window.ttq?.track('SubmitForm'),
    viewContent: (contentId: string) => window.ttq?.track('ViewContent', { content_id: contentId }),
    clickButton: () => window.ttq?.track('ClickButton'),
  },

  // Track across all platforms
  all: {
    lead: () => {
      trackEvent.meta.lead();
      trackEvent.google.lead();
      trackEvent.tiktok.contact();
    },
    whatsappClick: () => {
      trackEvent.meta.contact();
      trackEvent.google.whatsappClick();
      trackEvent.tiktok.clickButton();
    },
    emailClick: () => {
      trackEvent.meta.contact();
      trackEvent.google.emailClick();
      trackEvent.tiktok.clickButton();
    },
    viewContent: (name: string) => {
      trackEvent.meta.viewContent(name);
      trackEvent.google.viewContent(name);
      trackEvent.tiktok.viewContent(name);
    },
  },
};

const TrackingPixels = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize all tracking pixels on mount
    initMetaPixel();
    initGoogleTracking();
    initTikTokPixel();
  }, []);

  // Track page views on route change
  useEffect(() => {
    // Meta Pixel page view
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }

    // Google Analytics page view
    if (window.gtag && TRACKING_IDS.GOOGLE_ANALYTICS_ID !== 'YOUR_GA4_ID') {
      window.gtag('config', TRACKING_IDS.GOOGLE_ANALYTICS_ID, {
        page_path: location.pathname,
      });
    }

    // TikTok page view
    if (window.ttq) {
      window.ttq.page();
    }
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default TrackingPixels;
