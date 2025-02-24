import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <header className="flex justify-between p-6 container mx-auto">
        <h1 className="text-2xl font-bold">Mohsen Bakhit</h1>
        <div className={`relative w-12 h-6 flex items-center ${darkMode ? 'bg-gray-300' : 'dark:bg-gray-600'} rounded-full p-1 cursor-pointer`} onClick={() => setDarkMode(!darkMode)}>
          <label className={`w-4 h-4 rounded-full shadow-md transform duration-300 ${darkMode ? 'translate-x-5' : 'translate-x-0'}`} style={{ lineHeight: '1rem' }}>
            {darkMode ? "🌙" : "☀️"}
          </label>
        </div>
      </header>

      <main className="container mx-auto px-6">
        <section className="text-center my-20 grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <motion.img
            src="me.jpeg" className="rounded w-80 h-auto mx-auto"
            initial={{ x: -200, y: -20 }}
            animate={{ x: 0, y: 0 }}
          />
          <div>
            <motion.h2
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Hi, I&apos;m Mohsen
            </motion.h2>
            <p className={`${darkMode ? 'text-gray-500' : 'text-gray-700'} mt-4`}>
              Software Engineer | Fantasy Enjoyer | Amateur Weightlifter 
            </p>
            <motion.h2
              className="text-red-500 font-bold text-2xl mt-5 text-left"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Stacks and Tools:
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
              <div className="flex items-center">
                <img src="python.png" alt="Python" className="w-8 h-auto mr-2" />
                <span>Python</span>
              </div>
              <div className="flex items-center">
                <img src="go.png" alt="Go" className="w-8 h-8 mr-2" />
                <span>Go</span>
              </div>
              <div className="flex items-center">
                <img src="js.png" alt="JavaScript" className="w-8 h-8 mr-2" />
                <span>JavaScript</span>
              </div>
              <div className="flex items-center">
                <img src="cpp.png" alt="C++" className="w-8 h-auto mr-2" />
                <span>C++</span>
              </div>
              <div className="flex items-center">
                <img src="react.png" alt="React" className="w-8 h-auto mr-2" />
                <span>React</span>
              </div>
              <div className="flex items-center">
                <img src="pandas.svg" alt="pandas" className="w-8 h-8 mr-2" />
                <span>pandas</span>
              </div>
              <div className="flex items-center">
                <img src="tensorflow.png" alt="tensorflow" className="w-8 h-8 mr-2" />
                <span>Tensorflow</span>
              </div>
              <div className="flex items-center">
                <img src="git.png" alt="git" className="w-8 h-8 mr-2" />
                <span>git</span>
              </div>
            </div>
          </div>
        </section>

        <section className="my-20">
          <h3 className="text-3xl font-semibold">Experience</h3>
          <motion.div
            className="p-6 border rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              className="w-20 h-auto"
              src="mc.png"
              alt="mastercard"
            />
            <p>Software Engineer Co-Op</p>
          </motion.div>
          <motion.div
            className="p-6 border rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              className="w-28 h-auto"
              src="cibc.jpeg"
              alt="mastercard"
            />
            <p>Software Engineer Co-Op</p>
          </motion.div>
          <motion.div
            className="p-6 border rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              className="w-40 h-auto"
              src="ubc.png"
              alt="mastercard"
            />
            <p>Software Engineer Co-Op</p>
            <p>Undergraduate Research Assistant</p>
          </motion.div>
        </section>

        <section className="my-20">
          <h3 className="text-3xl font-semibold">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            
          <a href="https://github.com/mohsenbakhit/fbdr">
            <motion.div
              className="p-6 border rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
                <h4 className="text-xl font-semibold">FBDR</h4>
                <p className={`${darkMode ? 'text-gray-300' : 'dark:text-gray-600'}`}>A newsletter that generate custom text based on your favourite teams and players using Gemini API.<br/>Made as part of the Google x MLB Hackathon.</p>
              </motion.div>
            </a>
            <a href="https://github.com/mohsenbakhit/gwent">
              <motion.div
                className="p-6 border rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-xl font-semibold">Gwent</h4>
                <p className={`${darkMode ? 'text-gray-300' : 'dark:text-gray-600'}`}>An Engine and decision-based AI using Markov chains and minimax for the famous Witcher 3 minigame.</p>
              </motion.div>
            </a>
          </div>
        </section>

        <section className="text-center my-20">
          <h3 className="text-3xl font-semibold">Get in Touch</h3>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://github.com/mohsenbakhit" className="text-2xl">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/mohsenbakhit" className="text-2xl">
              <FaLinkedin />
            </a>
            <a href="mailto:mattbak09@proton.me" className="text-2xl">
              <FaEnvelope />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
