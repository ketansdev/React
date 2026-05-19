import Logo from "./Logo"
import NavItems from "./NavItems"
import UserLogin from "./UserLogin"

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5">
      <Logo />
      <NavItems />
      <UserLogin />
    </div>
  )
}

export default Header
