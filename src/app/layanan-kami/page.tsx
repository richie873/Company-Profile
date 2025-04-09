import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/landingPage/Footer";
import LayananLandingPage from "@/components/landingPage/LayananKami"
import LayananKamiComponents from "@/components/layananKami/layananKami"

export default function LayananKami() {
  return (
    <div className="pt-[50px]">
      <Navbar />
      <LayananKamiComponents />
      <LayananLandingPage />
      <Footer />
    </div>
  );
}