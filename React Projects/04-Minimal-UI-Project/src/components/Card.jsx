import array from "../constants/common.js";

const Card = () => {
  return (
    // <div>
    //   <span>Location</span>
    //   <h1>Name</h1>
    //   <p>Designation</p>
    //   <div>
    //     <img src="" alt="" />
    //   </div>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor accusantium voluptatibus dolore accusamus quibusdam nulla, magnam fugiat error non tenetur porro quis atque inventore harum facilis labore, ipsa aperiam rem?</p>
    //   <div>
    //     <button>View Profile</button>
    //   </div>
    // </div>
    <div className="flex justify-center items-center flex-wrap gap-10">
      {array.map((item, index) => (
        <div key= {index} className={`${item.color} w-100 p-3 rounded-2xl flex flex-col gap-2`}>
          <p className="border-b border-gray-500 capitalize">{item.location}</p>
          <h1 className="text-4xl capitalize">{item.name}</h1>
          <p className="capitalize">{item.designation}</p>
          <div className="w-full h-70">
            <img src={item.img} alt="" className="w-full h-full object-cover"/>
          </div>
          <p>{item.description}</p>
          <div className="flex justify-end">
            <button className="bg-white px-3 py-0.5 rounded-4xl">View Profile</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
