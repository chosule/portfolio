import ContactLink from "./ui/ContactLink";
import SubTitle from "./ui/SubTitle";
import Wrap from "./ui/Wrap";

export default function ContactMe() {
  return (
    <Wrap id="contactMe" className="flex-col items-center">
      <ul className="flex md:h-60 h-40 w-[353px] md:w-[506px] flex-col gap-3 overflow-hidden bg-cover rounded-xl bg-neutral-50 p-8 contact-me-shadow justify-around">
        <li className="">
          <h3 className="font-bold text-lg dark:text-neutral-900">김초슬</h3>
          <h3 className="text-xs dark:text-neutral-900">FrontEnd</h3>
        </li>
        <ContactLink />
      </ul>
    </Wrap>
  );
}
