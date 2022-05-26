import Image from "next/image";


const CreateProfile = () => {
  return (
    <div className="flex justify-center ">
      <div className="profile_pic ">
        <Image
          src="/images/profile.png"
          alt="profile"
          height={600}
          width={638}
        />
      </div>
      <div className="profile_content space-y-10">
        <h4 className="font-medium text-[25px] leading-8 text-[#F2994A]">
          Create Profile
        </h4>
        <h3 className="font-semibold text-[46px] leading-10 text-[#333333] max-w-[464px]">Build Your Personal Account Profile</h3>
        <p className="max-w-[689px]">
          Create an account for the job information you want, get daily
          notifications and you can easily apply directly to the company you
          want and create an account now for free
        </p>
        <button>Create Account</button>
      </div>
    </div>
  );
};

export default CreateProfile;
