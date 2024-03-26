"use client";
import ImageWrap from "./ui/ImageWrap";
import Wrap from "./ui/Wrap";
import hobbyloopImg1 from "../../public/img/hobbyloopImg1.png";
import hobbyloopImg2 from "../../public/img/hobbyloopImg2.png";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import gsap from "gsap";
import TextWrap from "./ui/TextWrap";
import Title from "./ui/Title";
import IconLink from "./ui/IconLink";
import Text from "./ui/Text";
import StackWrap from "./ui/StackWrap";
import AnchorLink from "./ui/AnchorLink";

const stackItems = [
  {
    text: "Next (14 App router)",
    color: "text-neutral-50",
    bgColor: "bg-neutral-900",
  },
  { text: "React", color: "text-neutral-900", bgColor: "bg-[#00d8ff]" },
  { text: "Typescript", color: "text-neutral-50", bgColor: "bg-[#3381ff]" },
  {
    text: "Styled-component",
    color: "text-neutral-50",
    bgColor: "bg-[#CC6699]",
  },
  {
    text: "Tailwind-css",
    color: "text-neutral-50",
    bgColor: "bg-[#0150fd]",
  },
];
export default function Hobbyloop() {
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
      id="hobbyloop"
      ref={ref}
      className="md:grid-cols-2 grid-cols-1 h-full items-center"
    >
      <ImageWrap
        imageTop={hobbyloopImg1}
        imageBottom={hobbyloopImg2}
        right="md:right-[96px]"
      />
      <TextWrap>
        <div>
          <Title>Hobbyloop 실서비스 프로젝트</Title>
        </div>
        <Text>
          좋은 기회로 실서비스화 되는 프로젝트에 들어가게되었습니다. <br />
          원하는 운동을 간단히 결제하고 예약까지 한번에 할 수 있는 플랫폼
          입니다.
          <br />
          현재 랜딩페이지를 완성하였고 업체 관리 페이지를 분담하여 프로그래밍
          중에 있습니다.
        </Text>
        <StackWrap stackItems={stackItems} />
        <AnchorLink text="Next blog 프로젝트 📝" href="#chosuleblog" />
      </TextWrap>
    </Wrap>
  );
}
