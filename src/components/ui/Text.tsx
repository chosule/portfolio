export default function Text({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-primary text-sm whitespace-pre-wrap md:text-base  ${className}`}
    >
      {children}
    </p>
  );
}
