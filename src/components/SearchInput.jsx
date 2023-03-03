import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      console.log(searchTerm);
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };
  return (
    <div>
      <div className="flex border rounded-[2rem] p-2">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="bg-transparent text-md w-50 md:w-60 lg:w-96 h-[15px] lg:h-[30px] outline-none border-none"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchInput;
