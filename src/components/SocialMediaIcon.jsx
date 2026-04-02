import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SocialMediaIcon({ className = "" }) {
  const [hovered, setHovered] = useState(null);

  const icons = [
    {
      id: "instagram",
      href: "https://www.instagram.com/ajiang.photography/",
      icon: <FaInstagram />,
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/jkeshao/",
      icon: <FaLinkedin />,
    },
    {
      id: "github",
      href: "https://github.com/Yousor0",
      icon: <FaGithub />,
    },
    {
      id: "email",
      href: "mailto:andrewjiang.photos@gmail.com",
      icon: <FaRegEnvelope />,
    },
  ];

  return (
    <div className={`flex gap-3 text-2xl order-2 sm:order-1 ${className}`}>
      {icons.map(({ id, href, icon }) => (
        <motion.a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onHoverStart={() => setHovered(id)}
          onHoverEnd={() => setHovered(null)}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95, y: 1 }}
          animate={{
            opacity: hovered && hovered !== id ? 0.3 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="cursor-pointer"
        >
          {icon}
        </motion.a>
      ))}
    </div>
  );
}
