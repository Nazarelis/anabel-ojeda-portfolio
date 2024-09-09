// import Button from './Button'
import { useTranslation } from 'react-i18next';
import CardWeb from './CardWebs';

function SectionInitiatives(){
    const { t } = useTranslation('home');

    return(
        <>
        <div className='flex flex-col pt-10 items-center justify-center h-screen w-full bg-[#272F40]'>
            <div className='flex flex-col items-center'>
                <h1 className='text-[#E9E9E9] font-raleway font-semibold mb-4 mt-4 text-6xl'>
                {t('titleWebsQC')}
                </h1>
                <p className='text-[#BF8450] font-robotoSlab text-2xl'>
                {t('parrWebsQC')}
                </p>
            </div>
            <div className='flex w-full justify-center'>
                <CardWeb titleWebCard={t('titleCardOne')} pWebCard={t('parrCardOne')} src="src\assets\dulcec.png"/>
                <CardWeb titleWebCard={t('titleCardTwo')} pWebCard={t('parrCardTwo')} src="src\assets\captura.png"/>
                <CardWeb titleWebCard={t('titleCardThree')} pWebCard={t('parrCardThree')} src="src\assets\captura.png"/>
            </div>
            <div>
                {/* <Button text={t('button.whatIsWebsQC')}/> */}
            </div>
        </div>

        </>
    )
}

export default SectionInitiatives