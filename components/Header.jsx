import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
    return (
        <header className="absolute z-30 w-full items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-0 xl:h-[90px]">
            <div className="container mx-auto">
                <div className="flex flex-row justify-between items-center gap-x-4 sm:gap-x-6 py-4 sm:py-6 lg:py-8">
                    {/* logo */}
                    <Link href="/" className="text-xl sm:text-2xl">
                        timur <span className="text-accent">tech</span>
                    </Link>
                    {/* socials */}
                    <Socials />
                </div>
            </div>
        </header>
    );
};

export default Header;