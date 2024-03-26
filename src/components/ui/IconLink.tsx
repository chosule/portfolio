import Link from "next/link";
import { Github, LinkIcon } from "../../../public/img/LinkIcon";

type Props = {
  gitLink: string;
  siteLink?: string;
  siteLinkDisplay?: boolean;
};
export default function IconLink({
  gitLink,
  siteLink,
  siteLinkDisplay,
}: Props) {
  return (
    <div className="flex gap-2">
      <Link href={`${gitLink}`} target="_blank">
        <Github />
      </Link>
      {siteLinkDisplay && (
        <Link href={`${siteLink}`} target="_blank">
          <LinkIcon />
        </Link>
      )}
    </div>
  );
}
