import { Helmet } from "react-helmet-async";

const CANONICAL_ORIGIN = "https://sync7ven.com";
const DEFAULT_OG_IMAGE = "https://sync7ven.com/sync7ven-logo.png";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
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
  ogImage = DEFAULT_OG_IMAGE,
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage = DEFAULT_OG_IMAGE,
  robots = "index, follow",
}: SEOProps) {
  const canonicalUrl = canonicalPath
    ? `${CANONICAL_ORIGIN}${canonicalPath}`
    : undefined;

  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;
  const finalTwitterTitle = twitterTitle || finalOgTitle;
  const finalTwitterDescription = twitterDescription || finalOgDescription;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:type" content={ogType} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={finalTwitterTitle} />
      <meta name="twitter:description" content={finalTwitterDescription} />
      <meta name="twitter:image" content={twitterImage} />
    </Helmet>
  );
}
