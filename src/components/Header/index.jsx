import NavbarDesktop from '../NavbarDesktop';
import NavbarTop from '../NavbarTop';

function Header() {
  return (
    <header className=' bg-black/80'>
      <NavbarTop />
      <NavbarDesktop />
    </header>
  );
}

export default Header;
