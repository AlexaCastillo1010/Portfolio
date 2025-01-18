import "../index.css"
export default function NavBar() {
    return (
        <div className="flex items-center justify-between border border-black p-5 shadow-md mt-2">
            <h1 className="flex items-center justify-start text-4xl font-bold">AXC</h1>

            <div className="navchoices flex-1 text-center">
            <nav className="flex items-center justify-center">
                <ul className="flex space-x-20"> 
                    <li><a className="font-bold" href="">Home</a></li>
                    <li><a className="font-bold" href="">Projects and Skills</a></li>
                    <li><a className="font-bold" href="">Contact</a></li>
                </ul>
            </nav>
            </div>
            <h1 className="flex justify-end">PH Tanauan Batangas</h1>
        </div>

    );
}
