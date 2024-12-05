// import ColorImage from '.'
// import Button from './Button'
import { useTranslation } from 'react-i18next';
import CardProject from './CardProject';

function SectionProjects(){
    const { t } = useTranslation('home');

    return(
        <>
        <div className="w-full h-auto bg-[#E9E9E9] flex justify-center flex-col">
            <div className="flex justify-center items-center w-full md:mt-16">
            <h1 className="flex flex-col text-[#F2BF5E] text-center text-5xl ">
            {t('sectionFeaturedWorks')}
            </h1>
            </div>
            <div className='w-full grid md:grid-cols-2 grid-cols-1 md:p-24 md:w-full'>
                <CardProject src="src\assets\capture-lakebarrine.jpeg" href="https://lakebarrine.com.au/"/>
                <CardProject src="src\assets\capture-apptodo.jpeg" href="https://nazarelis.github.io/TODOS_APP/"/>
                <CardProject src="src\assets\capture-chichastyle.jpeg" href="https://chicha-style-foodtruck.web.app/"/>
                <CardProject src="src\assets\capture-Nasa.jpeg" href="https://cosmicimage-1e517.web.app/"/>
            </div>
        </div>

        </>
    )
}

export default SectionProjects;