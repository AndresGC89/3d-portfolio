import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName, backgroundColor) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} w-full mx-auto relative z-0 app__container`}
        style={{ backgroundColor: backgroundColor }}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <div className="app__wrapper app__flex">
          <Component />
        </div>
      </motion.section>
    );
  };

export default StarWrapper;
