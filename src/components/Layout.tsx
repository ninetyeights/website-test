import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";

const variants = {
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 40 },
};

interface Props {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const Layout: React.FC<Props> = ({ children, title, className }) => (
  <motion.article
    initial="exit"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: "easeInOut" }}
    className={`h-full ${className}`}
  >
    {children}
  </motion.article>
);

export default Layout;
