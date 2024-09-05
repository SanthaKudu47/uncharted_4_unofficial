import { ReactNode } from "react";

export default function TextParagraph({
  children = <p></p>,
}: {
  children: ReactNode;
}) {
  return (
    <div className="mt-5 font-base font-normal text-[20px] text-white_v1 text-justify indent-4 text-pretty w-full">
      {children}
    </div>
  );
}
