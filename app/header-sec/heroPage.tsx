import CompaniesSlider from "../companies/slidingSwiper";
export default function Header() {
  return (
    <header className="bg-white text-[#050B0B] w-full min-h-[777px] relative overflow-x-hidden">

      {/* Text Content */}
      <div className="md:left-[100px] w-[100%] md:w-[650px]">
        <h1 className="absolute top-[201px] left-[230px] text-[80px] w-[636px] h-[140px] sm:text-[45px] md:text-[60px] font-[500] drop-shadow-[0px_4px_4px_rgba(0,0,0,.52)] leading-[70px]">
          WE DRIVE YOUR <br /> VISION FORWARD
        </h1>

        <p className="absolute top-[381px] left-[230px] w-[434px] h-[56px] font-[400] text-[24px] sm:text-[18px] md:text-[20px] leading-[28px]">
          Connect your team with cloud expertise that drives innovation
        </p>

        <div className="w-[171px] h-[41px] mt-8 flex flex-col md:flex-row items-start md:items-center gap-6">
          <button className="absolute top-[492px] left-[231px] w-[171px] h-[41px] border border-[#152F27] px-4 py-1 rounded-[30px] bg-[#081617] text-white drop-shadow-[0px_4px_4px_rgba(0,0,0,.45)] hover:bg-white hover:text-[#081617] transition-colors duration-500 cursor-pointer">
            Get Started
          </button>

          <img
            src="/Aws-Partnered-3.svg"
            alt="AWS"
            width={91}
            height={91}
            className=" absolute top-[456px] left-[546px] w-[91px] h-[91px] md:ml-[120px]"
          />
        </div>
      </div>

      {/* Image */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="https://codetokloudbucketccests.s3.us-east-1.amazonaws.com/websiteSquare.mp4"
        width={745}
        height={496}
        className="absolute top-[119px] left-[882px] md:block"
      />

      {/* Companies Slider */}
      <div className="absolute top-[581px] left-[221px] w-[589px] h-[30px] ">
        <p className="text-start px-20 text-[16px] sm:text-[18px] md:text-[20px] mb-4">
          Trusted by more than 400 companies around the world
        </p>
        <CompaniesSlider />
      </div>
    </header>
  );
}