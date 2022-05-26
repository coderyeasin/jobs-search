
import { AiFillNotification } from "react-icons/ai";

const Categories = () => {
    return (
      <div className="px-[70px] my-[105px]">
        <h4 className="text-center font-medium text-[25px] leading-9 text-[#F2994A]">
          Choose Categories
        </h4>
        <h2 className="text-center font-semibold text-[46px] leading-10 text-[#333333]">
          Choose Categories
        </h2>
        <div className="category_box my-24 flex justify-between items-center">
          <div className="marketing_box bg-white flex justify-evenly items-center max-w-[328px] h-[160px] rounded-[31px]">
            <AiFillNotification className="text-[40px] ml-3 text-[#F2994A]" />
            <div className="space-y-3 pl-[43px]">
              <h3 className="font-bold text-[21px] leading-7 text-[#333333]">
                Marketing & Communication
              </h3>
              <p className="text-[14px] font-medium leading-6 text-[#828282]">
                58 Jobs Available
              </p>
            </div>
          </div>
          <div className="ui_box bg-[#F2994A] flex justify-evenly items-center max-w-[328px] h-[160px] rounded-[31px]">
            <AiFillNotification className="text-[40px] ml-3 text-white" />
            <div className="space-y-3 pl-[43px]">
              <h3 className="font-bold text-[21px] leading-7 text-white">
                UI / UX Design
              </h3>
              <p className="text-[14px] font-medium leading-6 text-[#F2F2F2]">
                120 Jobs Available
              </p>
            </div>
          </div>
          <div className="finance_box bg-white flex justify-evenly items-center max-w-[328px] h-[160px] rounded-[31px]">
            <AiFillNotification />
            <div>
              <h3>Marketing & Communication</h3>
              <p>230 Jobs Available</p>
            </div>
          </div>
          <div className="web_box bg-white flex justify-evenly items-center max-w-[328px] h-[160px] rounded-[31px]">
            <AiFillNotification />
            <div>
              <h3>Marketing & Communication</h3>
              <p>230 Jobs Available</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Categories;