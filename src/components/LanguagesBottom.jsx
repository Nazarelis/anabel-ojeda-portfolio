// import useStore from '../globalstore';

// function LanguageBottom() {
//     const { language, setLanguage } = useStore();

//     return (
//         <>
//             <button
//                 onClick={() => setLanguage('en')}
//                 className={`p-2 w-1/8 h-8 flex text-sm items-center justify-center border-t-2 border-l-2 border-b-2 border-white ${language === 'en' ? 'bg-[#33403E] text-white' : 'bg-[#D99E91] text-white'} rounded-l-full transition-all duration-500 ease-in-out`}
//             >
//                 EN
//             </button>
            
//             <button
//                 onClick={() => setLanguage('es')}
//                 className={`p-2 h-8 w-1/8 flex text-sm items-center border-t-2 border-r-2 border-b-2 border-white ${language === 'es' ? 'bg-[#33403E] text-white' : 'bg-[#D99E91] text-white'} rounded-r-full transition-all duration-700 ease-in-out`}
//             >
//                 ES
//             </button>
//         </>
//     );
// }

// export default LanguageBottom;

import useStore from '../globalstore';

function LanguageBottom() {
    const { language, setLanguage } = useStore();

    return (
        <div className="relative w-20 h-8 rounded-full bg-[#272F40] flex items-center justify-center">

            {/* Fondo del botón inactivo */}
            <div className={`absolute top-0 left-0 w-1/2 h-full transition-all duration-500 ${language === 'es' ? 'translate-x-full bg-[#BF8450]' : 'translate-x-0 bg-[#272F40]'} rounded-full`} />

            {/* Botón EN */}
            <button
                onClick={() => setLanguage('en')}
                className={`w-1/2 h-full text-xs z-10 text-white font-bold transition-all duration-700 ${language === 'en' ? 'text-white bg-[#BF8450] rounded-full' : 'text-gray-300 '}`}
            >
                EN
            </button>

            {/* Botón ES */}
            <button
                onClick={() => setLanguage('es')}
                className={`w-1/2 h-full z-10 text-white font-bold text-xs transition-all duration-500 ${language === 'es' ? 'text-white' : 'text-gray-300'}`}
            >
                ES
            </button>
        </div>
    );
}

export default LanguageBottom;



