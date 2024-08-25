import { useTranslation } from 'react-i18next';
import DownloadButton from './DownloadButton';


function FirstBannerHome() {
    const { t } = useTranslation('home'); // Indica que usas las traducciones de 'home'

    return (
        <>
            <div className="w-full bg-gray-900 relative flex">
                <div className="w-full absolute lg:top-20 lg:left-1/8 top-24 flex flex-col items-center h-auto">
                    <div className="border-4 w-auto h-auto shadow-lg animate-slideIn">
                        <h1 className="text-white text-4xl pt-16 pb-16 pl-8 pr-8">
                            {t('greeting')}
                        </h1>
                    </div>
                    <p className="text-white text-2xl pt-2 pb-8 animate-slideIn animation-delay-200">
                        {t('description')}
                    </p>
                    <DownloadButton />
                </div>
            </div>
        </>
    );
}

export default FirstBannerHome;



