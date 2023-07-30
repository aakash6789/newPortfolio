import React from "react";
import { footerVariants, staggerChildren,textVariant,textVariant2 } from "../../utils/Motion";
import css from "./People.module.scss"
import LineGradient from "../LineGradient";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { comments, sliderSettings } from "./Data";
import useMediaQuery from "../../hooks/useMediaQuery";

const People = () => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    const isAboveSmallScreens=useMediaQuery("(min-width:768px)");
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
      <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      section className={`text-black padding  ${css.wrapper}`}  id="testimonials">
  
        <a className="anchor" id="people"></a>
  
        <motion.div
        variants={footerVariants}
        className={` innerWidth ${css.container}`}>
  
  
  <motion.div
        className="md:w-1/3 h-2/3 text-center justify-center mx-auto mt-[30px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-white text-center">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Here's What People are Saying About My Work. Aliquam aliquet integer
          ut fames odio in at. At magna ornare dictum lectus.
        </p>
      </motion.div>
  
  
  
          <div className={`yPaddings h-[550px] ${css.comments}`}>
            {/* to use slider , we have to inlcude css in index.html head */}
            <Slider {...sliderSettings} className={` ${css.slider}`}>
              {comments.map((comment, i) => {
                return (
                  <div className={`flexCenter ${css.comment}`}>
                    <p>{comment.comment}</p>
                    <div className={css.line}></div>
                    <div className={css.bio}>
                      <span className="text-2xl">{comment.name}</span>
                      <span className="text-1xl">{comment.post}</span>
                      <div>
                      {isAboveSmallScreens?(<img src={comment.img}  style={{marginTop:"-4px",marginLeft:"590px",width:"70px",height:"70px"}} alt="" />):(<img className="ml-[300px]" src={comment.img} alt="" />)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
  
  
        </motion.div>
  
      </motion.section>
    );
  };
  export default People;