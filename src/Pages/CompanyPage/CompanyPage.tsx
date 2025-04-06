import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";
import TopBar from "../../components/TopBar/TopBar";
import CompanyDashboard from "../../components/CompanyDashboard/CompanyDashboard";
import Tile from "../../components/Tile/Tile";
import Spinner from "../../components/Spinner/Spinner";

const CompanyPage = () => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfileInit();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {company ? (
        <div className="container mt-12 min-h-screen">
          <TopBar />
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.companyName} />
            <Tile title="Price" subTitle={"$" + company.price.toString()} />
            <Tile title="Discounted Cashflow" subTitle={"$" + company.dcf.toFixed(2)} />
            <Tile title="Sector" subTitle={company.sector} />
            <p className=" bg-neutral rounded text-medium text-justify p-5 my-2">
              {company.description}
            </p>
          </CompanyDashboard>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CompanyPage;
