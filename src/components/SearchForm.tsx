import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false}>
      <input name="query" defaultValue={query} placeholder="Search Rooms" />
      <SearchFormReset />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default SearchForm;
