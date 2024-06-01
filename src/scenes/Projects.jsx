import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
 
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  const isAboveSmallScreens=useMediaQuery("(min-width:640px)");
  return (
    <section id="projects" className="pt-48 pb-48 mt-20">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-blue">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 mx-4">
          Here is some fo my work as a FullStack Developer, please feel free to look  
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className={`flex ${isAboveSmallScreens ? "flex" : "flex-col"} justify-center mx-4 items-baseline font-playfair`}>
        <div className={`mx-auto px-4 rounded-xl py-4 ${isAboveSmallScreens ? "w-[30%]" : "w-[80%]"} border-black  bg-white text-black hover:bg-black hover:text-white hover:scale-110 hover:transition ease-in-out delay-150 `}>
          <h1 className="text-center font-bold text-[1rem] md:text-[1.4rem]">WrestlingHub</h1>
          <div className="mt-[4vh] text-[0.8rem]">WrestlingHub is an engaging platform dedicated to the vibrant world of professional wrestling. Designed to be the go-to destination for pro-wrestling enthusiasts, WrestlingHub offers a rich collection of content that caters to fans' insatiable appetite for stories, matches, and updates about their favorite superstars.</div>
          <button className="mx-auto block mt-[3vh]  xs:bottom-4"><a href="https://github.com/aakash6789/WrestlingHub" target="_blank">View source code</a></button>
        </div>
        <div className={`mx-auto rounded-xl   my-6 py-4 px-4  ${isAboveSmallScreens ? "w-[30%]" : "w-[80%]"} border-black bg-white text-black hover:bg-black hover:text-white hover:scale-110 hover:transition ease-in-out delay-150`}>
        <h1 className="text-center font-bold text-[0.7rem] md:text-[1.4rem]">Headless CMS</h1>
          <div className="mt-[4vh] relative text-[0.8rem]">A Content Management System (CMS) is a software application that allows users to create, manage, and modify content on a website without requiring specialized technical knowledge catering to various types of content management needs, including performing CRUD operations on tables.</div>
          <button className="mx-auto mt-[3vh] block xs:bottom-4"><a href="https://github.com/aakash6789/CampusConnectLive" target="_blank">View source code</a></button>
        </div>
        <div className={`mx-auto rounded-xl  px-4 py-4  ${isAboveSmallScreens ? "w-[30%]" : "w-[80%]"} border-black bg-white text-black hover:bg-black hover:text-white hover:scale-110 hover:transition ease-in-out delay-150`}>
        <h1 className="text-center font-bold text-[1rem] md:text-[1.4rem] ">CustomTube</h1>
          <div className="mt-[3vh] text-[0.8rem]">A backend specific project trying to emulate the backend of youtube. From creating the data models, to trying out various practices for writing standard code has been my major area of focus. I have also tried to implement mongoDB aggregation models to deepen my understanding on mongodb further</div>
        <button className="mx-auto mt-[3vh] block xs:bottom-4 border-black"><a href="https://github.com/aakash6789/Backend-pro" target="_blank">View source code</a></button>
        </div>
      </div>
    </section>
  );
};

export default Projects;