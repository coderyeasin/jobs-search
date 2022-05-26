import Link from "next/link";

const Header = () => {
  return (
    <div>
      <nav className="flex">
        <Link href="#">Jobs</Link>
        <ul>
          <li>Home</li>
          <li>Employer</li>
          <li>Candidate</li>
        </ul>
        <button>Sign up</button>
      </nav>
    </div>
  );
};

export default Header;
