import { useState } from "react";
import faqs from "./constants/common.js";

const App = () => {
  const [activeID, setActiveID] = useState(null);
  console.log(faqs);
  const handleFaq = (id) => {
    setActiveID(activeID === id ? null : id)
  };
  return (
    <div className="w-300 flex flex-col gap-5">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          onClick={() => {
            handleFaq(faq.id);
          }}
        >
          <div className="flex justify-between items-center border-1 border-gray-700 px-5 py-3 rounded cursor-pointer">
            <h1 className="text-white text-5xl">{faq.question}</h1>
            <span className="text-white text-5xl font-semibold">{activeID === faq.id ? "-" : "+"}</span>
          </div>
          <div className={activeID === faq.id ? "block" : "hidden"}>
            <p className="text-white px-5 py-3">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
