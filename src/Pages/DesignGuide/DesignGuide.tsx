
import Table from "../../components/Table/Table";
import RatioTile from "../../components/RatioTile/RatioTile";
import { testIncomeStatementData } from "../../components/Table/TestData";
import Tile from "../../components/Tile/Tile";

const tableConfig = [
  {
    label: "symbol",
    render: (company: any) => company.symbol,
  },
];

const tableConfig2 = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
];


const DesignGuide = () => {
  return (
    <>
    <div className="container flex flex-col gap-2 pb-20">
      <div className="text-center">
        <h1 className="text-6xl font-medium pt-16 my-2">InvestIQ Design Guide Page</h1>
        <h2>A comprehensive guide on the design used in this application.</h2>
      </div>
      <div className="flex">
        <Tile title="Ttile" subTitle="Sub Title"/>
        <Tile title="Ttile" subTitle="Sub Title"/>
        <Tile title="Ttile" subTitle="Sub Title"/>
        <Tile title="Ttile" subTitle="Sub Title"/>
      </div>
      <Table data={testIncomeStatementData} config={tableConfig} />
      <RatioTile data={testIncomeStatementData} config={tableConfig2} />
    </div>
    </>
  );
};

export default DesignGuide;
