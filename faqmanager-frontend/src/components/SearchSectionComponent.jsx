import SearchButton from "./SearchButton";
import SearchInputButton from "./SearchInputButton";

function SearchSectionComponent() {
  return (
    <>
      <div className="container">
        <div className="search-background mb-4 p-3">
          <div className="d-flex">
            <SearchInputButton 
              type="text" 
              placeholder="Search..." 
            />

            <SearchButton 
              name="Search" 
            />

          </div>
        </div>
      </div>
    </>
  );
}
export default SearchSectionComponent;
