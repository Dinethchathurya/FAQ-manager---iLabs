import SearchButton from "./SearchButton";
import SearchInputButton from "./SearchInputField";
import { useDispatch, useSelector } from "react-redux";
import { filterQuestions } from "../redux/faqSlice";
import { useState } from "react";

function SearchSectionComponent() {

  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  
  
  return (
    <>
      <div className="container">
        <div className="search-background mb-4 p-3">
          <div className="d-flex">
            <SearchInputButton 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <SearchButton 
              name="Search" 
              onClick={() => dispatch(filterQuestions(searchQuery))}
            />

          </div>
        </div>
      </div>
    </>
  );
}
export default SearchSectionComponent;
