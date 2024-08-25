import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import LanguageBottom from "./LanguagesBottom";

//global store
import useStore from '../globalstore';

//material ui
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';



function Navbar({ textColor, bgColor, hoverColor, colorBurger}) {

  const { isMenuOpen, toggleMenu } = useStore();

  const { t } = useTranslation('home');

  return (
    <nav className={`w-full h-20 items-center justify-between md:justify-center flex relative z-10 ${bgColor}`}>
      <div className='md:flex h-full hidden items-center justify-center w-1/3'>
        <Link to="/" className={`text-xl animate-bounce ${textColor}`}>
          Anabel Ojeda |
        </Link>
      </div>
      <div className="h-full">
        <Link to="/">
        <img src="src\assets\logo-white.png" alt="" className="flex md:hidden w-20 ml-8" />
        </Link>
      </div>

      <div className="w-1/3 h-full justify-around md:flex hidden items-center">
        <Link to="/about" className={`text-lg whitespace-nowrap w-auto p-4 ${textColor} ${hoverColor}`}>
          {t('navBarAboutMe')}
        </Link>
        <Link to="/initiatives" className={`text-lg w-auto p-4 ${textColor} ${hoverColor}`}>
          {t('navBarInitiatives')}
        </Link>
        <Link to="/projects" className={`text-lg w-auto p-4 ${textColor} ${hoverColor}`}>
          {t('navBarProjects')}
        </Link>
        <Link to="/blog" className={`text-lg w-auto p-4 ${textColor} ${hoverColor}`}>
          {t('navBarBlog')}
        </Link>
      </div>

      <div className="ml-auto mr-12 xl:mr-40 w-auto md:flex hidden items-center justify-center">
        <LanguageBottom />
      </div>

      <div className="block md:hidden w-auto mr-12 ">
        <button onClick={toggleMenu}>
        <MenuIcon className="text-white text-2xl"/>
        </button>
      </div>



       {/* Menú desplegable para móviles */}
       <div className={`fixed inset-0 bg-[#024059] bg-opacity-100 z-20 flex h-full flex-col items-center justify-center transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>

        <button onClick={toggleMenu} className="absolute top-8 right-10">
          <MenuOpenIcon className={`${colorBurger}`} />
        </button>
        <Link to="/">
        <div className="h-auto">
        <img src="src\assets\logo-white.png" alt="logo" className="flex md:hidden w-40 pb-8" onClick={toggleMenu} />
      </div>
      </Link>
        <Link to="/about" onClick={toggleMenu} className={`w-full flex items-center justify-center text-3xl mb-6 ${colorBurger} ${hoverColor}`}>
          {t('navBarAboutMe')}
        </Link>
        <Link to="/initiatives" onClick={toggleMenu}  className={`w-full flex items-center justify-center text-3xl mb-6 ${colorBurger} ${hoverColor}`}>
          {t('navBarInitiatives')}
        </Link>
        <Link to="/projects" onClick={toggleMenu}  className={` w-full flex items-center justify-center text-3xl mb-6 ${colorBurger} ${hoverColor}`}>
          {t('navBarProjects')}
        </Link>
        <Link to="/blog" onClick={toggleMenu}  className={`w-full flex items-center justify-center text-3xl mb-6 ${colorBurger} ${hoverColor}`}>
          {t('navBarBlog')}
        </Link>
        <div className="flex flex-row pt-10 w-full flex items-center justify-center">
          <LanguageBottom />
        </div>
      </div>
    </nav>
  );
}


Navbar.propTypes = {
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  hoverColor: PropTypes.string,
  colorBurger: PropTypes.string
};

Navbar.defaultProps = {
  textColor: 'text-white',
  bgColor: 'bg-transparent',
  hoverColor: 'hover:text-yellow-300'
};

export default Navbar;
