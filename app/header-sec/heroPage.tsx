import CompaniesSlider from "../companies/slidingSwiper";
export default function Header() {
    return (
      <header className="bg-white text-[#050B0B] w-full min-h-[777px] relative overflow-x-hidden">
  
        {/* Text Content */}
        <div className="absolute top-[100px] left-[5%] md:left-[100px] w-[90%] md:w-[650px]">
          <h1 className="text-[32px] sm:text-[45px] md:text-[60px] font-[500] drop-shadow-[0px_4px_4px_rgba(0,0,0,.52)] leading-[60px]">
            WE DRIVE YOUR <br /> VISION FORWARD
          </h1>
  
          <p className="mt-6 text-[16px] sm:text-[18px] md:text-[20px] leading-[25px]">
            Connect your team with cloud expertise that drives innovation
          </p>
  
          <div className="mt-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <button className="w-[170px] h-[40px] border border-[#152F27] px-4 py-1 rounded-[30px] bg-[#081617] text-white drop-shadow-[0px_4px_4px_rgba(0,0,0,.45)] hover:bg-white hover:text-[#081617] transition-colors duration-500 cursor-pointer">
              Get Started
            </button>
  
            <img
              src="/Aws-Partnered-3.svg"
              alt="AWS"
              width={91}
              height={91}
              className="md:ml-[120px]"
            />
          </div>
        </div>
  
        {/* Image */}
        <img
          src="/Rectangle-276.svg"
          alt=""
          width={745}
          height={596}
          className="absolute top-1.5 right-32 transform translate-x-1/4 hidden md:block"
            />
                  {/* Companies Slider */}
      <div className="absolute bottom-0 left-0 w-full">
        <p className="text-start px-20 text-[16px] sm:text-[18px] md:text-[20px] mb-4">
          Trusted by more than 400 companies around the world
        </p>
        <CompaniesSlider />
      </div>
      </header>
    );
  }