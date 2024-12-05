// import ColorImage from '.'
// import Button from './Button'
import { useTranslation } from 'react-i18next';
import {motion} from 'framer-motion'

function BannerAboutMe(){
    const { t } = useTranslation('home');

    return(
        <>
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]}}
        className="w-full h-screen bg-[#E9E9E9] flex justify-center flex-col">
            <div className="flex justify-center items-center w-full ">
                <div className='w-1/2 '>
                    <h1 className="flex flex-col pr-12 text-[#F2BF5E] text-center text-4xl ">
                    {t('titleAboutMe')}
                    </h1>
                </div>
                <div className='w-1/2 flex items-center '>
                    <p className="w-4/5 text-justify text-[#272F40] flex text-2xl">
                    {t('parrAboutMe')}
                    </p>
                </div>
            </div>
            <div className='flex flex-column pt-12 justify-center w-full'>
                {/* <div className='pr-14'>
                <Button text={t('button.knowMe')}/>
                </div>
                <div className=''>
                <Button text={t('button.downloadCV')}/>
                </div> */}

            </div>
        </motion.div>

        </>
    )
}

export default BannerAboutMe;