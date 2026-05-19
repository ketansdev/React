import { ChevronDown } from 'lucide-react';

const NavItems = () => {
  return (
    <div>
      <ul className='flex justify-between gap-15 items-center'>
        <li className='flex flex-row'>Accounts <ChevronDown /></li>
        <li className='flex flex-row'>Solutions <ChevronDown /></li>
        <li>About us</li>
        <li>Blog</li>
      </ul>
    </div>
  )
}

export default NavItems
