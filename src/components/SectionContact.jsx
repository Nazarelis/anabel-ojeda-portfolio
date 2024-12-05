import { useTranslation } from 'react-i18next';
import ButtonsContact from './ButtonContact';

function SectionContact(){
    const { t } = useTranslation('home');

    return(
        <>
        <div className="w-full md:h-screen bg-[#F2BF5E] flex justify-center flex-col">
            <div className="flex md:mt-24 justify-center items-center w-full ">
            <h1 className="flex flex-col pr-12 text-[#E9E9E9] text-center text-6xl ">
            {t('sectionContact')}
            </h1>
            </div>
            <div className='flex flex-column md:pt-20 justify-center w-full h-1/2'>
                <ButtonsContact/>
            </div>
        </div>

        </>
    )
}

export default SectionContact;