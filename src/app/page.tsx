import { Metadata } from "next";
import Intro from "./componets/Intro";
import NportVerse from "./componets/Nportverse";
import AdService from "./componets/Addservice";
import WinterFoodies from "./componets/WinterFoodies";
import Blog from "./componets/Blog";


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
