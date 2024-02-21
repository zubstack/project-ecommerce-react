import image from '../../assets/sneakers0.jpg';
import './style.css';

function Billboard() {
  return (
    <div className='billboard mb-10'>
      {/* <div
        className='w-full rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover'
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        /* <div className='h-full w-full flex flex-col justify-center items-center text-center gap-y-8'>
          <div className='font-rajdhani text-3xl sm:text-5xl lg:text-6xl sm:max-wxl '>
            {labelInfo}
          </div>
        </div> 
      </div> */}
      <img src={image} alt='billboard' />
    </div>
  );
}

export default Billboard;
