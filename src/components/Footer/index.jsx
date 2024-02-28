import storeIcon from '../../assets/store_minicon.png';

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
          <li className='px-4 cursor-pointer mb-1'>
            <a className='text-white/80 hover:text-white' href='#'>
              About Us
            </a>
          </li>
          <li className='px-4 cursor-pointer mb-1'>
            <a className='text-white/80 hover:text-white' href='#'>
              Contact and Support
            </a>
          </li>
          <li className='px-4 cursor-pointer mb-1'>
            <a className='text-white/80 hover:text-white' href='#'>
              Return
            </a>
          </li>
          <li className='px-4 cursor-pointer mb-1'>
            <a className='text-white/80 hover:text-white' href='#'>
              Team and conditions
            </a>
          </li>
          <li className='px-4 cursor-pointer mb-1'>
            <a className='text-white/80 hover:text-white' href='#'>
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div className='p-4 w-[256px]'>
        <h4 className='font-bold uppercase mb-2'>Account & Orders</h4>
        <hr className='w-[56px] mb-4 border-orange-500' />
        <ul className='text-sm'>
          <li className='px-4 cursor-pointer mb-1'>
            <a className='text-white/80 hover:text-white' href='#'>
              Register
            </a>
          </li>
          <li className='px-4 cursor-pointer mb-1'>
            <a className='text-white/80 hover:text-white' href='#'>
              My Account
            </a>
          </li>
          <li className='px-4 cursor-pointer mb-1'>
            <a className='text-white/80 hover:text-white' href='#'>
              Orders
            </a>
          </li>
          <li className='px-4 cursor-pointer mb-1'>
            <a className='text-white/80 hover:text-white' href='#'>
              GDPR Tools
            </a>
          </li>
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
