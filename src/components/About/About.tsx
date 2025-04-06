import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="container w-full min-h-screen flex justify-center items-center">
        <div className="flex flex-col h-full gap-32">
          <div>
            <motion.h1
              initial={{
                opacity: 0,
                x: -150,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                type: "tween",
                delay: 0.5,
                damping: 10,
              }}
              viewport={{
                once: true,
              }}
              className="text-6xl font-bold text-accent"
            >
              What We Do
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                x: -150,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                type: "tween",
                delay: 0.75,
                damping: 10,
              }}
              viewport={{
                once: true,
              }}
              className="text-2xl font-medium pt-5 px-5"
            >
              Real-time stock market data and financial insights <br />
              Empowering investors with the latest market trends, news, and
              analytical tools to make informed decisions
            </motion.p>
          </div>

          <div className="text-right">
            <motion.h1
              initial={{
                opacity: 0,
                x: 150,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                type: "tween",
                delay: 0.75,
                damping: 10,
              }}
              viewport={{
                once: true,
              }}
              className="text-6xl font-bold text-accent"
            >
              Why We Do It
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                type: "tween",
                delay: 0.95,
                damping: 10,
              }}
              viewport={{
                once: true,
              }}
              className="text-2xl font-medium pt-5 px-5"
            >
              Accurate financial data should not be kept behind a paywall
            </motion.p>
          </div>

          <div>
            <motion.h1
              initial={{
                opacity: 0,
                x: -150,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                type: "tween",
                delay: 1,
                damping: 10,
              }}
              viewport={{
                once: true,
              }}
              className="text-6xl font-bold text-accent"
            >
              How It Works
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                x: -150,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                type: "tween",
                delay: 1.25,
                damping: 10,
              }}
              viewport={{
                once: true,
              }}
              className="text-2xl font-medium pt-5 px-5"
            >
              InvestIQ aggregates data from multiple reliable sources,
              delivering up-to-date market information.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
