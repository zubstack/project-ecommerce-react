import './style.css';
import banner0 from '../../assets/banners/clothing.jpg';
import banner1 from '../../assets/banners/shoes.jpg';
import banner2 from '../../assets/banners/equipment.jpg';
import banner3 from '../../assets/banners/sneakers.jpg';
import { Link } from 'react-router-dom';

const banners = [
  {
    img: banner0,
    caption: 'Clothing',
    to: '/',
  },
  {
    img: banner1,
    caption: 'Basquetball shoes',
    to: '/',
  },
  {
    img: banner2,
    caption: 'Equipmet',
    to: '/',
  },
  {
    img: banner3,
    caption: 'Sneakers',
    to: '/',
  },
];

function Banners() {
  return (
    <div id='banners__container'>
      {banners.map((banner) => (
        <>
          <Link key={banner.caption}>
            {/* <span>{banner.caption}</span> */}
          </Link>
          <div className='banner__img'>
            <img
              src={banner.img}
              alt={banner.caption}
              className='w-full h-full'
            />
            <span className='text-white mt-[-60px]'>{banner.caption}</span>
          </div>
        </>
      ))}
    </div>
  );
}

export default Banners;
