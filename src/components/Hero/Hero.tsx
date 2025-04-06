import { motion } from "framer-motion";
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <motion.h1
            initial={{
              scale: 0,
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "just",
              delay: 0.5,
              damping: 50,
            }}
            viewport={{
              once: true
            }}
            className="md:text-9xl text-7xl font-bold text-center text-white"
          >
            Invest<span id="IQ" className="text-accent">IQ</span>
          </motion.h1>
          <p className="text-xl font-medium py-6 text-center">
            Empower your investment decisions with real-time data and insightful
            analytics <br />– welcome to InvestIQ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
