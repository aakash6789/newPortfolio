import React from "react";
import {TbBrandMysql} from "react-icons/tb";
import {AiFillHtml5} from "react-icons/ai";
import {BiLogoTailwindCss} from "react-icons/bi";
import {BiSolidFileCss} from "react-icons/bi";
import {BiLogoJavascript} from "react-icons/bi";
import {BiLogoTypescript} from "react-icons/bi";
import {SiMongodb} from "react-icons/si";
import {BiLogoReact} from "react-icons/bi";
import {SiExpress} from "react-icons/si";
import {SiMui} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa"
import "./experience.css"
import { motion } from "framer-motion";
import { draw, fadeIn, slideIn, staggerChildren, textVariant2, zoomIn } from "../../utils/Motion";
import { workExp } from "../../utils/Motion";
import css from "./Work.module.scss"
import useMediaQuery from "../../hooks/useMediaQuery";
import MySkills from "../../scenes/MySkills";
import LineGradient from "../LineGradient";






const Myskills1=()=>{
    const isAboveSmallScreens=useMediaQuery("(min-width:768px)");
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

    return(
        <section id="skills" className="md:h-full text-black w-full mt-16">
            <h5>What skills I have</h5>
                <h2 className="text-4xl font-bold pb-[80px] pt-[40px] text-center text-white">My Experience</h2>
            <div className="container experience_container">
                <div className="experience_frontend hover:text-white">
                <h3 className="">Frontend Development</h3>
                <div className="experience_content">
                    <article className="experience_details">
                    
                    <AiFillHtml5/>
                    <div>
                    <h4>HTML</h4>
                    <small className="text-light">Experienced</small>
                    </div>
                    </article>
                    <article className="experience_details">
                    <BiSolidFileCss/>
                    <div>
                    <h4>CSS</h4>
                    <small className="text-light">Experienced</small>
                    </div>
                    </article>
                    <article className="experience_details">
                    <BiLogoTailwindCss/>
                    <div>
                    <h4>TAILWIND-CSS</h4>
                    <small className="text-light">Experienced</small>
                    </div>
                    </article>
                    <article className="experience_details">
                    <BiLogoJavascript/>
                    <div>
                    <h4>JAVASCRIPT</h4>
                    <small className="text-light">Experienced</small>
                    </div>
                    </article>
                    <article className="experience_details">
                    <SiMui/>
                    <div>
                    <h4>MATERIAL-UI</h4>
                    <small className="text-light">Experienced</small>
                    </div>
                    </article>
                    <article className="experience_details">
                    <BiLogoReact/>
                    <div>
                    <h4>ReactJS</h4>
                    <small className="text-light">Experienced</small>
                    </div>
                    </article>
                </div>

                </div>
                <div className="experience_backend">
                <h3>Backend Development</h3>
                <div className="experience_content">
                <article className="experience_details">
                    <FaNodeJs/>
                    <div>
                    <h4>NodeJS</h4>
                    <small className="text-light">Experienced</small>
                    </div>
                    </article>
                    <article className="experience_details">
                    <SiExpress/>
                    <div>
                    <h4>Express</h4>
                    <small className="text-light">Experienced</small>
                    </div>
                    </article>
                    <article className="experience_details">
                    <TbBrandMysql/>
                    <div>
                    <h4>mySQL</h4>
                    <small className="text-light">Experienced</small>
                    </div>
                    </article>
                    <article className="experience_details">
                    <SiMongodb/>
                    <div>
                    <h4>mongoDB</h4>
                    <small className="text-light">Experienced</small>
                    </div>
                    </article>
                    <article className="experience_details">
                    <BiLogoJavascript/>
                    <div>
                    <h4>JAVASCRIPT</h4>
                    <small className="text-light">Experienced</small>
                    </div>
                    </article>
                    <article className="experience_details">
                    <BiLogoTypescript/>
                    <div>
                    <h4>TYPESCRIPT</h4>
                    <small className="text-light">Experienced</small>
                    </div>
                    </article>
                    </div>
                </div>

            </div>
         
            
            <motion.section 
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={` ${css.wrapper} text-white`}>
            <a className="anchor" id="work"></a>
          <div className={` ${css.container}`}>
        
        <div className={` ${css.experiences} relative text-[0.7rem]`}>
          {/* {workExp.map((exp, i) => {
            return (
              <motion.div variants={textVariant2} key={i} className={`flex-row ${css.exp} `} >
                <div className="fixer" style={{marginTop:"100px"}}>
                <div className={`w-[3/4] ${css.post} `}>
                  <h1>{exp.place}</h1>
                  <p>{exp.tenure}</p>
                </div>
                </div>
                {isAboveLarge?<div style={{marginLeft:"1084px"}} className={`${css.role} ml-[1084px]`}>
                  <h1 className="text-3xl ">{exp.role}</h1>
                  <p>{exp.detail}</p>
                </div>:<div className={`${css.role1} `}>
                  <h1 className="text-3xl ">{exp.role}</h1>
                  <p>{exp.detail}</p>
                </div>}
                
              </motion.div>
            );
          })} */}
            
            
              <motion.div variants={textVariant2}  className={`flex-row ${css.exp} relative`} >
                <div className="fixer" style={{marginTop:"150px"}}>
                <div className={`w-[3/4] ${css.post} `}>
                  <div style={{marginBottom:"100px"}}>
                  <h1>Mumbai</h1>
                  <p>Jun 2003 - Aug 2019</p>
                  </div>
                  <div style={{marginBottom:"100px",marginTop:"220px"}}>
                  <h1>Manipal University Jaipur</h1>
                  <p>Jan 2023 - May 2023</p>
                  </div>
                  <div style={{marginTop:"171px"}}>
                  <h1>Troop</h1>
                  <p>Mar 2024 - Present</p>
                  </div>
                  
                </div>
                </div>
                <div  className={`${css.role} absolute right-0 w-[40%] `}>
                  <div style={{marginTop:"-645px",marginBottom:"6px"}} className="absolute right-0" >
                  <h1 className="text-[1.5rem] mb-2 ">Schooling</h1>
                  <p className="pl-[0%]">I completed my schooling at RBK School near Mumbai, where I actively engaged in various academic and extracurricular activities. I had a particular passion for technology and sports.</p>
                  </div>
                  <div  className=" absolute right-0 mt-[-380px]">
                  <h1 className="text-[1.5rem] ">Frontend intern </h1>
                  <p>I was a part of a team which was responsible to make website for teachers,which keeps track of their annual performance and gives them entire report by end of academic year,this website is now deployed and handling data of more than 200 teachers</p>
                  </div>
                  <div style={{marginTop:"-10vh"}} className="absolute right-0">
                  <h1 className="text-[1.5rem] ">SDE intern</h1>
                  <p>Collaborated with a team to conceptualize and craft a clean 100 % completely responsive home page utilizing ReactJS and Tailwind CSS.</p>
                  </div>
                 
                </div>
                
              </motion.div>
           
         



          <motion.div variants={zoomIn(1, 1)} className={`${css.progressbar} absolute left-[0%]`} style={{marginTop:"-584px"}} >
            <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
            <div><div className={css.circle} style={{background: "#286F6C",marginTop:"10px"}}></div></div>
            <div><div className={css.circle} style={{background: "#F2704E",marginTop:"69px"}}></div></div>
            <div><div className={css.circle} style={{background: "#EEC048",marginTop:"48px"}}></div></div>
          </motion.div>

        </div>
      </div><div></div>
             
            </motion.section>
           
           
        
           
        </section>
    )

}
export default Myskills1;