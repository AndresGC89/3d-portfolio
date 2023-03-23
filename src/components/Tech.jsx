import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center pink-text-gradient`}>Tech</p>
        <h2 className={`${styles.sectionHeadText} green-pink-text-gradient`}>Skills</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10 max-w-6xl mt-20'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "", "#EDF2F8");
