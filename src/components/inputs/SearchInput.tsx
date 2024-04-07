import React from "react";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  action: () => void;
};

const SearchInput = ({ search, setSearch, action }: Props) => {
  return (
    <input
      type="text"
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          action();
        }
      }}
      value={search}
      className="border-2 border-primary p-2 rounded-lg w-full capitalize"
    />
  );
};

export default SearchInput;
