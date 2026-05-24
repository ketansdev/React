import array from "../constants/common.js";
import { MoveRight } from 'lucide-react';

const MainRightSection = () => {
  return (
    <div className="w-full h-[80vh] flex gap-15">
      {array.map((item, index) => (
        <div
          key={index}
          className="relative w-1/3 bg-cover bg-center h-full rounded-[40px]"
          style={{
            backgroundImage: `url(${item.img})`,
          }}
        >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] rounded-4xl"></div>
            <div className="relative w-full h-[80vh] p-10 flex flex-col justify-between rounded-4xl">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black text-3xl">{index + 1}</span>
                <div>
                    <p className="text-2xl mb-15 text-white w-65 tracking-[4px]">{item.description}</p>
                    <button style={{backgroundColor:item.btnBg}} className="flex justify-center items-center gap-10 text-2xl capitalize text-white px-2 py-1 rounded-2xl">{item.tag} <MoveRight size={45}/></button>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default MainRightSection;
