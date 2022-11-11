import Logo from '../Logo'
import Search from './Search';
import Avatar from '../Avatar';
import Menu from '../Buttons/Menu';

const index = () => {
  return (
    <div className="mx-auto px-4 py-1 flex justify-between items-center shadow-md sticky">
      <div className="flex items-center gap-4 w-3/4 sm:gap-16 sm:w-2/4">
        <Logo/>
        <Menu/>
        <Search/>
      </div>
      <div className=' flex items-center gap-4 text-slate'>
        <span className='font-semibold text-sm hidden sm:block'>Nguyễn Đức Hiếu</span>
        <Avatar></Avatar>
      </div>
    </div>
  );
};

export default index;
