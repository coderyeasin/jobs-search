import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Footer = () => {
    return (
      <div className='bg-white'>
        <div className="flex justify-evenly py-[87px]">
          <div className="logo_con max-w-[350px]">
            <span className="flex items-center font-bold text-[#F2994A] text-[34px]">
              Jo
              <FiSearch className="text-[36px]" />
              bs
            </span>
            <p className="text-[#333333] my-6 spay-">
              Joobs is the largest talent platform in Southeast Asia and Taiwan
              for career development and recruitment.
            </p>
          </div>
          <div className="employer text-[#333333]">
            <h3 className="font-bold text-[21px] leading-7 mb-[33px]">
              Employer
            </h3>
            <ul className="font-medium leading-6 space-y-5">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="employer text-[#333333]">
            <h3 className="font-bold text-[21px] leading-7 mb-[33px]">
              Find Vacancy Based On
            </h3>
            <ul className="font-medium leading-6 space-y-5">
              <li>Help Center</li>
              <li>Job Location</li>
              <li>Company Name</li>
            </ul>
          </div>
          <div className="employer max-w-[350px] text-[#333333]">
            <h3 className="font-bold text-[21px] leading-7 mb-[33px]">
              Address
            </h3>
            <ul className="font-medium leading-6 space-y-5">
              <li>hello@jobbb.com</li>
              <li>
                JL. Setiabudhi No. 193 Sukasari, Bandung West Java, Indonesia
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright_text">
          <p className="text-center py-10 text-[#333333] font-medium leading-6 ">
            © 2022 Hazar Hamzah - All rights reserved.
          </p>
        </div>
      </div>
    );
};

export default Footer;