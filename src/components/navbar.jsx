import "../index.css"
import "./css/navbar.css";
export default function NavBar() {
    return (
        <div className="container flex items-center justify-between border border-black p-5 shadow-md mt-2">
            <h1 className="axc flex items-center justify-start text-4xl font-bold">AXC</h1>

            <div className="navchoices flex-1 text-center">
            <nav className="flex items-center justify-center">
                <ul className="flex space-x-20"> 
                   
                </ul>
            </nav>
            </div>
            <h1 className="pH flex justify-end">PH Tanauan Batangas</h1>
        </div>

    );
}
