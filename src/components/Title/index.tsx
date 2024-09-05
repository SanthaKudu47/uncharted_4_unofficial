export default function Title({
  title = "MEET THE CHARACTERS",
}: {
  title: string;
}) {
  return (
    <div className="flex pt-20 pb-10 px-5 bg-blue_dark">
      <h2 className="font-base font-bold text-[20px] sm:text-[30px] text-blue_light text-right">
        {title}
      </h2>
    </div>
  );
}
