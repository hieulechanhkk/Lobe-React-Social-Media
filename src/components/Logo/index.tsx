import Logo from '../../assets/logo.png'
const index = () => {
    return (
        <div className='flex items-center'>
            <img className=' object-cover w-10' src={Logo} alt="Logo"></img>
            <h1 className=" text-primary font-bold text-xl hidden sm:block sm:mr-20 sm:ml-4">
                LOBE
            </h1>
        </div>
    );
};

export default index;