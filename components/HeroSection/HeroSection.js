import styles from "../../styles/Home.module.css";
import { IoLocationOutline } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import Header from "../Shared/Header/Header";

const HeroSection = () => {
  return (
    <div className={styles.hero_section}>
      <Header />
      <div className="px-[70px]">
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
        <div className="hero_image"></div>
      </div>
    </div>
  );
};

export default HeroSection;
