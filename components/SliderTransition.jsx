import { motion } from "framer-motion";
import style from "./css/SliderTransition.module.css";

const tv = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const SliderTransition = () => {
  return (
    <>
      <motion.div
        className={style.SliderTransition1}
        variants={tv}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.55, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className={style.SliderTransition2}
        variants={tv}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.35, duration: 0.55, ease: "easeInOut" }}
      />
      <motion.div
        className={style.SliderTransition3}
        variants={tv}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.45, duration: 0.55, ease: "easeInOut" }}
      />
    </>
  );
};

export default SliderTransition;