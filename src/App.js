import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar"
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import React,{useRef} from "react";
import LineGradient from "./components/LineGradient";
import Burr from "./scenes/Burr";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import { motion } from "framer-motion";
import Testimonials from "./scenes/Testimonials";
import People from "./components/People/People"
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import Myskills1 from "./components/newSkills/Myskills1";




function App() {
  const [selectedPage,setSelectedpage]=useState('home');
  const [isTopOfPage,setIsTopofPage]=useState(true);
  const isAboveMediumScreens=useMediaQuery("(min-width:1060px)");
 

  

  useEffect(()=>{
    const handleScroll=()=>{
      // if(window.scrollY===0)setIsTopofPage(true);
      if (window.scrollY === 0) {
        setIsTopofPage(true);
        setSelectedpage("home");
      }
      if(window.scrollY!==0)setIsTopofPage(false);
    }
    window.addEventListener("scroll",handleScroll);
    return()=>window.removeEventListener("scroll",handleScroll);
  },[]);
  return (
    <div className="app" style={{backgroundColor:"black"}}>
      <Navbar isTopOfPage={isTopOfPage}selectedPage={selectedPage} setSelectedpage={setSelectedpage}></Navbar>
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (<DotGroup selectedPage={selectedPage} setSelectedpage={setSelectedpage}/>)}
        {/* <Landing setSelectedpage={setSelectedpage}/> */}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedpage("home")}
        >
          <Landing setSelectedpage={setSelectedpage} />
        </motion.div>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-[2000px]">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedpage("skills")}
        >
        <Myskills1/>
          {/* <MySkills /> */}
        </motion.div>
        </div>
       <LineGradient/>
       <div className="w-5/6 mx-auto ">
        {/* <Projects/> */}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedpage("projects")}
        >
          <Projects />
        </motion.div>
        </div>
        <LineGradient/>
        <div className="w-4/6 mx-auto ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedpage("testimonials")}
        >
          {/* <Testimonials /> */}
          <People/>
        </motion.div>
          </div>
          <div className="w-5/6 mx-auto ">
          <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedpage("contact")}
        >
          <Contact />
        </motion.div>
        </div>
        <div>
          <Footer/>
        </div>
        
       
    </div>
  );
}

export default App;
// bg-deep-blue