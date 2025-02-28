import { useState } from "react";

function App() {
  return (
    <>
      <div className="container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg class="bi me-2" width="40" height="32">
              <use xlink:href="#bootstrap"></use>
            </svg>
            <span class="fs-4">FAQ manager - iLabs</span>
          </a>

          <ul class="nav nav-pills">
            <li class="nav-item">
              <a href="#"  aria-current="page">
                <button type="button" class="btn  shadow-custom">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-plus-circle-fill me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"></path>
                  </svg>
                  Add New Question
                </button>
              </a>
            </li>
          </ul>
        </header>
      </div>
      <div className="container">
        <div>
          <div className="d-flex justify-content-between mb-3">
            <input
              type="text"
              className="form-control w-50"
              placeholder="Search..."
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>

        <div className="d-flex justify-content-end mb-3">
          <button className="btn btn-primary">+ Add New Question</button>
        </div>

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
