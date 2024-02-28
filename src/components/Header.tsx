"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import heart_icon from "../../public/img/heart_icon.png";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); //

  return (
    <header className="relative md:h-8 h-20">
      <div
        className={`fixed left-1/2 z-10 h-20 w-full ${
          scrolled ? "backdrop-blur" : "bg-primary"
        } -translate-x-1/2 transform shadow-md`}
      ></div>
      <nav className="fixed left-1/2 z-20 flex w-full max-w-[1200px] -translate-x-1/2 transform py-6 gap-36 md:px-5 md:pl-0 md:pr-0 pl-5 pr-20">
        <ul className="flex justify-between w-full h-full items-center">
          <li>
            <Link href="#" target="_blank">
              <Image src={heart_icon} alt="하트아이콘" width={40} height={40} />
            </Link>
          </li>
          <li>
            <Link
              href="https://chosule-blog.vercel.app/"
              target="_blank"
              className="italic border p-2 rounded-lg text-sm"
            >
              💻 My blog
            </Link>
          </li>
        </ul>
      </nav>
      <div className="absolute top-[300px]"></div>
    </header>
  );
}
