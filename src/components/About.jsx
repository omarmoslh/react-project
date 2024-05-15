import aboutImg1 from "../assets/about.png";
import aboutImg2 from "../assets/about2.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <img src={aboutImg1} alt="" />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            Trust your client
            <span className="text-secondary"> care with the pros.</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
            At Tflorentina, we are passionate about reshaping the landscape of
            Medicaid services. We understand the challenges that healthcare
            providers, payers, and beneficiaries face when navigating the
            complex Medicaid ecosystem. That's why we've embarked on a mission
            to simplify and elevate Medicaid management for everyone involved.
          </p>
          <button className="btnPrimary">Get Started</button>
        </motion.div>
      </div>
      {/* 2nd part */}
      <div className="md:px-14 p-4 max-w-s mx-auto">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-1/2"
          >
            <img src={aboutImg2} alt="" />
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-1/2"
          >
            <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
              From the team with{" "}
              <span className="text-secondary"> decades of experience</span>
            </h2>
            <p className="text-tartiary text-lg mb-7">
              Tflorentina was born out of a deep commitment to improving
              healthcare accessibility, quality, and efficiency. With years of
              experience in healthcare technology and a keen understanding of
              the Medicaid industry, our founders envisioned a future where
              Medicaid operations could be streamlined, resources optimized, and
              patient care enhanced.
            </p>
            <button className="btnPrimary">Get Started</button>
          </motion.div>
        </div>
        {/* 2nd part */}
      </div>
    </div>
  );
};

export default About;
