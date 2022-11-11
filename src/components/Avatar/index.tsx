import Avatar from '../../assets/avatar.jpg';
import { motion } from 'framer-motion';

const index = () => {
  return (
    <motion.img
      whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
      className="w-10 h-10 rounded-xl object-cover cursor-pointer"
      src={Avatar}
      alt="Avatar"
    />
  );
};

export default index;
