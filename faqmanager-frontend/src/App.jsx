import { useState } from "react";
import Header from "./components/Header";
import SearchSectionComponent from "./components/SearchSectionComponent";

function App() {
  return (
    <>
      <Header />
      <SearchSectionComponent/>
      <div className="container">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Question</th>
              <th>Category</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>What is the vision of iLabs?</td>
              <td>About Company</td>
              <td>
                <span className="badge bg-success">Published</span>
              </td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Actions
                  </button>
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
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>What is the mission of iLabs?</td>
              <td>About Company</td>
              <td>
                <span className="badge bg-success">Published</span>
              </td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Actions
                  </button>
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
                </div>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>When was iLabs established?</td>
              <td>About Company</td>
              <td>
                <span className="badge bg-warning text-dark">Draft</span>
              </td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Actions
                  </button>
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
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="d-flex justify-content-between">
          <span>Rows per page:</span>
          <select className="form-select w-auto">
            <option>5</option>
            <option>10</option>
            <option>15</option>
          </select>
          <span>1-3 of 3</span>
        </div>
      </div>
    </>
  );
}

export default App;
