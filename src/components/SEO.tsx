import { Helmet } from "react-helmet-async";

const SITE_URL = "https://sync7ven.com";
const DEFAULT_IMAGE = "https://sync7ven.com/sync7ven-logo.png";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image";
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  robots?: string;
}

export default function SEO({
  title,
  description,
  canonicalPath,
  ogTitle,
  ogDescription,
  ogType = "website",
  ogImage,
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
  robots = "index, follow",
}: SEOProps) {
  const canonicalUrl = canonicalPath
    ? `${SITE_URL}${canonicalPath}`
    : undefined;
  const finalOgImage = ogImage || DEFAULT_IMAGE;
  const finalTwitterImage = twitterImage || DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={finalOgImage} />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle || title} />
      <meta name="twitter:description" content={twitterDescription || description} />
      <meta name="twitter:image" content={finalTwitterImage} />
    </Helmet>
  );
}
