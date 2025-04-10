import { layanan } from "@/components/layananKami/data";
import { slugify } from "@/components/utils/slugify";

export async function GET() {
  const baseUrl = "https://kanajaya.co.id";

  const staticRoutes = [
    "",
    "layanan-kami",
  ];

  const layananRoutes = layanan.map((item) => {
    const slug = slugify(item.title);
    return `layanan-kami/${slug}`;
  });

  const allRoutes = [...staticRoutes, ...layananRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
      (route) => `
    <url>
      <loc>${baseUrl}/${route}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
