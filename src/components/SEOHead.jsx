import { useEffect } from 'react';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonical,
  ogImage = "https://www.aeroenterprises.shop/og-img.webp"
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }

    // Update meta keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }

    // Update canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonical;
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImageMeta = document.querySelector('meta[property="og:image"]');

    if (ogTitle && title) ogTitle.setAttribute('content', title);
    if (ogDescription && description) ogDescription.setAttribute('content', description);
    if (ogUrl && canonical) ogUrl.setAttribute('content', canonical);
    if (ogImageMeta && ogImage) ogImageMeta.setAttribute('content', ogImage);

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');

    if (twitterTitle && title) twitterTitle.setAttribute('content', title);
    if (twitterDescription && description) twitterDescription.setAttribute('content', description);
    if (twitterImage && ogImage) twitterImage.setAttribute('content', ogImage);

  }, [title, description, keywords, canonical, ogImage]);

  return null;
};

export default SEOHead;