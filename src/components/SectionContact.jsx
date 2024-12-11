import { useTranslation } from 'react-i18next';
import ButtonsContact from './ButtonContact';

function SectionContact(){
    const { t } = useTranslation('home');

    return(
        <>
        <div className="w-full md:h-screen h-60 bg-[#F2BF5E] flex justify-center flex-col">
            <div className="flex md:mt-24 justify-center items-center w-full ">
            <h1 className="flex flex-col justify-center items-center pb-4 text-[#E9E9E9] text-center md:text-6xl text-2xl ">
            {t('sectionContact')}
            </h1>
            </div>
            <div className='flex flex-column justify-center items-center md:w-full md:h-1/2'>
                <ButtonsContact/>
            </div>
        </div>

        </>
    )
}

export default SectionContact;