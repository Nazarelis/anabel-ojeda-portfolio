import { useTranslation } from 'react-i18next';


function DownloadButton() {
    const { t } = useTranslation('home'); 

    return (
        <a href="https://drive.google.com/uc?export=download&id=1aSM2vqfokbCoMaIYVkv9_YLP1RgZ1g5Y">

        <div className="flex animate-slideIn animation-delay-1000 bg-[#F2BF5E] hover:bg-transparent hover:border-4 border-[#F2BF5E] rounded-3xl w-40 h-10 items-center text-raleway justify-center">
                <button className="text-white">{t('button.downloadCV')}</button>
        </div>
        </a>


)}

export default DownloadButton