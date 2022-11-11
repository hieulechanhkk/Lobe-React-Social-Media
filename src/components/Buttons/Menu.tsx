import { RiMenu4Line } from 'react-icons/ri';
import { motion } from 'framer-motion';

const Menu = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
      className="cursor-pointer text-slate hover:text-primary"
    >
      <RiMenu4Line size={24}></RiMenu4Line>
    </motion.div>
  );
};

export default Menu;
