import Image from "next/image";
import Link from "next/link"

export default function privacy() {
    return (
        <div className="flex justify-between mt-8 h-screen">
           
      <div className="w-1/2 mx-12">
        <h1 className="text-6xl text-justify text-green-700"> privacy & policy </h1><br /><br />
     <p className="text-2xl text-justify"> {" "}
     Lorem ipsum dolorsit amet consectetur adipisicing elit. Quas veniam quaerat, ipsum dolores temporibus omnis  
     consectetur labore consequatur accusamus magnam saepe ut eveniet minima nihil architecto dolore doloremque 
     autem modi.
     {" "}</p><br /><br />

     <button className="bg-green-500 text-white text-2xl hover:bg-amber-400 w-[200px] h-[66px] rounded ">
        View more
      </button>

      </div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF2sHrELG_V5dy0jiWiIj_HzMB1MNIyGesSw&s" alt="code image" />
      </div>
  
    )
  }