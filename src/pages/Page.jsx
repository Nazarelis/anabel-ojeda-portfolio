import Navbar from "../components/Navbar"
import WorkingImage from '../assets/Working.png'
function Page()  {
    return(
        <div className="">
        <Navbar textColor="text-black" bgColor="bg-transparent" hoverColor="hover:text-[#F2BF5E]" colorBurger="text-white" />
        
        <div className="flex items-center pt-24 justify-center w-full">
            <img className="w-2/6 " src={WorkingImage}></img>
        </div>
        </div>
    )

}
export default Page