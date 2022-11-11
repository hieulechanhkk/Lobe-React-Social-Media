import Logo from '../../assets/logo.png'
import { motion } from "framer-motion"
const index = () => {
    return (
        <div className='flex items-center cursor-pointer select-none'>
            <motion.img whileHover={{scale:1.2}} className=' object-cover w-10' src={Logo} alt="Logo"></motion.img>
            <h1 className=" text-primary font-bold text-xl hidden sm:block sm:mr-4 sm:ml-4">
                LOBE
            </h1>
        </div>
    );
};

export default index;