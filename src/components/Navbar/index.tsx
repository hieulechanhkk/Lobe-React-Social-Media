import Logo from '../Logo'
import Search from './Search';
import Avatar from '../Avatar';

const index = () => {
  return (
    <div className="mx-auto px-4 py-2 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-4 w-3/4 sm:w-2/4">
        <Logo/>
        <Search/>
      </div>
      <div className='px-4 flex items-center gap-4'>
        <h3 className='font-semibold text-sm hidden sm:block'>Nguyễn Đức Hiếu</h3>
        <Avatar></Avatar>
      </div>
    </div>
  );
};

export default index;
