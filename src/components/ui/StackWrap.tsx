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
            className={`${item.color} ${item.bgColor} py-1 rounded-lg text-center text-xs md:text-lg drop-shadow-md px-2 font-medium `}
          >
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
