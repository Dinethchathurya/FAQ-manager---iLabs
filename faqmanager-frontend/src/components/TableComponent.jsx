import React from "react";

const TableComponent = () => {
  return (
    <>
      <table className="table rounded-3 overflow-hidden mb-0 table-responsive">
        <thead>
          <tr className="">
            <th className="fw-normal">#</th>
            <th className="fw-normal">Question</th>
            <th className="fw-normal">Category</th>
            <th className="fw-normal">Status</th>
            <th className="fw-normal">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>What is the vision of iLabs?</td>
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