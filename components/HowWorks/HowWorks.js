import Image from "next/image";
import { IoMdNotifications } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { FcOk } from "react-icons/fc";

const HowWorks = () => {
  return (
    <div className="flex justify-around my-[89px] mx-[70px]">
      <div className="profile_content ">
        <h4 className="font-medium text-[25px] leading-8 text-[#F2994A]">
          How It Works
        </h4>
        <h3 className="font-semibold text-[46px] leading-[55px] text-[#333333] max-w-[526px] my-6">
          Easy Step To Find and Apply Your Dream Job
        </h3>
        <p className="max-w-[558px] text-[21px] font-light leading-7 mb-[34px]">
          We will help you to find your dream job easily, let us help you manage
          everything you need
        </p>
        <div className="apply_box bg-white max-w-[558px] rounded-[31px] p-6">
          <div className="resume_box">
            <h3 className="font-bold text-[21px] leading-7 text-[#F2994A]">
              Easy to uload Your Best CV and Portofolio
            </h3>
            <p className="font-light text-[21px] leading-7 text-[#000000] pt-2">
              You can upload your resume, CV, and portofolio directly to Jobbb
            </p>
          </div>
          <div className="update_box mt-[47px]">
            <h3 className="font-bold text-[21px] leading-7 text-[#F2994A]">
              Easy to uload Your Best CV and Portofolio
            </h3>
            <p className="font-light text-[21px] leading-7 text-[#000000] pt-2">
              You can upload your resume, CV, and portofolio directly to Jobbb
            </p>
          </div>
          <div className="companies_box mt-[47px]">
            <h3 className="font-bold text-[21px] leading-7 text-[#F2994A]">
              Easy to uload Your Best CV and Portofolio
            </h3>
            <p className="font-light text-[21px] leading-7 text-[#000000] pt-2">
              You can upload your resume, CV, and portofolio directly to Jobbb
            </p>
          </div>
        </div>
      </div>
      <div className="profile_pic bg-[url('/images/works.png')] bg-center bg-cover bg-no-repeat h-[720px] w-[750px] relative">
        <div className="interview_box bg-[#FFFDFD]/60 rounded-[16px] max-w-[311px] h-[86px] flex justify-evenly items-center absolute bottom-96 p-4">
          <span>
            <FiLogOut className="text-[#FF9A62] text-[50px] rotate-[-90deg] m-3 block" />
          </span>
          <h3 className="text-[#333333] font-bold text-[21px] leading-7">
            Upload your CV
          </h3>
        </div>
        <div className="interview_box bg-[#FFFDFD]/60 rounded-[16px] max-w-[305px] h-[110px] flex justify-evenly items-center absolute bottom-64 left-16 p-4">
          <span>
            <FcOk className="text-[#219653] text-[50px] m-3 block" />
          </span>
          <div className="interview_con">
            <h3 className="text-[#333333] font-bold text-[21px] leading-7">
              You Are Hired
            </h3>
            <p className="text-[#4F4F4F] font-medium text-[14px] leading-6">
              Congrats you got the job as Ui / UX Designer at CODE.ID
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
