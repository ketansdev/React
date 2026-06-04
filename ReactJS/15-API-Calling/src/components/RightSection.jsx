import axios from 'axios'
import { useState } from 'react';

const RightSection = () => {
    const [axiosData, setAxiosData] = useState([]);
    const getData = async() =>{
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        console.log(data);
        setAxiosData(data);
    }
  return (
    <div className='bg-[black] text-white'>
      <button onClick={getData} className='bg-[#202020] p-3 rounded m-5 text-white cursor-pointer'>Get Data</button>
      <div className='flex flex-wrap gap-10 justify-center'>
        {
            axiosData.map((item,id) =>{
                return (
                    <div key={id} className='w-100 h-auto bg-[#404040] flex flex-col justify-between items-center gap-5 rounded-2xl'>
                    <h1>{item.title}</h1>
                    <div className='w-40 h-50'>
                        <img src={item.image} alt="" className='w-full h-full'/>
                    </div>
                        <span className='text-3xl font-bold'>Price : ${item.price}</span>
                        <p>{item.description}</p>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default RightSection
