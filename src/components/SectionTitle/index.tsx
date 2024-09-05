import "./styles.css";

export default function SectionTitle({
  title = "Sample Time",
  isInView = false,
}: {
  title: string;
  isInView: boolean;
}) {
  return (
    <div
      className={`flex section_header ${
        isInView ? "section_header_activate" : ""
      }`}
    >
      <h2 className="font-base font-bold text-[20px] sm:text-[30px] text-blue_light text-right">
        {title}
      </h2>
    </div>
  );
}
