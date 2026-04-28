const DEFAULT_SITE_URL = "https://hierarchyofvisionaries.com";

export function getSiteUrl() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXTAUTH_URL ||
    DEFAULT_SITE_URL;

  return siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
}
