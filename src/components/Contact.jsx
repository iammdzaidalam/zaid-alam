import { CONTACT, SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Contact = () => {
  const [isInView, setIsInView] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setAnimationKey(prevKey => prevKey + 1);
        } else {
          setIsInView(false); 
        }
      },
      {
        threshold: 0.05, 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section id="contact" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="my-10 text-center text-3xl lg:text-8xl text-customText2 dark:text-darkText2"
          key={animationKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{
            delayChildren: 0.05,
            staggerChildren: 0.05, 
            duration: 0.5, 
          }}
        >
          {"Interested in Working Together?".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : -10,
              }}
              transition={{
                delay: index * 0.02, 
                type: "spring",
                stiffness: 100,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
        <p className="p-4 text-center text-xl">{CONTACT.text}</p>
        <p className="my-4 text-center text-2xl font-medium text-customText2 lg:pt-6 lg:text-5xl dark:text-darkText">
          <a
            href={`mailto:${CONTACT.email}`}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-customText dark:text-darkText2 dark:hover:text-darkText transition-colors duration-500"
          >
            {CONTACT.email}
          </a>
        </p>
        <p className="my-4 text-center text-2xl font-medium text-customText2 lg:pt-6 lg:text-5xl dark:text-darkText2">
          {CONTACT.phone}
        </p>
      </div>
      <div className="mt-20 flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-customText2 dark:hover:text-darkText2"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="my-8 text-center text-customText2 dark:text-darkText2">&copy; Zaid Alam, All rights reserved.</p>
    </section>
  );
};

export default Contact;
