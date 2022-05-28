import styles from "../../styles/Home.module.css";
import { IoFlashSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { FaBriefcase, FaLocationArrow, FaSearch } from "react-icons/fa";
import Header from "../Shared/Header/Header";


const HeroSection = () => {
  return (
    <div className={styles.hero_section}>
      <Header />
      <div className="px-[70px] flex justify-between items-center">
        <div className="hero_content max-w-[790px] mt-[127px] h-[100vh] ">
          <div className="max-w-[672px]">
            <h1 className="text-[84px] font-bold">
              Find the job of your{" "}
              <span className="text-[#F2994A]">Dreams</span>
            </h1>
            <p className="my-6 max-w-[558px] text-[#4F4F4F] text-[21px] font-light">
              Find You New Job Today! New Job Postings Everyday just for you,
              browse the job you want and apply wherever you want
            </p>
            <div className="search_area space-y-6">
              <h3 className="my-6 max-w-[558px] text-[#333333] text-[25px] font-medium">
                Trending Jobs keyword :
              </h3>
              <ul className="flex font-bold text-[21px] text-[#F2994A]">
                <li>Web Designer</li>
                <li className="mx-6">UI/UX Designer</li>
                <li>Frontend</li>
              </ul>
            </div>
            <div className="w-[789px] p-6 rounded-[52px] bg-white relative flex justify-center items-center mt-6">
              <div className="flex ">
                <FaSearch className="text-[#F2994A] text-[24px] mx-[22px]" />
                <input
                  type="text"
                  className="border-none w-[70%]"
                  placeholder="Job title or keyword."
                />
              </div>
              <div className="flex">
                <GoLocation className="text-[#F2994A] text-[24px] mx-[22px]" />
                <input
                  type="text"
                  className="border-none w-[70%]"
                  placeholder="Bandung, Indonesia"
                />
              </div>
              <button className="bg-[#F2994A] w-[130px] h-[45px] text-[21px] font-normal leading-relaxed text-white rounded-[52px] after:absolute after:border-[#E0E0E0] after:border-l-4 after:left-80 after:top-6 after:bottom-6">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="profile_pic bg-[url('/images/hero_images.png')] bg-top-right bg-contain bg-no-repeat h-[720px] w-[750px] relative">
          <div className="job_box w-[145px] h-[148px] bg-[#FFFDFD]/60 rounded-[16px] absolute right-48 top-20 flex flex-col justify-start items-center p-4">
            <FaBriefcase className="text-[#2F80ED] text-[50px] " />
            <h3 className="text-[#4F4F4F] font-semibold text-[25px] leading-7 mt-3 ">
              10.5K
            </h3>
            <span className="text-[#333333] font-medium leading-7 mt-2">
              Job Vocancy
            </span>
          </div>
          <div className="find_box bg-[#FFFDFD]/60 rounded-[16px] max-w-[156px] h-[139px] flex flex-col justify-evenly items-center absolute bottom-32 p-4">
            <span>
              <IoFlashSharp className="text-[#F2994A] text-[36px] " />
            </span>
            <p className="text-[#333333] font-medium leading-6">
              It only takes a few seconds
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
