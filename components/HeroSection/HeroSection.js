import styles from "../../styles/Home.module.css";
import { IoLocationOutline, IoMdNotifications } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import Header from "../Shared/Header/Header";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className={styles.hero_section}>
      <Header />
      <div className="px-[70px] flex justify-between items-center">
        <div className="hero_content max-w-[672px] mt-[127px] h-[100vh] ">
          <h1 className="text-[84px] font-bold">
            Find the job of your <span className="text-[#F2994A]">Dreams</span>
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
            <div className="input_grp">
              {/* <FiSearch /> */}
              <input type="text" placeholder="Job title or keyword" />
              {/* <IoLocationOutline /> */}
              <input type="text" placeholder="Bandung, Indonesia" />
              <button>Search</button>
            </div>
          </div>
        </div>
        <div className="profile_pic bg-[url('/images/hero_images.png')] bg-top-right bg-contain bg-no-repeat h-[720px] w-[750px] relative">
          <div className="freelancer_box w-[179px] h-[258px] bg-[#FFFDFD]/60 rounded-[16px] absolute right-48 flex flex-col justify-start items-center p-4">
            {/* <Image
              src="/images/profile/Mask group.png"
              alt="profile"
              height={86}
              width={86}
            /> */}
            <IoMdNotifications className="text-[#EB5757] text-[50px] rotate-[320deg] m-3 block" />
            <h3 className="text-[#333333] font-bold text-[21px] leading-7 mt-3">
              10.5K
            </h3>
            <span className="text-[#828282] font-medium text-[14px] leading-6 mb-7 mt-2">
              Job Vocancy
            </span>
          </div>
          <div className="interview_box bg-[#FFFDFD]/60 rounded-[16px] max-w-[311px] h-[110px] flex flex-col justify-evenly items-center absolute bottom-64 p-4">
            <span>
              <IoMdNotifications className="text-[#EB5757] text-[50px] rotate-[320deg] m-3 block" />
            </span>
            {/* <div className="interview_con"> */}
            <p className="text-[#4F4F4F] font-medium text-[14px] leading-6">
              It only takes a few seconds
            </p>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
