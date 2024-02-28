import Image, { StaticImageData } from "next/image";

type Props = {
  imageTop: StaticImageData;
  imageBottom: StaticImageData;
  className?: string;
  top?: string;
  left?: string;
};

const SiteImgs = [{}];

export default function ImageWrap({
  imageTop,
  imageBottom,
  top = "100px",
  left = "3%",
  className,
}: Props) {
  return (
    <div
      className={`flex flex-col gap-8 relative h-[50vh] md:h-full ${className}`}
    >
      <Image
        className={`absolute top-[${top}] left-[${left}] z-10`}
        src={imageTop}
        alt="이미지1"
        width={300}
      />
      <Image
        className="absolute bottom-[10%] right-0 z-0"
        src={imageBottom}
        alt="이미지2"
        width={450}
      />
    </div>
  );
}
