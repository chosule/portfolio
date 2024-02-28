import Image, { StaticImageData } from "next/image";

type Props = {
  imageTop: StaticImageData;
  imageBottom: StaticImageData;
  className?: string;
  top?: string;
  left?: string;
};

const SiteImgs = [{}];

export default function ImageWrap({ imageTop, imageBottom, className }: Props) {
  return (
    <div
      className={`flex flex-col gap-8 relative h-[50vh] md:h-full ${className}`}
    >
      <Image
        className={`absolute z-[1] drop-shadow-lg right-0 top-[50%]`}
        src={imageTop}
        alt="이미지1"
        width={350}
      />
      <Image
        className="absolute z-0 drop-shadow-lg top-[50%] transform translate-y-[-50%]"
        src={imageBottom}
        alt="이미지2"
        width={450}
      />
    </div>
  );
}
