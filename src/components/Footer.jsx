import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';




function Footer() {

  const { t } = useTranslation('home');

  return (
    <>
    <div className="w-full flex items-center bg-[#33403E] justify-center">
      <div className=' w-1/3'>
        <Link to="/" className='text-[#E9E9E9]'>
          Anabel Ojeda |
        </Link>
      </div>

      <div className="w-1/3 h-full justify-around md:flex hidden items-center">
        <Link to="/about" className='text-[#E9E9E9] text-lg whitespace-nowrap w-auto p-4 '>
          {t('navBarAboutMe')}
        </Link>
        <Link to="/initiatives" className='text-[#E9E9E9] text-lg w-auto p-4' >
          {t('navBarInitiatives')}
        </Link>
        <Link to="/projects" className='text-[#E9E9E9] text-lg w-auto p-4 '>
          {t('navBarProjects')}
        </Link>
      </div>

    </div>
    {/* <div className="w-full flex h-10 items-center justify-center bg-[#000000]">
        <p className="text-[#E9E9E9]">
            {t('pFooter')}
        </p>
    </div> */}
      </>

      
  );
}



export default Footer;
