import '../assets/css/Style.css'

export default function Container({ children }) {
    return (
        <div>
            <header className="header py-3 px-6 bg-[#8dccff]">
                <nav className="nav flex w-full justify-between items-center">
                    <div className="logo">
                        <a href="#" className="nav-logo font-bold text-lg">Dekoruma.com</a>
                    </div>
                    <div className="button">
                        <button className="btn btnContact bg-blue-500 cursor-pointer font-semibold tracking-wide drop-shadow-[3px_5px_0_black] text-white px-4 py-2 transition-all duration-4000ms ease-in hover:scale-110">Contact</button>
                    </div>
                </nav>
            </header>
            {children}
            <footer>

            </footer>
        </div>
    )
}
