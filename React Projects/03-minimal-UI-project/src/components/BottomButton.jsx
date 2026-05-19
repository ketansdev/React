import { MoveRight } from 'lucide-react';

const BottomButton = () => {
  return (
    <div className='flex justify-center items-center'>
      <button className='flex gap-8 bg-black/90 text-white px-10 py-3 rounded-3xl'>View all cases <MoveRight /></button>
    </div>
  )
}

export default BottomButton
