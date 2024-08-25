import { useTranslation } from 'react-i18next';


function DownloadButton() {
    const { t } = useTranslation('home'); 

    return (
        <a href="https://drive.google.com/uc?export=download&id=1aSM2vqfokbCoMaIYVkv9_YLP1RgZ1g5Y">

        <div className="flex animate-slideIn animation-delay-1000 bg-[#03658C] hover:bg-[#024059] rounded-3xl w-40 h-10 items-center justify-center">
                <button className="text-white">{t('bottomDownload')}</button>
        </div>
        </a>


)}

export default DownloadButton