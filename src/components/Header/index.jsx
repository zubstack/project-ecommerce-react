import NavbarTop from '../../ui/NavbarTop';
import NavbarDesktop from '../../ui/NavbarDesktop';

function Header() {
  return (
    <header className=' bg-black/80'>
      <NavbarTop />
      <NavbarDesktop />
    </header>
  );
}

export default Header;
