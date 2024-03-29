"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

type Props = {
  text: string;
  href: string;
};
export default function AnchorLink({ text, href, ...props }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 500,
    threshold: 0.5,

  });

  useEffect(() =>{
    inView ? fadeIn() : fadeOut()
  },[inView])

  const fadeIn = () => {
    gsap.to(".ani", {
      duration: 0.8,
      y: -3, 
      ease: "power1.inOut",
      repeat: 5, 
      yoyo: true, 
    });
  };

  const fadeOut = () => {
    gsap.to(".ani", { y: 0 });
  };

  return (
    <div ref={ref} className="relative flex gap-1">
      <Link href={href} className="text-primary font-semibold ani">
        {text}
      </Link>
      <div className="mt-2.5">
        <svg
          aria-hidden="true"
          focusable="false"
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="tail dark:stroke-[#fff]"
            d="M0.5 1.49999C6.83333 0.999993 19.2 4.59999 18 23"
            style={{ strokeDashoffset: inView ? 0 : "31.95920181274414" }}
          />
          <path
            className={`point dark:stroke-[#fff]`}
            d="M13.5 16.5L18 23L22.5 16.5"
            style={{ strokeDashoffset: inView ? 0 : "15.81138801574707" }}
          />
        </svg>
      </div>
    </div>
  );
}
