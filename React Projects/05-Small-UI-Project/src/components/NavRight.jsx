import { CornerDownRight } from "lucide-react";

const NavRight = () => {
  return (
    <button className="flex gap-2 bg-gray-50 p-2 rounded-2xl uppercase tracking-[3px] text-xl">
      <CornerDownRight />
      <span>Digital Banking Platform</span>
    </button>
  );
};

export default NavRight;
