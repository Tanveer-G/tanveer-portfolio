import Image from "next/image";
import style from "./css/TopLeftPic.module.css";
import TopLeftIMG from '@/public/top-left-img.png';

const TopLeftPic = () => {
  return (
  <div className={style.topLeftPic} dir="ltr">
    <Image src={TopLeftIMG} alt="" width={300} height={300}/>
  </div>
  );
};

export default TopLeftPic;
