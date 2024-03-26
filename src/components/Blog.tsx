"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import Wrap from "./ui/Wrap";
import ImageWrap from "./ui/ImageWrap";
import TextWrap from "./ui/TextWrap";
import Title from "./ui/Title";
import Text from "./ui/Text";
import StackWrap from "./ui/StackWrap";
import AnchorLink from "./ui/AnchorLink";
import chosuleblogimage from "../../public/img/chosuleblogimage.png";
import chosuleblogimage2 from "../../public/img/chosuleblogimage2.png";
import IconLink from "./ui/IconLink";

const stackItems = [
  {
    text: "Nextjs (App Router)",
    color: "text-neutral-50",
    bgColor: "bg-neutral-900",
  },
  { text: "React", color: "text-neutral-900", bgColor: "bg-[#00d8ff]" },
  { text: "Typescript", color: "text-neutral-50", bgColor: "bg-[#3381ff]" },
  { text: "tailwindCss", color: "text-neutral-50", bgColor: "bg-[#CC6699]" },
  { text: "mdx", color: "text-neutral-50", bgColor: "bg-[#ff8c00]" },
  { text: "gsap", color: "text-neutral-50", bgColor: "bg-[#2f4f4f]" },
];

export default function Blog() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 500,
    threshold: 0.5,
  });

  useEffect(() => {
    inView ? fadeIn() : fadeOut();
  }, [inView]);

  const fadeIn = () => {
    gsap.to(".articles-fade-in", {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power4.out",
      stagger: {
        amount: 1,
      },
    });
  };

  const fadeOut = () => {
    gsap.to(".articles-fade-in", {
      duration: 1,
      opacity: 0,
      y: 100,
      ease: "power4.out",
    });
  };

  return (
    <Wrap
      id="chosuleblog"
      ref={ref}
      className="articles-fade-in md:grid-cols-2 items-center grid-cols-1 h-full"
    >
      <ImageWrap imageTop={chosuleblogimage2} imageBottom={chosuleblogimage} />
      <TextWrap>
        <div className="flex gap-3 items-center">
          <Title>Next blog 프로젝트</Title>
          <IconLink
            siteLinkDisplay
            gitLink="https://github.com/chosule/blog_next"
            siteLink="https://chosule-blog.vercel.app/"
          />
        </div>
        <Text className="leading-loose">
          새롭게 업데이트된 <span className="strong">Next 14 App router</span>{" "}
          를 사용하여 저만의 글을 올릴수 있는 반응형 블로그 프로젝트를
          만들었습니다.
          <br />
          mdx파일을 파싱해주고 기존 getStaticPath와 getServersideProps 에서 대체
          된 <span className="strong">async await</span>을 사용해 제가 만든
          코드들을 적용하였습니다.
          <br />
          또한 metadata 적용해준 뒤 sitemap.xml을 만들어 구글에 sitemap을
          등록하여 <span className="font-black">SEO최적화</span> 에
          노력하였습니다.
        </Text>
        <StackWrap stackItems={stackItems} />
        <AnchorLink text="Winterfoodies 📝" href="#winterfoodies" />
      </TextWrap>
    </Wrap>
  );
}
