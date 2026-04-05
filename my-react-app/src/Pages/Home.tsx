
import cityImage from '../assets/leaf.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="bg-white">

      <div className="h-px bg-gray-300 w-full my-4 mt-0"></div>
      <div className="font-anonymous text-2xl">
      </div> 
      <div className="flex justify-start mt-10 ml-20">    
 <img src={cityImage}alt="City Portrait"className="ml-20 h-[300px] sm:h-[40px] md:h-[450px] lg:h-[450px] w-auto rounded-lg
    shadow-none transition-transform duration-300 ease-in-out hover:scale-125 hover:shadow-lg hover:shadow-black/30"/>
    
  <div className="flex flex-col items-start ml-40">
  <div className="font-anonymous text-2xl mb-4 cursor-pointer hover:text-yellow-700 transition-colors duration-300">
    PIXEL ART
  </div>
  <div className="flex items-center justify-end gap-4">
  <div className="grid grid-cols-3 gap-10">
    <img src={cityImage} alt="Image 1" className="w-28 h-30 object-cover rounded-lg  hover:scale-125 hover:shadow-lg hover:shadow-black/30" />
    <img src={cityImage} alt="Image 2" className="w-28 h-30 object-cover rounded-lg hover:scale-125 hover:shadow-lg hover:shadow-black/30" />
    <img src={cityImage} alt="Image 3" className="w-28 h-30 object-cover rounded-lg hover:scale-125 hover:shadow-lg hover:shadow-black/30" />
  </div>
  <Link to="/pixel">
  <i className="ml-10 fa-solid fa-arrow-right text-2xl text-yellow-500 cursor-pointer hover:text-gray-700 transition-colors duration-300 hover:scale-125 gap-4">
    More
  </i>
</Link>

  </div>

  <div className="font-anonymous text-2xl mb-4 mt-4 cursor-pointer hover:text-yellow-700 transition-colors duration-300">
    DIGITAL ART
  </div>
  <div className="flex items-center justify-end gap-4">
  <div className="grid grid-cols-3 gap-10">
    <img src={cityImage} alt="Image 1" className="w-28 h-30 object-cover rounded-lg hover:scale-125 hover:shadow-lg hover:shadow-black/30" />
    <img src={cityImage} alt="Image 2" className="w-28 h-30 object-cover rounded-lg hover:scale-125 hover:shadow-lg hover:shadow-black/30" />
    <img src={cityImage} alt="Image 3" className="w-28 h-30 object-cover rounded-lg hover:scale-125 hover:shadow-lg hover:shadow-black/30" />
  </div>
  
  <Link to="/digital">
  <i className="ml-10 fa-solid fa-arrow-right text-2xl text-yellow-500 cursor-pointer hover:text-gray-700 transition-colors duration-300 hover:scale-125 gap-4">
    More
  </i>
</Link>
  
</div>


</div> 
</div>

    </div>
  )
}
