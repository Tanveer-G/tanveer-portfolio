import Image from "next/image";
import style from './css/Circles.module.css';
import CircleImg from '../public/circles.png';
const Circles = () => {
  return (
    <div className={style.circle}>
      <Image src={CircleImg}
      width={260}
      height={200}
      alt=''/>
      </div>
  );
};

export default Circles;