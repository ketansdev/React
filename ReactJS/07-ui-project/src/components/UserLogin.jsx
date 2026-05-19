import { UserRound } from 'lucide-react';

const UserLogin = () => {
  return (
    <div className='flex flex-row gap-5'>
      <button className='border-1 border-gray-400 border-solid rounded-4xl p-3 w-18 flex justify-center items-center cursor-pointer'><UserRound /></button>
      <button className='border-1 border-gray-400 border-solid rounded-4xl px-5 py-3 flex justify-center items-center cursor-pointer'>Get Demo</button>
    </div>
  )
}

export default UserLogin
