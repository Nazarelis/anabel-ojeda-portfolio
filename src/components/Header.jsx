import Navbar from "./Navbar";
import FirstBannerHome from "./FirstBannerHome";

function Header() {
    return (
        <>
            <div className="w-full h-screen relative bg-gray-900 bg-cover bg-center bg-[url('/src/assets/montaña3.jpg')] shadow-2xl">
                <div className="absolute inset-0 bg-[#141F2D] opacity-30 z-0"></div>
                <Navbar textColor="text-[#272F40]" bgColor="bg-transparent" hoverColor="hover:text-[#F2BF5E]" />
                <FirstBannerHome />
            </div>
        </>
    );
}

export default Header;

