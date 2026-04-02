import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Button({
  text,
  to,
  variant = "primary",
  className = "",
  external = false,
  styles = {}, // allow passing in custom styles
}) {
  const defaultStyles = {
    primary: "text-[#545454] lowercase hover:text-white hover:bg-neutral-900 ",
    active:
      "text-[#000000] font-bold lowercase hover:text-white hover:bg-neutral-900",
    secondary:
      "border border-white/70 font-medium text-white/70 hover:bg-white hover:text-black hover:shadow-[0_0_5px_#fff] text-lg px-4 py-1 text-center",
    action:
      "text-white bg-neutral-900 lowercase px-5 border border-transparent hover:border-black/70 hover:border-solid hover:bg-white hover:text-black/70",
  };

  const mergedStyles = { ...defaultStyles, ...styles };

  const Component = external ? "a" : Link;
  const props = external
    ? { href: to, target: "_blank", rel: "noopener noreferrer" }
    : { to };

  return (
    <motion.button whileHover={{ scale: 1.05, y: -3 }} className="w-full">
      <Component
        className={`${className} ${mergedStyles[variant]} w-full block transition duration-300 ease-in-out`}
        {...props}
      >
        {text}
      </Component>
    </motion.button>
  );
}
