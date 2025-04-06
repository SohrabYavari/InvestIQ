import { Link } from "react-router-dom";
import { FaHome, FaMoneyBill, FaTable } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";

const TopBar = () => {
  return (
    <>
      <div role="tablist" className="tabs tabs-bordered mx-auto">
        <Link type="radio" to="company-profile" role="tab" className="tab hover:bg-neutral ease-in-out duration-200 rounded-tl-2xl">
          <div className="flex items-center gap-2">
            <FaHome />
            Company Profile
          </div>
        </Link>
        <Link type="radio" to="income-statement" role="tab" className="tab hover:bg-neutral ease-in-out duration-200">
          <div className="flex items-center gap-2">
            <FaTable />
            Income Statement
          </div>
        </Link>
        <Link type="radio" to="balance-sheet" role="tab" className="tab hover:bg-neutral ease-in-out duration-200">
          <div className="flex items-center gap-2">
            <FaTableCells />
            Balance Sheet
          </div>
        </Link>
        <Link type="radio" to="cashflow-statement" role="tab" className="tab hover:bg-neutral ease-in-out duration-200 rounded-tr-2xl">
          <div className="flex items-center gap-2">
            <FaMoneyBill />
            Cashflow Statement
          </div>
        </Link>
      </div>
    </>
  );
};

export default TopBar;
