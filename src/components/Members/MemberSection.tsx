import MemberCard from "./MemberCard";

function MemberSection() {
  const member = {
    name: "貓貓貓",
    school: "國立臺灣科技大學",
    expertise: "推測設計X互動設計",
    photo: "default.jpg",
  };
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(0,_250px))] gap-[19px] w-full justify-center">
      <MemberCard member={member} />
      <MemberCard member={member} />
      <MemberCard member={member} />
    </div>
  );
}

export default MemberSection;
