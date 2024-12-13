import { useTranslation } from 'react-i18next';


function DownloadButton() {
    const { t } = useTranslation('home'); 

    return (
        <a href="https://drive.google.com/uc?export=download&id=10R0SpuybgqYYYAtAuhzXsKl4QGBhDsu5" download="CV_Anabel_Ojeda.pdf" className='pb-8 md:pb-0'>

        <div className="flex animate-slideIn animation-delay-1000 bg-[#F2BF5E] hover:bg-transparent hover:border-4 border-[#F2BF5E] rounded-3xl w-40 h-10 items-center text-raleway justify-center">
                <button className="text-white">{t('button.downloadCV')}</button>
        </div>
        </a>


)}

export default DownloadButton