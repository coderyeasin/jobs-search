import Image from "next/image";
import { IoMdNotifications } from "react-icons/io";

const CreateProfile = () => {
  return (
    <div className="flex justify-center my-[89px]">
      <div className="profile_pic bg-[url('/images/profile.png')] bg-center bg-cover bg-no-repeat h-[610px] w-[750px] relative">
        <div className="freelancer_box w-[179px] h-[258px] bg-[#FFFDFD]/60 rounded-[16px] absolute right-48 flex flex-col justify-start items-center p-4">
          <Image
            src="/images/profile/Mask group.png"
            alt="profile"
            height={86}
            width={86}
          />
          <h3 className="text-[#333333] font-bold text-[21px] leading-7 mt-3">
            Wartiyem
          </h3>
          <span className="text-[#828282] font-medium text-[14px] leading-6 mb-7 mt-2">
            UI/UX Designer
          </span>
          <button className="w-[96px] h-[41px] rounded-[31px] bg-[#F2994A] text-white font-medium leading-6">
            Hire Me
          </button>
        </div>
        <div className="interview_box bg-[#FFFDFD]/60 rounded-[16px] max-w-[311px] h-[110px] flex justify-evenly items-center absolute bottom-64 p-4">
          <span>
            <IoMdNotifications className="text-[#EB5757] text-[50px] rotate-[320deg] m-3 block" />
          </span>
          <div className="interview_con">
            <h3 className="text-[#333333] font-bold text-[21px] leading-7">
              New Interview
            </h3>
            <p className="text-[#4F4F4F] font-medium text-[14px] leading-6">
              You has now interview next week
            </p>
          </div>
        </div>
      </div>
      <div className="profile_content ">
        <h4 className="font-medium text-[25px] leading-8 text-[#F2994A]">
          Create Profile
        </h4>
        <h3 className="font-semibold text-[46px] leading-[55px] text-[#333333] max-w-[464px] my-6">
          Build Your Personal Account Profile
        </h3>
        <p className="max-w-[689px] text-[21px] font-light leading-7 mb-[95px]">
          Create an account for the job information you want, get daily
          notifications and you can easily apply directly to the company you
          want and create an account now for free
        </p>
        <button className="w-[220px] h-[80px] text-[21px] font-bold leading-7 text-white bg-[#F2994A] rounded-[31px]">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default CreateProfile;
