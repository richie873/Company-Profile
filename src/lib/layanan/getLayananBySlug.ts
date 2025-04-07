import { slugify } from "@/components/utils/slugify";
import { layanan } from "@/components/layananKami/data";

export async function getLayananBySlug(slug: string) {
  return layanan.find((item) => slugify(item.title) === slug) ?? null;
}
