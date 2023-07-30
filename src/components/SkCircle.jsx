import React,{useEffect,useRef} from "react";
import { motion } from "framer-motion";

const SkCircle=(props)=>{
    
    
    return(
      <motion.div
      initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 0.5 }}
         variants={{
           hidden: { opacity: 0, x: -50 },
           visible: { opacity: 1, x: 0 },
         }}
      >
        <div  className="flex" >
             <div className="outer h-[160px] w-[160px] p-[20px] relative rounded-full shadow-md bg-white dark:bg-gray-800">
        <div className="inner h-[120px] w-[120px] rounded-full custom-box-shadow flex justify-center items-center mr-[20px]">
        <div id="number"className="  text-gray-700 font-bold">{props.val}%</div>
        </div>
      </div>
      <div >
      <svg className="absolute ml-[-160px] mt-[-0px]" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#DA22FF" />
               <stop offset="100%" stop-color="#9733EE" />
            </linearGradient>
         </defs>
         <circle className="cir22 " cx="80" cy="80" r="70" stroke-linecap="round" />
 </svg>
 </div>
        </div>
        </motion.div>
    );
}
export default SkCircle;