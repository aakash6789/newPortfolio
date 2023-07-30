export const headerVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        delay: 1,
      },
    },
  };
  
  export const slideIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  });
  
  export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });
  
  export const textVariant = (delay) => ({
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      },
    },
  });
  
  export const textContainer = {
    hidden: {
      opacity: 0,
    },
    show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
  };
  
  export const textVariant2 = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: "easeIn",
      },
    },
  };
  
  export const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  });
  
  export const planetVariants = (direction) => ({
    hidden: {
      x: direction === "left" ? "-100%" : "100%",
      rotate: 120,
    },
    show: {
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        duration: 1.8,
        delay: 0.5,
      },
    },
  });
  
  export const zoomIn = (delay, duration) => ({
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay,
        duration,
        ease: "easeOut",
      },
    },
  });
  
  export const footerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        delay: 0.5,
      },
    },
  };
  
  export const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  
  export const workExp = [
    {
      place: "Mumbai",
      tenure: "Jun 2003 - Aug 2019",
      role: "Schooling",
      detail:
        "I did my schooling from RBK school near Mumbai,I was heavily involved in academics especially technology,sports and also I was part of student council",
    },
    {
      place: "Self-Employed, Jaipur",
      tenure: "Jan 2021 - Jan 2023",
      role: "Web Devloper",
      detail:
        "In my college,apart from academics and sports I developed a keen interest in field of technology development,so I stepped up in web development",
    },
    
    {
      place: "Manipal University Jaipur",
      tenure: "Jan 2023 - May 2023",
      role: "Intern",
      detail:
        "I was a part of a team which was responsible to make website for teachers,which keeps track of their annual performance and gives them entire report by end of academic year,this website is now deployed and handling data of more than 200 teachers",
    },
  ];


  export const staggerChildren = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  
  export const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  
  export const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 640) {
      console.log("outside of sidebar reached")
      return { right: !menuOpened && "-100%" };
    }
  };