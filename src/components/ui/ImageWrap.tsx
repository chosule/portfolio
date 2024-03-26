import Image, { StaticImageData } from "next/image";

type Props = {
  imageTop: StaticImageData;
  imageBottom: StaticImageData;
  className?: string;
  right?: string;
};

export default function ImageWrap({
  imageTop,
  imageBottom,
  className,
  right,
}: Props) {
  return (
    <div className={`flex flex-col gap-8 relative md:h-full ${className}`}>
      <Image
        className={`absolute z-[1] drop-shadow-lg right-0 top-[50%] ${right}`}
        src={imageTop}
        alt="이미지1"
        width={350}
      />
      <Image
        className="inherit z-0 drop-shadow-lg top-[50%] transform translate-y-[-50%] hidden md:block md:absolute"
        src={imageBottom}
        alt="이미지2"
        width={450}
      />
    </div>
  );
}
