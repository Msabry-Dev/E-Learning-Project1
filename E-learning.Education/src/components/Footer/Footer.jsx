import { FaInstagram, FaWhatsapp, FaYoutube, FaFacebook } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className='py-28 bg-[#f7f7f7]'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4'>
          {/* First Section */}
          <div className='space-y-4 max-w-[300px] sm:m-auto md:m-0'>
            <h1 className='text-2xl font-bold'>The Coding Journey</h1>
            <p className='text-dark2'>
              TCJ is a platform dedicated to empowering aspiring developers.
              From beginner tutorials to advanced programming concepts, we
              provide a comprehensive learning experience designed to help you
              master coding skills, build projects, and launch your tech career.
            </p>
          </div>
          {/* Second Section */}
          <div className='grid grid-cols-2 gap-10 sm:m-auto md:m-0'>
            <div className='space-y-4'>
              <h1 className='text-2xl font-bold'>Courses</h1>
              <div className='text-dark2'>
                <ul className='space-y-2 text-lg'>
                  <li className='cursor-pointer hover:text-secondary duration-200'>
                    Web Development
                  </li>
                  <li className='cursor-pointer hover:text-secondary duration-200'>
                    Software Development
                  </li>
                  <li className='cursor-pointer hover:text-secondary duration-200'>
                    Apps Development
                  </li>
                  <li className='cursor-pointer hover:text-secondary duration-200'>
                    E-learning
                  </li>
                </ul>
              </div>
            </div>
            <div className='space-y-4 sm:m-auto md:m-0'>
              <h1 className='text-2xl font-bold'>Links</h1>
              <div className='text-dark2'>
                <ul className='space-y-2 text-lg'>
                  <li className='cursor-pointer hover:text-secondary duration-200'>
                    Home
                  </li>
                  <li className='cursor-pointer hover:text-secondary duration-200'>
                    Services
                  </li>
                  <li className='cursor-pointer hover:text-secondary duration-200'>
                    About
                  </li>
                  <li className='cursor-pointer hover:text-secondary duration-200'>
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Third Section */}
          <div className='space-y-4 max-w-[300px] sm:m-auto md:m-0'>
            <h1 className='text-2xl font-bold'>Get In Touch</h1>
            <div className='flex items-center'>
              <input
                type='text'
                placeholder='Enter your email'
                className='p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2 border border-1 border-slate-400'
              />
              <button className='bg-secondary text-white font-semibold py-4 px-6 rounded-e-xl '>
                Go
              </button>
            </div>
            {/* social icons */}
            <div className='flex space-x-6 py-3 items-center justify-between'>
              <a href='https://www.google.com'>
                <TbWorldWww className=' text-2xl  cursor-pointer hover:text-[red] hover:scale-110 duration-200' />
              </a>
              <a href='https://chat.whatsapp.com'>
                <FaWhatsapp className='text-2xl  cursor-pointer hover:text-[green] hover:scale-110 duration-200' />
              </a>
              <a href='https://www.instagram.com'>
                <FaInstagram className=' text-2xl  cursor-pointer hover:text-[red] hover:scale-110 duration-200' />
              </a>
              <a href='https://www.youtube.com'>
                <FaYoutube className=' text-2xl  cursor-pointer hover:text-[red] hover:scale-110 duration-200' />
              </a>
              <a href='https://www.facebook.com'>
                <FaFacebook className=' text-2xl cursor-pointer hover:text-secondary hover:scale-110 duration-200' />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;