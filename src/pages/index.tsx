import Link from "next/link"
import Image from "next/image"



export default function home() {
  return (
    <main>

      {/* Header section */}

      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Bistro Bakers</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <Link className="ml-2 mr-5   hover:text-purple-600" href="/">Home</Link>
   <Link className="mr-5  hover:text-pink-600" href="/about">About us</Link>
   <Link className="mr-5  hover:text-blue-600" href="/contact">contact</Link>
   <Link className="mr-5  hover:text-green-600" href="/privacypolicy">privacy  policy</Link>
     
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign in
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>


      {/* hero section */}
      

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmGBnuIIl7BWf--IMxanb1NBSmIGrkhXoZOg&s" width={502} height={465} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">WELCOME TO OUR WEBSITE
              <br className="hidden lg:inline-block" /> BISTRO BAKERS<br /> <br />
            </h1>
            <p className="mb-8 leading-relaxed">HELLO, every one and thank you for visiting our website and I am a cake baker with over a decade experience in baking and cooking . This is our website were you can place order of any kind of cake we will try our best to fulfill your demands  so don't forget to  give your feedback.</p><br />
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Order</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">View more</button>
            </div>
          </div>
        </div>
      </section>


      

    </main>

  )
}