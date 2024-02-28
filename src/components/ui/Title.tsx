export default function Title({
  className,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={`text-lg drop-shadow-lg font-semibold md:text-2xl text-primary ${className}`}
      {...props}
    />
  );
}
