'use client';

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
import chosuleblogimage from "../../../public/img/chosuleblogimage.png"
import chosuleblogimage2 from "../../../public/img/chosuleblogimage2.png"
import IconLink from "./ui/IconLink";

const stackItems = [
    { text: "Nextjs (Page router)", color: "text-neutral-50", bgColor: "bg-neutral-900" },
    { text: "React", color: "text-neutral-900", bgColor: "bg-[#00d8ff]" },
    { text: "Typescript", color: "text-neutral-50", bgColor: "bg-[#3381ff]" },
    { text: "tailwindCss", color: "text-neutral-50", bgColor: "bg-[#CC6699]" },
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
      
     return(
        <Wrap id="chosuleblog" ref={ref} className="flex-col md:flex-row">
        <ImageWrap imageTop={chosuleblogimage} imageBottom={chosuleblogimage2}/>
        <TextWrap>
            <div className="flex flex-col gap-2">
              <Title>Next blog 프로젝트</Title>
              <IconLink gitLink="#" siteLink="#"/>
            </div>
            <Text className="leading-loose flex-[0.6]">
              <span className="strong">Next 14 App router</span>를 사용하여 저만의 글을 올릴수 있는 블로그 프로젝트 입니다. 
            </Text>
            <StackWrap stackItems={stackItems}/>
            <AnchorLink text="contact Me 💎" href="#adservice"/>
        </TextWrap>
    </Wrap>
     )
}