import MainLeftSection from "./MainLeftSection";
import MainRightSection from "./MainRightSection";

const MainSection = () => {
  return (
    <div className="max-w-[90%] m-auto py-10 flex gap-10">
      <MainLeftSection />
      <MainRightSection />
    </div>
  );
};

export default MainSection;
