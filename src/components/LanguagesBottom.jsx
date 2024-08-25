import useStore from '../globalstore';

function LanguageBottom() {
    const { language, setLanguage } = useStore();

    return (
        <>
            <button
                onClick={() => setLanguage('en')}
                className={`p-2 w-1/8 h-8 flex text-sm items-center justify-center border-t-2 border-l-2 border-b-2 border-white ${language === 'en' ? 'bg-[#024059] text-white' : 'bg-[#B3E0F2] text-black'} rounded-l-full transition-all duration-500 ease-in-out`}
            >
                EN
            </button>
            
            <button
                onClick={() => setLanguage('es')}
                className={`p-2 h-8 w-1/8 flex text-sm items-center border-t-2 border-r-2 border-b-2 border-white ${language === 'es' ? 'bg-[#024059] text-white' : 'bg-[#B3E0F2] text-black'} rounded-r-full transition-all duration-700 ease-in-out`}
            >
                ES
            </button>
        </>
    );
}

export default LanguageBottom;


