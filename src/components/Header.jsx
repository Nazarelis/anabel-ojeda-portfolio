import Navbar from "./Navbar";
import FirstBannerHome from "./FirstBannerHome";

function Header() {
    return (
        <>
            <div className="w-full h-screen relative bg-gray-900 bg-cover bg-center bg-[url('/src/assets/playa.jpg')] shadow-2xl">
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div> 
                <Navbar textColor="text-white" bgColor="bg-transparent" hoverColor="hover:text-[#F2D6A2]" />
                <FirstBannerHome />
            </div>
        </>
    );
}

export default Header;

