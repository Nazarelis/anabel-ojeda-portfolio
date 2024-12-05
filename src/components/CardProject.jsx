import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import {motion} from 'framer-motion'


function CardProject({src, href}){
    const { t } = useTranslation('home');
    return(
        <motion.div 
        whileHover={{ scale: 1.1 }}>

        <div className='md:w-full w-1/2 md:p-8 hover:bg-pink'>
        <a href={href} target="_blank" rel="noopener noreferrer">
            <img src={src} alt="imagen proyecto" className=''/>
            </a>
        </div>
        </motion.div>

    )
}

CardProject.propTypes = {
    src: PropTypes.string,
    href: PropTypes.string.isRequired,
  };

export default CardProject;