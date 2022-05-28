import Image from "next/image";

const Companies = () => {
  return (
    <div className="bg-white px-[70px]">
      <h3 className="font-medium text-[25px] leading-8 text-center pt-16">
        Join Most Well Known
        <span className="text-[#F2994A] "> Companies </span>
        Around The World
      </h3>
      <div className="companies_logo flex justify-between  pb-[115px] mt-[79px]">
        <Image src="/images/slack.png" alt="slack" width={156} height={40} />
        <Image
          src="/images/microsoft.png"
          alt="slack"
          width={232}
          height={50}
        />
        <Image
          src="/images/googlelogo_color_160x56dp 1.png"
          alt="slack"
          width={184}
          height={60}
        />

        <Image src="/images/Airbnb.png" alt="slack" width={184} height={58} />
      </div>
    </div>
  );
};

export default Companies;
