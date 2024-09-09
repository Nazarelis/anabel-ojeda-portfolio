import Navbar from "../components/Navbar"

import WorkingImage from '../assets/Working.png'

function Page()  {
    return(
        <div className="">
        <Navbar textColor="text-black" bgColor="bg-[#F2BF5E]" hoverColor="hover:text-[#BF8450]" colorBurger="text-[#F2BF5E]" />
        
        <div className="flex items-center pt-24 justify-center w-full">
            <img className="w-2/6 " src={WorkingImage}></img>
        </div>
        </div>
    )

}
export default Page