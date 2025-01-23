import logo from "../assets/logo.png"
import { navItems } from "../constants"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const Navbar = () => {
    const [mobileDrowerOpen, setMobileDrowerOpen] = useState(false)
    
    const toggleNavbar = () => {
        setMobileDrowerOpen(!mobileDrowerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="conteiner px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                        <span className="text-xl tracking-tight">VirtualR</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-6 items-center">
                        <a href="#" className="py-2 px-3 border rounded-md">
                            Sing In
                        </a>
                        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md">
                            Create an account
                        </a>
                    </div>
                    <div className="lg:hidden flex flex-col justfy-end">
                        <button onClick={toggleNavbar}>{mobileDrowerOpen ? <X /> : <Menu />}</button>
                    </div>
                </div>
                {mobileDrowerOpen && (
                    <div className="fixed top-0 left-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-cente item-center lg:hidden">
                        <ul>
                            {navItems.map((item) =>(
                                <li key={item} className="py-4">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <a href="#" className="py-2 px-3 border rounded-md">Sing In</a>
                            
                        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md">
                            Create an account
                        </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar