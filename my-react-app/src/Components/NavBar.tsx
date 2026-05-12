import cityImage from '../assets/mylogo-removebg-preview.png';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="p-1 text-white">
    <nav className="flex items-center justify-between p-4 bg-black h-20 w-auto">
      <div className="flex items-center">
    <img src={cityImage} alt="Logo" className="h-20 w-auto" /></div>
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
