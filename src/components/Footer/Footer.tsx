import { Link } from "react-router-dom";
import Logo from "./brain.svg";
import { useEffect } from "react";

const Footer = () => {
  // Scrolling to top of page onClick for Links
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      scrollToTop();
    }, 10);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <footer className="footer bg-neutral text-base-content p-10">
      <aside>
        <img src={Logo} alt="Company Logo" className="rotate-12 w-16 m-1" />
        <p>
          InvestIQ
          <br />
          Providing reliable stock insite since 2023
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link to="/search" className="link link-hover" onClick={scrollToTop}>
          Stock Info
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to='/' className="link link-hover" onClick={scrollToTop}>
          About us
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <p className="link link-hover">Terms of use</p>
        <p className="link link-hover">Privacy policy</p>
        <p className="link link-hover">Cookie policy</p>
      </nav>
    </footer>
  );
};

export default Footer;
