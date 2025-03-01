import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const TableComponent = () => {

  const TableHeadList = [
    "#",
    "Question",
    "Category",
    "Status",
    "Action",
  ];

  return (

    <>
      <table className="table rounded-3 overflow-hidden mb-0 table-responsive">
        <thead>

          <tr className="">
            {TableHeadList.map((item, index) => (
              <TableHead 
                key={index} 
                value={item} 
                />
            ))}
          </tr>

        </thead>
        <tbody>
          <TableRow 
            id = "1"
            question = "What is the vision of iLabs?"
            category = "About Company"
            status = "Published"

          />
          <tr>
            <td>2</td>
            <td>What is the mission of iLabs?</td>
            <td>About Company</td>
            <td>
              <span className="badge status light-green">Published</span>
            </td>
            <td>
              <div className="dropdown">
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      View
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Deactivate
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-danger" href="#">
                      Delete
                    </a>
                  </li>
                </ul>
                ...
              </div>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>When was iLabs established?</td>
            <td>About Company</td>
            <td>
              <span className="badge text-dark status light-gray">Draft</span>
            </td>
            <td>
            <div className="dropdown">
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      View
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Deactivate
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-danger" href="#">
                      Delete
                    </a>
                  </li>
                </ul>
                ...
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default TableComponent;