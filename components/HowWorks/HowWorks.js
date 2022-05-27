import Image from "next/image";
import { IoMdNotifications } from "react-icons/io";

const HowWorks = () => {
  return (
    <div className="flex justify-center my-[89px]">
      <div className="profile_content ">
        <h4 className="font-medium text-[25px] leading-8 text-[#F2994A]">
          How It Works
        </h4>
        <h3 className="font-semibold text-[46px] leading-[55px] text-[#333333] max-w-[464px] my-6">
          Easy Step To Find and Apply Your Dream Job
        </h3>
        <p className="max-w-[689px] text-[21px] font-light leading-7 mb-[95px]">
          We will help you to find your dream job easily, let us help you manage
          everything you need
        </p>
        <div className="apply_box">
          <div className="resume_box">
            <h3>Easy to uload Your Best CV and Portofolio</h3>
            <p>
              You can upload your resume, CV, and portofolio directly to Jobbb
            </p>
          </div>
          <div className="update_box">
            <h3>Easy to uload Your Best CV and Portofolio</h3>
            <p>
              You can upload your resume, CV, and portofolio directly to Jobbb
            </p>
          </div>
          <div className="companies_box">
            <h3>Easy to uload Your Best CV and Portofolio</h3>
            <p>
              You can upload your resume, CV, and portofolio directly to Jobbb
            </p>
          </div>
        </div>
      </div>
      <div className="profile_pic bg-[url('/images/works.png')] bg-center bg-cover bg-no-repeat h-[720px] w-[750px] relative">
        <div className="interview_box bg-[#FFFDFD]/60 rounded-[16px] max-w-[311px] h-[110px] flex justify-evenly items-center absolute bottom-64 p-4">
          <span>
            <IoMdNotifications className="text-[#EB5757] text-[50px] rotate-[320deg] m-3 block" />
          </span>
          <h3 className="text-[#333333] font-bold text-[21px] leading-7">
            Upload your CV
          </h3>
          {/* <div className="interview_con">
            <h3 className="text-[#333333] font-bold text-[21px] leading-7">
              Upload your CV
            </h3>
            <p className="text-[#4F4F4F] font-medium text-[14px] leading-6">
              You has now interview next week
            </p>
          </div> */}
        </div>
        <div className="interview_box bg-[#FFFDFD]/60 rounded-[16px] max-w-[311px] h-[110px] flex justify-evenly items-center absolute bottom-64 p-4">
          <span>
            <IoMdNotifications className="text-[#EB5757] text-[50px] rotate-[320deg] m-3 block" />
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
