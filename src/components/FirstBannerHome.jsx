import { useTranslation } from 'react-i18next';
import DownloadButton from './DownloadButton';
import Button from './Button'

function FirstBannerHome() {
    const { t } = useTranslation('home'); // Indica que usas las traducciones de 'home'

    return (
        <>
            <div className="w-full bg-gray-900 relative flex">
                <div className="w-full absolute lg:top-20 lg:left-1/8 top-24 flex flex-col items-center h-auto">
                    <div className="w-auto h-auto flex flex-col animate-slideIn pt-12">
                        <h2 className="text-[#F2BF5E] text-2xl md:text-3xl font-light ">
                            {t('greetingOne')}
                        </h2>
                        <h1 className="text-[#E9E9E9] text-4xl md:text-8xl pb-6 font-medium">
                        {t('greetingTwo')}
                        </h1>
                    </div>
                    <p className="text-[#F2BF5E] text-xl pb-14 animate-slideIn animation-delay-200">
                        {t('description')}
                    </p>
                    <div className='flex justify-evenly w-1/2 flex-col items-center p-8 md:flex-row '>
                    <DownloadButton /> 
                    <Button text={t('button.exploreMyP')} textColor='text-[#E9E9E9]' bgColor='bg-[#BF8450]' borderColor='border-[#BF8450]' sizeText='text-sm'/> 
                    </div>
                </div>
            </div>
        </>
    );
}

export default FirstBannerHome;



