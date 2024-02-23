export type StackBoxProps = {
  text: string;
  color: string;
  bgColor: string;
};

export default function StackWrap({
  stackItems,
}: {
  stackItems: StackBoxProps[];
}) {
  return (
    <div className="flex gap-3 flex-wrap">
      {stackItems.map((item, index) => (
        <div key={index}>
          <p
            className={`${item.color} ${item.bgColor} py-1 rounded-lg text-center text-[19px] drop-shadow-md px-2 font-medium md:text-[12px]`}
          >
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
