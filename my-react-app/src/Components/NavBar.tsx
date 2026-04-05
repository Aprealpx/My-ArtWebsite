import cityImage from '../assets/leaf.jpg';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="p-1 text-black">
    <nav className="flex items-center justify-between p-4 bg-white">
      <div className="flex items-center">
    <img src={cityImage} alt="Logo" className="h-10 w-auto" /></div>
      <div className="flex justify-end gap-10 p-4 mr-10 ...">
      <button className="font-anonymous text-1xl no-underline hover:underline"><Link to="/">Home</Link></button>
      <button className="font-anonymous text-1xl no-underline hover:underline "><Link to="/about">About</Link></button>
      <button className="font-anonymous text-1xl no-underline hover:underline">Contact</button>
      <button className="font-anonymous text-1xl no-underline hover:underline">Shop</button>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
