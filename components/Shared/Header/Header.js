import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import styles from '../../../styles/Home.module.css'
const Header = () => {
  return (
    <div className="px-[70px] pt-[40px]">
      <nav className="flex justify-between items-center ">
        <span className="flex items-center font-bold text-[#F2994A] text-[34px]">
          Jo
          <FiSearch className="text-[36px]" />
          bs
        </span>
        <ul className="flex font-medium">
          <li className="mx-10 text-[#F2994A]">Home</li>
          <li className="mx-10">Employer</li>
          <li className="mx-10">Candidate</li>
        </ul>

        <div>
          <button className="mr-[33px] border-none font-medium text-[21px]">
            Login
          </button>
          <button className={styles.button}>Sign up</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
