import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

const Header = () => {
  return (
    <header className="flex justify-between items-center max-w-[90%] m-auto py-5">
        <NavLeft />
        <NavRight />
    </header>
  );
};

export default Header;
