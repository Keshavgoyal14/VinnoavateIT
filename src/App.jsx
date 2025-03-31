import React,{useState,useEffect} from 'react'
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaFacebook,FaGithub  ,FaLinkedin } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import Navigate from './Navigation';
import { ReactTyped } from 'react-typed';
import { Pagination, Navigation ,Autoplay} from 'swiper/modules';
const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove=(e)=>{
      setCursorPosition({x:e.clientX,y:e.clientY})
    }
    window.addEventListener('mousemove',handleMouseMove)
    return()=>{
      window.removeEventListener('mousemove',handleMouseMove)
    }
  },[])
  return (
    <div className='bg-black  text-purple-100 min-h-screen '>
      <div
        className="w-5 h-5 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full pointer-events-none fixed transform -translate-x-1/2 -translate-y-1/2 transition-all duration-0.1"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      ></div>
      <Navigate/>
      <div id='home' className='h-[500px]  md:h-[700px] pt-20'>
      <motion.h1
          className='text-5xl md:text-8xl text-purple-200 text-center mt-15 p-4 font-extrabold max-sm:text-center'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2}}
        >
          Vinnovate<span className='text-purple-400'>IT</span>
        </motion.h1>
        <h2 className='text-xl md:text-3xl text-purple-200 text-center mt-5 font-extrabold'>We create.{''}
        <motion.span className='text-purple-400'
        initial={{rotateX:180 ,opacity:0,scale:0.8}}
        animate={{rotateX:360,opacity:1,scale:1}}
        transition={{duration:1.5}}
        style={{display:'inline-block'}}> We innovate!</motion.span>
        </h2>
      </div>
      <motion.div 
      id='about' 
      className='bg-gray-900 m-5 p-5 rounded-lg box-shadow-lg h-screen'
      initial={{opacity:0,y:-50}}
      animate={{opacity:1,y:0}}
      transition={{duration:1.5}}
   >
        <motion.h1 className='text-2xl md:text-4xl text-center font-extrabold text-purple-300 m-10 transition delay-150 duartion-300 ease-in-out hover:translate-y-1 hover:scale-105'
        initial={{opacity:0,x:-50}}
        animate={{opacity:2,x:0}}
        transition={{duration:2}}
        viewport={{ once: true }}>About</motion.h1>
        <div className='flex flex-col  md:flex-row  items-center justify-center md:h-[70%] h-screen'>
        <div className='md:w-[50%] m-5'>  <motion.img
        initail={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        transition={{duration:2,ease:"easeOut"}}
        viewport={{ once: true }} src="https://ik.imagekit.io/xlbzk26wac/images/vinnovateit_EgCI8Dhlv.jpeg" alt="" 
        className='w-[500px] h-[300px] md:w-[550px] md:h-[400px]] md:ml-4 rounded-lg shadow-lg border-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105' />
        </div><motion.span  initail={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        transition={{duration:2,ease:"easeOut"}}
        viewport={{ once: true }}
        className='w-full md:w-[50%] h-screen md:h-auto text-center text-gray-300 px-5 font-bold md:text-xl text-purple-100'>
         <ReactTyped
        strings={[
          "Welcome to VinnovateIT, where curiosity meets innovation!",
          "We’re not just another tech hub—we’re a launchpad for dreamers, builders, and problem-solvers.",
          "Whether it's AI, robotics, cloud computing, or full-stack development, we push boundaries and turn ideas into reality.",
          "If you’re ready to explore, experiment, and innovate, step into VinnovateIT—where the future is built today! 🚀"
        ]}
        typeSpeed={80}
        backSpeed={40}
        loop/></motion.span> 
        </div>
      </motion.div>


      <div id="projects" className='mt-30 md:h-screen md:mt-10'> 
        <h1 className='text-2xl md:text-3xl transition delay-150 duartion-300 ease-in-out hover:translate-y-1 hover:scale-105  text-center font-extrabold text-purple-300 mb-10'>Projects</h1>
          <Swiper 
        modules={[Pagination, Navigation,Autoplay]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        spaceBetween={30}
        className="w-[90%] mx-auto ">
          <SwiperSlide>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg flex flex-col md:flex-row  md:items-center justify-space space-y-5 md:space-y-0 md:space-x-10 ">
          <div className='w-full md:w-[50%] justify-center  items-center '> <img src="https://www.bing.com/images/blob?bcid=S9wcl7792kcIs1YGMTPvQTKDEB.j.....2s" alt="MessIT" 
          className='w-[250px] h-[300px] md:w-[300px] md:h-[480px]  rounded-lg  md:ml-40 shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'  />
          </div> 
          <div className='w-full mb-10 md:mb-0 md:w-[50%] flex flex-col mr-20 items-center text-center ' ><h2 className="text-4xl text-purple-300 font-bold  text-center mb-20 transition delay-150 duartion-300 ease-in-out hover:translate-y-1 hover:scale-105">MessIT</h2>
          <p className='text-xl font-semibold text-purple-100 text-center'>MessIt by VinnovateIT is a lifestyle app designed to simplify hostel dining experiences. It provides features like viewing the mess menu, personalized notifications, and reminders to ensure you never miss a meal. The app aims to "unmess the mess" by offering convenience and ease for hostel residents</p></div>
             </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="bg-gray-800 p-5 md:h-[480px] rounded-lg shadow-lg flex flex-col md:flex-row  md:items-center justify-space space-x-20 ">
          <div className='md:w-[50%] items-center justify-center '> <img src="https://i.postimg.cc/SNfzS7s4/image.png" alt="BunkBuddies" 
          className='w-[250px] h-[300px] md:w-[400px] md:h-[400px] mb-10  md:mb-0 rounded-lg md:ml-40 shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'  />
          </div> 
          <div className='w-full mb-10 md:mb-0 md:w-[50%] flex flex-col mr-20 items-center text-center' ><h2 className="text-4xl text-purple-300 font-bold text-center mb-20 transition ease-in-out delay-150 duration-300 hover:translate-y-1 hover:scale-105">BunkBuddies</h2>
          <p className='text-xl font-semibold text-purple-100 text-center'>BunkBuddies by VinnovateIT is an innovative platform designed to help students find compatible roommates. It simplifies the process by allowing users to create profiles, search for potential roommates, and initiate communication.</p></div>
             </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg flex flex-col md:flex-row  md:items-center justify-space space-x-10 ">
          <div className='w-full md:w-[50%] items-center justify-center '> <img src="https://i.postimg.cc/QCVc9Fnm/image.png" alt="VinManager" 
          className=' w-[250px] h-[300px] md:w-[400px] md:h-[450px] mb-10 md:mb-0 rounded-lg md:ml-40 shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'  />
          </div> 
          <div className='w-full mb-10 md:mb-0 md:w-[50%] flex flex-col mr-20 items-center text-center' ><h2 className="text-4xl text-purple-300 font-bold text-center mb-20 transition delay-150 duartion-300 ease-in-out hover:translate-y-1 hover:scale-105 ">VinManager</h2>
          <p className='text-xl font-semibold text-purple-100 text-center'>VinManager by VinnovateIT is a comprehensive management tool designed to streamline  tasks</p></div>
             </div>
          </SwiperSlide>
         
        </Swiper>
      </div>

      <div className='h-auto m-10 md:m-0 p-4 md:h-[100px]'>
  <footer className="w-[90%] mx-auto text-center">
    <p className="text-sm md:text-lg font-semibold">
      © {new Date().getFullYear()} VinnovateIT. All rights reserved.
    </p>
    <div className="flex justify-center space-x-5 mt-3">
    <FaFacebook size={25} />
    <CiTwitter size={25}  />
    <FaLinkedin size={25}  />
    <FaGithub size={25}  />
    </div>
  </footer>
      </div>
    </div>
  )
}

export default App
