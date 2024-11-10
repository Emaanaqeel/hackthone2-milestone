import Image from "next/image";
import Link from "next/link"



export default function about() {
    return (
      
       <div className="flex justify-between mt-8 h-screen">
         
      <div className="w-1/2 mx-12">
      
      
        <h1 className="text-6xl text-justify text-pink-500"> About us </h1><br /><br />
     <p className="text-2xl text-justify">
      {" "}
     In This page we tell you about the authore and website Lorem ipsum dolorsit amet consectetur adipisicing 
     elit. Quas veniam quaerat, ipsum dolores temporibus omnis  consectetur labore consequatur accusamus 
     magnam saepe ut eveniet minima nihil architecto dolore doloremque autem modi.
     {" "}</p><br /><br />
     <button className="bg-pink-400 text-white text-2xl hover:bg-amber-400 w-[200px] h-[66px]  rounded">
        learn more
      </button>
      </div >
      <div className="w-1/2">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKyZ-RbRbV6-Zvnb-svVpRo2pXCPaJvWR5Cw&s" alt="code image" 
     width={502} height={465}/>

</div>
      </div>
     
      
  
    )
  }