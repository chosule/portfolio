import Link from "next/link";
import { Github, LinkIcon } from "../../../public/img/LinkIcon";

type Props = {
  gitLink: string;
  siteLink?: string;
};

export default function IconLink({ gitLink, siteLink }: Props) {
  let links = [
    { linkHref: gitLink, icon: <Github /> },
    { linkHref: siteLink, icon: <LinkIcon /> },
  ];
  if (siteLink === undefined) {
    links = links.filter((link) => link.linkHref === gitLink);
  }
  return (
    <div className="flex gap-2">
      {links.map((link, index) => (
        <Link key={index} href={`${link.linkHref}`} target="_blank">
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
