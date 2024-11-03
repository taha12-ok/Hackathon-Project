import Image from 'next/image';

function Page() {
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-white">
      <div className="grid grid-cols-2 max-w-5xl w-full">
        
        {/* Project Section */}
        <div className="flex flex-col py-60">
          <div>
            <h2 className="text-6xl font-thin text-gray-300 tracking-wider py-3">PROJECT</h2>
            <h3 className="text-5xl font-bold text-gray-800">Heights</h3>
          </div>
          
          {/* Navigation Section */}
          <div className="flex items-center space-x-5 py-20">
            <button className="p-2 border border-gray-200 rounded hover:bg-gray-100">
              <span>&larr;</span>
            </button>
            <button className="p-2 border border-gray-200 rounded hover:bg-gray-100">
              <span>&rarr;</span>
            </button>
          </div>
          <div className="flex items-center text-gray-300 text-xl">
            <span>01</span>
            <span className="px-10">/</span>
            <span>02</span>
          </div>

          <p className="my-[10px] mx-60 absolute -bottom-1/4 right-1/4 text-sm tracking-wider text-gray-800 bg-white px-[46px] py-6 z-10">
            VIEW PROJECT <span className="ml-3">→</span>
          </p>
        </div>

        {/* Image Section */}
        <div className="relative right-20 w-[650px] h-[700px] z-5"> 
  <Image
    src="/pic1.png"
    alt="Project Image"
    width={650}
    height={700}
    objectFit="cover"
  />
</div>
      </div>

      {/* About Section */}
      <div className="flex items-center justify-center gap-10 bg-gray-100 mb-20 p-8">
      <div className="grid grid-cols-2 w-[1170px] h-[465px] px-20">
        
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-10">
        <div className="relative h-[265px] w-[270px]">
  <Image
    src="/pic2.png"
    alt="Project Image 1"
    fill
    objectFit="cover"
  />
</div>

<div className="relative h-[345px] w-[270px] mx-5 mt-10">
  <Image
    src="/pic4.png"
    alt="Project Image 2"
    fill
    objectFit="cover"
  />
</div>

          <div className="absolute h-[140px] w-[270px] my-[300px] ">
            <Image
              src="/pic3.png"
              alt="Project Image 3"
              fill
    objectFit="cover"
            />
          </div>
        </div>
        
        {/* About Text */}
        <div className="ml-10 pl-20">
          <h2 className="text-7xl font-thin text-gray-400 tracking-wider">About</h2>
          <p className="text-gray-600 mb-6 my-5 py-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
          </p>
          <a href="#" className="absolute my-[10px] text-sm tracking-wider text-gray-800 bg-white px-[46px] py-6">
            Read More →
          </a>
        </div>
      </div>
    </div>

    {/* Main Focus Section */}
    <div className="flex flex-col bg-white py-[100px] mb-[100px]">
      <h2 className="text-6xl font-light text-gray-300 mb-16">Main Focus/Mission Statement</h2>
      <div className="grid grid-cols-2 gap-20 max-w-5xl w-full">
        <div className="flex space-x-6">
          <span className="text-9xl font-bold text-gray-100 relative -my-[20px]">1</span>
          <p className="text-gray-700 text-lg">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed efficitur lectus et facilisis placerat.
          </p>
        </div>

        <div className="flex items-start space-x-6">
          <span className="text-9xl font-bold text-gray-100 relative -my-[20px]">2</span>
          <p className="text-gray-700 text-lg">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed efficitur lectus et facilisis placerat.
          </p>
        </div>
      </div>
    </div>

    {/* Projects Section */}
    <div className="flex flex-col bg-white">
      <h2 className="text-6xl font-light text-gray-300 mb-20 -my-[50px] mx-5">Our Projects</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-7xl w-full px-20">
        
        {/* First Image with Hover Effect */}
        <div className="relative group h-[255px] w-[570px] overflow-hidden right-[50px]">
          <Image
            src="/pic9.png"
            alt="Sample Project"
            width={500}
            height={300}
            layout="responsive"
            className="w-full h-full transition-transform duration-300 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold">Sample Project</h3>
              <p className="mt-2">VIEW MORE →</p>
            </div>
          </div>
        </div>

        {/* Other Images */}
        <div className="relative group h-[255px] w-[570px] overflow-hidden mx-[315px]">
          <Image
            src="/pic5.png"
            alt="Project Image 2"
            width={500}
            height={300}
            layout="responsive"
            className="w-full h-full transition-transform duration-300 transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold">Sample Project</h3>
              <p className="mt-2">VIEW MORE →</p>
            </div>
          </div>
        </div>

        {/* Other Project Images */}
        <div className="relative group h-[255px] w-[270px] overflow-hidden my-[280px] right-[505px]">
          <Image
            src="/pic6.png"
            alt="Project Image 3"
            width={500}
            height={300}
            layout="responsive"
            className="w-full h-full transition-transform duration-300 transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold">Sample Project</h3>
              <p className="mt-2">VIEW MORE →</p>
            </div>
          </div>
        </div>

        <div className="relative group h-[255px] w-[470px] overflow-hidden my-[280px] right-[438px]">
          <Image
            src="/pic7.png"
            alt="Project Image 4"
            width={500}
            height={300}
            layout="responsive"
            className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold">Sample Project</h3>
              <p className="mt-2">VIEW MORE →</p>
            </div>
          </div>
        </div>

        <div className="relative group h-[255px] w-[370px] overflow-hidden my-[280px] right-[170px]">
          <Image
            src="/pic8.png"
            alt="Project Image 5"
            width={500}
            height={300}
            layout="responsive"
            className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold">Sample Project</h3>
              <p className="mt-2">VIEW MORE →</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="bg-white  flex max-w-5xl w-full mx-[130px]">
    
    {/* Left side: Form */}
    <div className=" mb-20">
      <h2 className="text-6xl font-light text-gray-300 mb-10 -my-[200px] -mx-20 z-10">Contact Us</h2>

      <form className='-mx-[100px] '>
        <div className="mb-3 ">
          <label className="block text-gray-500 right-[200px]"></label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border  bg-gray-100 text-gray-700"
            placeholder="Name"
          />
        </div>

        <div className="mb-3">
          <label className="block text-gray-500"></label>
          <input
            type="text"
            name="phone"
            className="w-full p-2 border  bg-gray-100 text-gray-700"
            placeholder="Phone Number"
          />
        </div>

        <div className="mb-3">
          <label className="block text-gray-500"></label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border  bg-gray-100 text-gray-700"
            placeholder="E-mail"
          />
        </div>

        <div className="flex mb-3">
          <label className="block text-gray-500"></label>
          <input
            type="text"
            name="interest"
            className="w-full p-2 border  bg-gray-100 text-gray-700"
            placeholder="Interested In"
          />
        </div>

        <div className="mb-[100px]">
          <label className="block text-gray-500"></label>
          <textarea
            name="message"
            className="w-full  border py-[15px] px-[200px] bg-gray-100 text-gray-700"
            placeholder="Messages"
          ></textarea>
        </div>

        <button
          type="submit"
          className=" flex px-[70px] py-5 font-thin text-sm tracking-wider text-white bg-customGray hover:bg-gray-700"
        >
          Send Email
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </form>
    </div>
    
    {/* Right side: Image */}
    <div className="relative left-[150px] bottom-[100px] z-5">
  <Image
    src="/pic10.png" // Ensure the path is correct
    alt="Contact Image"
    layout="responsive"
    width={949} // Set the width for the image
    height={369} // Set the height for the image
    className="relative" // ClassName for any additional styling if needed
  />
</div>

  </div>
    </div>
  </div>
  );
}

export default Page;
