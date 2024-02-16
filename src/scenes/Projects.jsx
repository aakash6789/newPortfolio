import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

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
  return (
    <section id="projects" className="pt-48 pb-48">
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
        <p className="mt-10 mb-10">
          Here is some fo my work as a Web developer,Please feel free to look  
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center ">
        <div className="relative px-4 w-[30%] border-black mx-4 bg-white text-black">
          <h2 className=" absolute left-1/2 transform -translate-x-1/2">WrestlingHub</h2>
          <div className="mt-[4vh]">WrestlingHub is ultimate treat for pro-wrestling fans where they can read unheard stories about their favourite superstars, watch best matches of all time etc</div>
        </div>
        <div className="relative mx-4 px-4 w-[30%] border-black bg-white text-black">
        <h2 className=" absolute left-1/2 transform -translate-x-1/2">CampusConnectLive</h2>
          <div className="mt-[4vh]">With CampusConnectLive, I am aiming to solve a real world problem.Using this an app, no student can ever misbehave in an online meeting helping colleges and companies to carry out a better flow of communication.</div>
        </div>
        <div className=" relative px-4  w-[30%] border-black bg-white text-black">
        <h2 className="absolute left-1/2 transform -translate-x-1/2">CustomTube</h2>
          <div className="mt-[4vh]">A backend project trying to emulate the backend of youtube.From creating the data models, to trying out various practices for writing standard code has been my major area of focus. I have also tried to implement mongoDB aggregation models</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;