"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import Text from "./ui/Text";
import Wrap from "./ui/Wrap";
import adservice_2 from "../../public/img/adservice_2.png";
import adservice_1 from "../../public/img/adservice_1.png";
import Title from "./ui/Title";
import ImageWrap from "./ui/ImageWrap";
import TextWrap from "./ui/TextWrap";
import StackWrap from "./ui/StackWrap";
import AnchorLink from "./ui/AnchorLink";

const stackItems = [
  { text: "React", color: "text-neutral-50", bgColor: "bg-[#3381ff]" },
  { text: "Next", color: "text-neutral-50", bgColor: "bg-[#000]" },
  {
    text: "Styled-component",
    color: "text-neutral-50",
    bgColor: "bg-[#CC6699]",
  },
  { text: "Emotion", color: "text-neutral-50", bgColor: "bg-[#CC6699]" },
];

export default function AdService() {
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
      id="adservice"
      ref={ref}
      className="w-full gap-10 articles-fade-in md:grid-cols-2 items-center grid-cols-1 "
    >
      <ImageWrap imageTop={adservice_1} imageBottom={adservice_2} />
      <TextWrap>
        <Title>Ad_service</Title>
        <Text className="leading-loose flex-[0.8]">
          재직중 처음으로 참여한 <span className="strong">협업 프로젝트</span>{" "}
          입니다. <br />
          API 통신이
          <span className="strong">Websocket</span>으로 이루어 지고 있습니다.{" "}
          <br />
          <span className="strong">실사용되는 코드</span> 에 대해 경험하고 깊게
          이해해볼수 있는 값진 시간이였습니다.
        </Text>
        <StackWrap stackItems={stackItems} />
        <AnchorLink text="WinterFoodies 📝" href="#winterfoodies" />
      </TextWrap>
    </Wrap>
  );
}
