import logo from '../../public/logo.png'
import notificationicon from '../../public/notification_icon.png'
import Image from 'next/image';
import userprofile from '../../public/user_profile.png'
const Navbar = () => {
  return (
    <div className='text-xl shadow-sm flex items-center justify-center h-14'>
      <div className='w-full sm:w-[90%] h-full flex items-center justify-between px-2'>
        {/* Logo Section */}
        <div className="logo font-semibold flex items-center gap-2 cursor-pointer"> 
          <Image
            src={logo}
            alt="RemoteJobs Logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <h1 className="hidden sm:block text-gray-700 mt-1">RemoteJobs</h1>
        </div>

        {/* Notification and User Section */}
        <div className='flex items-center gap-4 cursor-pointer'>
          <Image
            src={notificationicon}
            alt="Notification Icon"
            width={23}
            height={23}
            className="object-contain"
          />
          <div className='bg-red-300 h-8 w-8 rounded-full object-contain cursor-pointer'>
          <Image
            src={userprofile}
            alt="RemoteJobs Logo"
            width={48}
            height={48}
            className="object-contain"
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
