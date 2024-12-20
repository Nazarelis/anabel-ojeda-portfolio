import captureLakeBarrine from '../assets/capture-lakebarrine.jpeg';
import captureAppTodo from '../assets/capture-apptodo.jpeg';
import captureChichaStyle from '../assets/capture-chichastyle.jpeg';
import captureNasa from '../assets/capture-Nasa.jpeg';

import { useTranslation } from 'react-i18next';
import CardProject from './CardProject';

function SectionProjects() {
    const { t } = useTranslation('home');

    return (
        <>
            <div className="w-full h-auto bg-[#E9E9E9] flex flex-col items-center">
                <div className="flex justify-center items-center w-full md:mt-16">
                    <h1 className="text-[#F2BF5E] text-center text-2xl mt-4 md:text-5xl">
                        {t('sectionFeaturedWorks')}
                    </h1>
                </div>
                <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-6 md:p-24 m-10 place-items-center">
                    <CardProject src={captureLakeBarrine} href="https://lakebarrine.com.au/" />
                    <CardProject src={captureAppTodo} href="https://nazarelis.github.io/TODOS_APP/" />
                    <CardProject src={captureChichaStyle} href="https://chicha-style-foodtruck.web.app/" />
                    <CardProject src={captureNasa} href="https://cosmicimage-1e517.web.app/" />
                </div>

                

            </div>
        </>
    );
}

export default SectionProjects;
