import array from "../constants/common";

const Card = () => {
  return (
    <div className="flex gap-10">
      {array.map((item, index) => {
        return (
          <div className="flex flex-col gap-5" key={index}>
            <div className="w-full h-60 overflow-hidden rounded-2xl">
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-4xl">{item.title}</h2>
            <p>{item.info}</p>
            <div className="flex flex-row gap-5">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  style={{ backgroundColor: tag.bgColor, color: tag.textColor }}
                  className="py-1 px-2 uppercase text-xs rounded"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
