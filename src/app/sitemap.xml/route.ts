import { layanan } from "@/components/layananKami/data";
import { slugify } from "@/components/utils/slugify";

export async function GET() {
  const baseUrl = "https://kanajaya.co.id";

  const staticRoutes = [
    "", // Halaman utama
    "layanan-kami", // Halaman layanan utama
  ];

  const layananRoutes = layanan.map((item) => ({
    slug: slugify(item.title),
  }));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes
    .map((route) => {
      if (route === "") {
        return `
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;
      }

      return `
  <url>
    <loc>${baseUrl}/${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    })
    .join("")}

  ${layananRoutes
    .map(({ slug }) => {
      return `
  <url>
    <loc>${baseUrl}/layanan-kami/${slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
    })
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
