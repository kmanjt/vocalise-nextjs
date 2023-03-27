import { BsLinkedin } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "./Heading";

const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
const webUrl = `https://www.google.com/recaptcha/enterprise.js?render=${siteKey}`;


const features = [
  {
    name: "@vocalise.ie",
    link: "https://www.instagram.com/vocalise/",
    icon: FaInstagram,
  },
  {
    name: "vocalise.ie@gmail.com",
    link: "mailto:vocalise.ie@gmail.com",
    icon: TfiEmail,
  },
  {
    name: "Vocalise.ie",
    link: "https://www.linkedin.com/company/vocalise-ie/",
    icon: BsLinkedin,
  },
];

export default function Contact() {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // Do something with the form data, like send an email using a server-side language
  };

  return (
    <div className="py-8">
      <div className="mx-auto text-center max-w-2xl px-2 pt-16">
        <Heading title="Contact Us" />
        <p className="mt-4 text-xl tracking-tight">
          Interested in booking a workshop or learning more? <br />
          Get in touch!
        </p>
      </div>
{/* 
      <div className="mt-10 mb-12 mx-auto items-center justify-center flex">
        <form className="mx-auto col-lg-6" onSubmit={handleSubmit}>
          <div className="form-group">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 120,
                  duration: 3,
                  bounce: 0.5,
                }}
                viewport={{ once: true }}
                className="mx-auto"
              >
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control shadow-sm"
                  required
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="form-group">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  type: "spring",
                  stiffness: 120,
                  duration: 3,
                  bounce: 0.5,
                }}
                viewport={{ once: true }}
                className="mx-auto"
              >
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control shadow-sm"
                  required
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="form-group">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.6,
                  type: "spring",
                  stiffness: 120,
                  duration: 3,
                  bounce: 0
                }}
                viewport={{ once: true }}
                className="mx-auto"
              >
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  className="form-control shadow-sm"
                  required
                ></textarea>
              </motion.div>
            </AnimatePresence>
          </div>
    
          <div className="text-center">
            <AnimatePresence mode="wait">
              <motion.button
                type="submit"
                className="btn btn-primary mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.8,
                  type: "spring",
                  stiffness: 120,
                  duration: 3,
                  bounce: 0.5,
                }}
                viewport={{ once: true }}
              >
                Send
              </motion.button>
            </AnimatePresence>
          </div>
        </form>
      </div> */}
    
      <div className="mt-10 mb-12 mx-auto items-center justify-center flex">
        <dl className="mx-auto space-y-10 md:grid md:grid-cols-3 gap-5 md:gap-y-12 md:space-y-0">
          {features.map((feature, index) => (
            <div key={index} className="relative mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    stiffness: 120,
                    duration: 3,
                    bounce: 0.5,
                  }}
                  viewport={{ once: true }}
                  className="mx-auto"
                >
                  <dt>
                    <a href={feature.link} target="blank">
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-darkBlue text-white text-center">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-10 text-gray-900">
                        {feature.name}
                      </p>
                    </a>
                  </dt>
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </dl>
      </div>
    </div>    
    );
  }


