import { Link } from 'react-router-dom';
import storeIcon from '../../assets/store_minicon.png';

const storeLinks = [
  {
    title: '  About Us',
    to: '/',
  },
  {
    title: 'Contact and Support',
    to: '/',
  },
  {
    title: 'Return',
    to: '/',
  },
  {
    title: 'Team and conditions',
    to: '/',
  },
  {
    title: 'Privacy Policy',
    to: '/',
  },
];
const userLinks = [
  {
    title: 'Register',
    to: '/login',
  },
  {
    title: 'My account',
    to: '/',
  },
  {
    title: 'Orders',
    to: '/',
  },
  {
    title: 'GDPR Tools',
    to: '/',
  },
];

function Footer() {
  return (
    <footer className='bg-black/80 text-white font-thin flex py-6 px-10'>
      <div className='flex-1'>
        <img src={storeIcon} alt='' width={70} />
        <p className='w-[50%] text-[13px] mt-4'>
          BasketballStore is your online store for basketball clothing, shoes
          and accessories: basketball shoes and clothing from Nike, adidas,
          Jordan, Under Armour, Puma, New Balance and Crossover Culture.
        </p>
      </div>
      <div className='p-4 w-[256px]'>
        <h4 className='font-bold uppercase mb-2'>Customer Serivice</h4>
        <hr className='w-[56px] mb-4 border-orange-500' />
        <ul className='text-sm'>
          {storeLinks.map((link) => (
            <li key={link.title} className='px-4 cursor-pointer mb-1'>
              <Link
                to={link.to}
                className='text-white/80 hover:text-white'
                href='#'
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='p-4 w-[256px]'>
        <h4 className='font-bold uppercase mb-2'>Account & Orders</h4>
        <hr className='w-[56px] mb-4 border-orange-500' />
        <ul className='text-sm'>
          {userLinks.map((link) => (
            <li key={link.title} className='px-4 cursor-pointer mb-1'>
              <Link
                to={link.to}
                className='text-white/80 hover:text-white'
                href='#'
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='p-4 w-[320px]'>
        <h4 className='font-bold uppercase mb-1'>Newsletter</h4>
        <hr className='w-[56px] mb-4 border-orange-500' />
        <p className='text-sm mb-4'>
          Stay up to date on new products and special offers from Basketball
          Store
        </p>
        <form className='flex flex-col text-sm'>
          <div className='flex items-center  bg-white p-1 mb-3'>
            <input
              className='text-black focus:outline-none p-2 w-full rounded-sm'
              type='email'
              placeholder='Your email'
            />
            <button className='bg-orange-500 font-bold p-2'>Send</button>
          </div>
          <div>
            <input type='checkbox' name='agreement' id='' required />
            <label className='text-xs' htmlFor='agreement'>
              I have read and agree to the <a href='#'>Privacy Policy</a>
            </label>
          </div>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
