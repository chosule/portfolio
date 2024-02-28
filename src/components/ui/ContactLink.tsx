import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import { SiBloglovin } from "react-icons/si";

const Links = [
  {
    id: 1,
    siteName: "My Github",
    href: "https://github.com/chosule",
    icon: <FaGithub />,
  },
  {
    id: 2,
    siteName: "My Blog",
    href: "https://chosule-blog.vercel.app/",
    icon: <SiBloglovin />,
  },
  {
    id: 3,
    siteName: "My Velog",
    href: "https://velog.io/@chosule/posts",
    icon: <SiVelog />,
  },
];

export default function ContactLink() {
  return (
    <ul className="grid grid-cols-3 gap-4">
      <li className="text-sm flex mt-4 col-start-1 col-end-4 gap-2">
        <p className="dark:text-neutral-900">Mobile </p>
        <p className="dark:text-neutral-900">010-9724-3290</p>
      </li>
      {Links.map((link) => (
        <li className="flex gap-2 text-xs items-center" key={link.id}>
          <p className="dark:text-neutral-900 hidden md:block">
            {link.siteName}
          </p>
          <Link
            target="_blank"
            href={link.href}
            className="text-xl text-neutral-900"
          >
            {link.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
