import React from "react";

function SearchSectionComponent() {
  return (
    <>
      <div className="container">
        <div className="search-background mb-4 p-3">
          <div className="d-flex">
            <input
              type="text"
              className="form-control w-75 me-2 light-blue"
              placeholder="Search..."
            />
            <button className="btn dark-blue w-25">Search</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchSectionComponent;
