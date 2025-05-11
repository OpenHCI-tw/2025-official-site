export default function DepartmentTag({
  name,
  active,
  handleSelect,
}: {
  name: string;
  active: boolean;
  handleSelect: () => void;
}) {
  return (
    <span
      className={`border-b-2 border-white px-2 pb-1 font-semibold text-xl cursor-pointer ${
        active ? "border-b-orange text-orange" : "text-white"
      }`}
      onClick={handleSelect}
    >
      {name}
    </span>
  );
}
