import React from "react";
import { CompanySearch } from "../../company";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  searchResult: CompanySearch;
}

const Card: React.FC<Props> = ({
  id,
  searchResult,
}: Props): JSX.Element => {
  return (
    <Link
      to={`/InvestIQ/company/${searchResult.symbol}/company-profile`}
      className="font-bold md:text-left"
    >
      <div
        className="flex flex-col my-2 items-center justify-between w-full p-5 bg-neutral rounded-lg md:flex-row"
        key={id}
        id={id}
      >
        <p className="md:px-2 md:text-left text-center md:pt-0">
          {searchResult.name} <br />
          <span className="text-secondary">({searchResult.symbol})</span>
        </p>
        <p className="md:px-2">{searchResult.currency}</p>
        <p className="font-bold md:px-2 md:text-right text-center md:pt-0 pt-5">
          {searchResult.exchangeShortName} - <br />
          {searchResult.stockExchange}
        </p>
      </div>
    </Link>
  );
};

export default Card;
