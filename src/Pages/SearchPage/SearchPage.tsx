import React, { useState, ChangeEvent, SyntheticEvent } from "react";
import CardList from "./../../components/CardList/CardList";
import Search from "./../../components/Search/Search";
import { CompanySearch } from "./../../company";
import { searchCompanies } from "./../../api";

const SearchPage = () => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
  };
  return (
    <div className="container w-full min-h-screen flex flex-col items-center  gap-y-5 my-5">
      <Search
        search={search}
        onSearchSubmit={onSearchSubmit}
        handleSearchChange={handleSearchChange}
      />

      <CardList
        searchResults={searchResult}
      />

      {serverError && <h1>{serverError}</h1>}
    </div>
  );
};

export default SearchPage;
