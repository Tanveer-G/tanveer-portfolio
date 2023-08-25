import Image from 'next/image';
import BulbImg from '@/public/bulb.png';
import style from './css/Bulb.module.css'

const Bulb = () => {
  return (
  <div className={style.bulb}>
    <Image className={style.bulbImg}
    src={BulbImg}
    width={260}
    height={200}
    alt=''
    />
  </div>
  );
};

export default Bulb;
