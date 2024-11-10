import Image from "next/image";
import Link from "next/link"

export default function contact() {
    return (
        <div className="flex justify-start mt-8 h-screen">
               
      <div className="w-1/2 mx-10">
        <h1 className="text-6xl text-justify text-blue-600"> Contact us </h1><br /><br />
     <p className="text-2xl text-justify">
     Lorem ipsum dolorsit amet consectetur adipisicing elit. Quas veniam quaerat, ipsum dolores temporibus omnis  consectetur 
     labore consequatur accusamus magnam saepe ut eveniet minima nihil architecto dolore doloremque autem modi.</p><br /><br />

     <button className="bg-blue-400 text-white text-2xl hover:bg-amber-400 w-[200px] h-[66px] rounded ">
        contact us
      </button>

      </div>
      <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8usyb4ElKKYcI6hv3LV7APBh6eI8HM_BNDw&s" alt ="contact"/>
   </div>
    )
  }