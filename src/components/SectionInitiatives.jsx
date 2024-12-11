// Importamos las imágenes como módulos
import dulceC from '../assets/dulcec.png';
import fondoIncognita from '../assets/fondoincognita.jpeg';

import { useTranslation } from 'react-i18next';
import CardWeb from './CardWebs';
import { motion } from 'framer-motion';

function SectionInitiatives() {
    const { t } = useTranslation('home');

    return (
        <>
            <motion.div 
                className="flex flex-col pt-10 items-center justify-center md:h-screen w-full bg-[#F2BF5E]"
            >
                <div className="flex flex-col justify-center items-center m-10 mb-2">
                    <h2 className="text-[#01405B] font-raleway font-semibold mt-4 md:text-3xl">
                        {t('titleWebsQC')}
                    </h2>
                    <p className="text-[#272F40] text-center font-robotoSlab md:text-xl">
                        {t('parrWebsQC')}
                    </p>
                </div>
                <motion.div 
                    className="flex flex-col md:flex-row w-full items-center justify-center"
                >
                    {/* Usamos las imágenes importadas */}
                    <CardWeb titleWebCard={t('titleCardOne')} pWebCard={t('parrCardOne')} src={dulceC} />
                    <CardWeb titleWebCard={t('titleCardTwo')} pWebCard={t('parrCardTwo')} src={fondoIncognita} />
                    <CardWeb titleWebCard={t('titleCardThree')} pWebCard={t('parrCardThree')} src={fondoIncognita} />
                </motion.div>
                <div className="flex justify-center items-center w-auto mb-4">
                    <h1 className="text-[#01405B] md:text-4xl font-raleway font-semibold mb-4">
                        {t('comingtext')}
                    </h1>
                </div>
            </motion.div>
        </>
    );
}

export default SectionInitiatives;
