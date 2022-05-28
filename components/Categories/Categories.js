import {
  AiFillNotification,
  AiFillFolderOpen,
  AiFillDashboard,
} from "react-icons/ai";
import { FaPenNib, FaHandHoldingUsd, FaHandsHelping } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { MdOutlineVideoLibrary } from "react-icons/md";

const Categories = () => {
    return (
      <div className="px-[70px] my-[105px] mx-[70px]">
        <h4 className="text-center font-medium text-[25px] leading-9 text-[#F2994A]">
          Choose Categories
        </h4>
        <h2 className="text-center font-semibold mt-3 text-[46px] leading-10 text-[#333333]">
          Choose Categories
        </h2>
        <div className="category_box my-24 flex flex-wrap justify-between items-center gap-10">
          <div className="marketing_box bg-white flex justify-evenly items-center max-w-[328px] h-[160px] rounded-[31px]">
            <AiFillNotification className="text-[60px] ml-3 text-[#F2994A]" />
            <div className="space-y-3 pl-[43px]">
              <h3 className="font-bold text-[21px] leading-7 text-[#333333]">
                Marketing & Communication
              </h3>
              <p className="text-[14px] font-medium leading-6 text-[#828282]">
                58 Jobs Available
              </p>
            </div>
          </div>
          <div className="ui_box bg-[#F2994A] flex justify-evenly items-center w-[328px] h-[160px] rounded-[31px]">
            <FaPenNib className="text-[50px] rotate-[-45deg] ml-3 text-white" />
            <div className="space-y-3 pl-[43px]">
              <h3 className="font-bold text-[21px] leading-7 text-white">
                UI / UX Design
              </h3>
              <p className="text-[14px] font-medium leading-6 text-[#F2F2F2]">
                120 Jobs Available
              </p>
            </div>
          </div>
          <div className="finance_box bg-white flex justify-evenly items-center w-[328px] h-[160px] rounded-[31px]">
            <FaHandHoldingUsd className="text-[60px] ml-3 text-[#F2994A]" />
            <div className="space-y-3 pl-[43px]">
              <h3 className="font-bold text-[21px] leading-7 text-[#333333]">
                Finance Management
              </h3>
              <p className="text-[14px] font-medium leading-6 text-[#828282]">
                230 Jobs Available
              </p>
            </div>
          </div>
          <div className="web_box bg-white flex justify-evenly items-center w-[328px] h-[160px] rounded-[31px]">
            <BiCodeBlock className="text-[50px] ml-3 text-[#F2994A]" />
            <div className="space-y-3 pl-[43px]">
              <h3 className="font-bold text-[21px] leading-7 text-[#333333]">
                Web <br /> Development
              </h3>
              <p className="text-[14px] font-medium leading-6 text-[#828282]">
                100 Jobs Available
              </p>
            </div>
          </div>
          <div className="project_box bg-white flex justify-evenly items-center w-[328px] h-[160px] rounded-[31px]">
            <AiFillFolderOpen className="text-[50px] ml-3 text-[#F2994A]" />
            <div className="space-y-3 pl-[43px]">
              <h3 className="font-bold text-[21px] leading-7 text-[#333333]">
                Project Management
              </h3>
              <p className="text-[14px] font-medium leading-6 text-[#828282]">
                87 Jobs Available
              </p>
            </div>
          </div>
          <div className="consulting_box bg-white flex justify-evenly items-center w-[328px] h-[160px] rounded-[31px]">
            <FaHandsHelping className="text-[50px] rotate-[30deg] ml-3 text-[#F2994A]" />
            <div className="space-y-3 pl-[43px]">
              <h3 className="font-bold text-[21px] leading-7 text-[#333333]">
                Business & Consulting
              </h3>
              <p className="text-[14px] font-medium leading-6 text-[#828282]">
                23 Jobs Available
              </p>
            </div>
          </div>
          <div className="graphic_box bg-white flex items-center w-[328px] h-[160px] rounded-[31px]">
            <AiFillDashboard className="text-[50px] ml-3 text-[#F2994A]" />
            <div className="space-y-3 pl-[43px]">
              <h3 className="font-bold text-[21px] mr-3 leading-7 text-[#333333]">
                Graphic <br /> Designer
              </h3>
              <p className="text-[14px] font-medium leading-6 text-[#828282]">
                65 Jobs Available
              </p>
            </div>
          </div>
          <div className="video_box bg-white flex justify-evenly items-center w-[328px] h-[160px] rounded-[31px]">
            <MdOutlineVideoLibrary className="text-[50px] rotate-[270deg] ml-3 text-[#F2994A]" />
            <div className="space-y-3 pl-[43px]">
              <h3 className="font-bold text-[21px] leading-7 text-[#333333]">
                Video Editor
              </h3>
              <p className="text-[14px] font-medium leading-6 text-[#828282]">
                120 Jobs Available
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Categories;