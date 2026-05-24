import { MoveUpRight } from "lucide-react";

const MainLeftSection = () => {
  return (
    <div className="w-1/3 h-[80vh] flex flex-col justify-between pt-15">
      <div className="flex flex-col gap-5">
        <h1 className="flex flex-col gap-4 text-6xl font-bold">
         Prospective customer segmentation
        </h1>
        <p className="w-[70%] text-2xl tracking-[1px]">
          Depending on customer satisfaction and access to banking products,
          potential target audiuence can be divided into three groups
        </p>
      </div>
      <div>
        <button>
          <MoveUpRight size={74} className="font-bold"/>
        </button>
      </div>
    </div>
  );
};

export default MainLeftSection;
