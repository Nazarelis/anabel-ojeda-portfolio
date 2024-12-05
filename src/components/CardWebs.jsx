import { useTranslation } from 'react-i18next';
// import Button from './Button';
import PropTypes from 'prop-types';
import CardButton from './CardButton';
import {motion} from 'framer-motion'
function CardWeb({titleWebCard, pWebCard, src}){
    const { t } = useTranslation('home');

    return(
        <motion.div 
        whileHover={{ scale: 1.1 }}

        className='w-72 h-70 m-4 mt-12 rounded-lg  flex flex-col  justify-center items-center '>

            <div className='w-11/12 pt-4 flex content-start max-h-40 '>
                <img src={src} alt="imagen de dulce cielo" className='rounded-sm w-full'/>
            </div>
            <div className='p-4 flex flex-col items-center w-full h-1/3'>
                <h1 className='text-[#E9E9E9] font-semibold pt-2 text-2xl font-raleway'>
                    {titleWebCard}
                </h1>
                
                <p className='text-[#E9E9E9] text-sm text-center font-raleway'>
                {pWebCard} 
                </p>
            </div>
            {/* <div className='flex w-full justify-center pb-2 h-1/3'>
                <CardButton text={t('button.seeMore')} />
                <CardButton text={t('button.goToWebsite')} />
            </div> */}


        </motion.div>
    )
}

CardWeb.propTypes = {
    titleWebCard: PropTypes.string,
    pWebCard: PropTypes.string,
    src: PropTypes.string,
  };

export default CardWeb;