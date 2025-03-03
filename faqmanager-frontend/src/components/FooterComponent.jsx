const FooterComponent = () => {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="24">
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">
              copyright @iLabs, All Rights Reserved
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">@ Privacy Policy</li>
            <li className="ms-3">Terms of Service</li>
            <li className="ms-3">Help Center</li>
          </ul>
        </footer>
      </div>
    </>
  );
};
export default FooterComponent;
