
import { isVisible } from "@testing-library/user-event/dist/utils";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { useTypewriter,Cursor } from "react-simple-typewriter";


const Landing = ({ setSelectedpage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const [text]=useTypewriter({
    words:["Full-Stack Developer.","Professional Coder.","Software engineer.","Full-Stack Developer.","Professional Coder.","Software engineer.","Full-Stack Developer.","Professional Coder.","Software engineer.","Full-Stack Developer.","Professional Coder.","Software engineer.","Full-Stack Developer.","Professional Coder.","Software engineer.","Full-Stack Developer.","Professional Coder.","Software engineer.","Full-Stack Developer.","Professional Coder.","Software engineer.","Full-Stack Developer.","Professional Coder.","Software engineer."],
    Loop:0,
    typeSpeed:20,
    deleteSpeed:10,
    delaySpeed:2000,
  });
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-wheat before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="./assets/PAPJ.jpg"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="./assets/PAPJ.jpg"
          />
        )}
        </div>
          <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
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
          {/* <p className="text-5xl font-playfair z-10 text-center md:text-start mb-[100px]">
            Aakash {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[35px] before:-top-[115px] before:z-[-1]"
            >
              Chaudhary
            </span>
          </p> */}

          <p className="mt-20 mb-7 text-1xl text-center md:text-start">
         <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-bold text-white">
            {""}Hi,Im<span className="text-designColor">{" "}Aakash Chaudhary</span></h1>
            <h2 className="text-4xl font-bold text-white" >a <span>{text}</span>
            <Cursor 
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
            />
            </h2>
         </div>
          </p>
        </motion.div>
        {/* ACTION BUTTONS  */}
         <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedpage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedpage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>
      <motion.div
       className="flex mt-5 justify-center md:justify-start"
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       transition={{ delay: 0.2, duration: 0.5 }}
       variants={{
         hidden: { opacity: 0, x: -50 },
         visible: { opacity: 1, x: 0 },
       }}
      >
        <SocialMediaIcons/>

      </motion.div>

        </div>
      
      </section>)
}
export default Landing;