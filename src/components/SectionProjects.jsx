// import ColorImage from '.'
// import Button from './Button'
import { useTranslation } from 'react-i18next';


function SectionProjects(){
    const { t } = useTranslation('home');

    return(
        <>
        <div className="w-full h-screen bg-[#F2BF5E] flex justify-center flex-col">
            <div className="flex justify-center items-center w-full ">
            <h1 className="flex flex-col pr-12 text-[#237E70] text-center text-6xl ">
            {t('sectionFeaturedWorks')}
            </h1>
            </div>
            <div className='flex flex-column pt-12 justify-center w-full'>
                {/* <div className='pr-14'>
                <Button text={t('button.knowMe')}/>
                </div>
                <div className=''>
                <Button text={t('button.downloadCV')}/>
                </div> */}

            </div>
        </div>

        </>
    )
}

export default SectionProjects;