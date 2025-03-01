function Header() {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 ">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span className="fs-4">FAQ manager - iLabs</span>
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" aria-current="page">
                <button
                  type="button"
                  className="btn  shadow-custom add-question-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#4350AF"
                    className="bi bi-plus-circle-fill me-2 "
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
    </>
  );
}
export default Header;