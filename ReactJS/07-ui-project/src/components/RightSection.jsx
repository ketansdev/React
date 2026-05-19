import { ArrowRight } from 'lucide-react';

const RightSection = () => {
  return (
    <div>
      <p>Get Business banking, card, bill pay, travel and reimbursements - all in one scalable solution</p>
      <button className='flex justify-center items-center gap-10 text-white bg-black/90 pl-8 pr-1 py-2 mt-8 rounded-4xl'>Get Demo Account <span className='bg-white text-black w-14 py-3 rounded-4xl flex justify-center items-center'><ArrowRight/></span></button>
    </div>
  )
}

export default RightSection
