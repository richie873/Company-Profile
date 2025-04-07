import { getLayananBySlug } from "@/lib/layanan/getLayananBySlug";
import { notFound } from "next/navigation";
import SidebarWithMotion from "./SidebarWithMotion";
import LayananAnimatedContent from "./LayananAnimatedContent"; // 👈 ini dia

export default async function LayananContent({ slug }: { slug: string }) {
  const layananDetail = await getLayananBySlug(slug);
  if (!layananDetail) return notFound();

  return (
    <div className="grid lg:grid-cols-[250px_1fr] mt-[50px] lg:mt-[70px]">
      {/* Sidebar */}
      <SidebarWithMotion slug={slug} />

      {/* Konten */}
      <div className="pt-5 lg:pt-6 px-4 lg:px-8 mt-[20px] mb-[40px]">
        <LayananAnimatedContent layanan={layananDetail} />
      </div>
    </div>
  );
}
