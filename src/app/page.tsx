import { Metadata } from "next";
import Intro from "@/components/Intro";
import NportVerse from "@/components/Nportverse";
import AdService from "@/components/Addservice";
import WinterFoodies from "@/components/WinterFoodies";
import Blog from "@/components/Blog";


export const metadata: Metadata = {
  title:'portfolio chosule',
  description: "김초슬 포트폴리오 입니다.",
};

export default function PortfolioPage() {
  return (
    <>
      <div className="relative w-full px-10">
        <Intro />
        <NportVerse/>
        <AdService />
        <WinterFoodies/>
        <Blog/>
      </div>
    </>
  );
}
