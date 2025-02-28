import React from "react";

const FooterComponent = () => {
  return (
    <>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg class="bi" width="30" height="24">
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>
            <span class="mb-3 mb-md-0 text-body-secondary">
              copyright @iLabs, All Rights Reserved
            </span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">@ Privacy Policy</li>
            <li class="ms-3">Terms of Service</li>
            <li class="ms-3">Help Center</li>
          </ul>
        </footer>
      </div>
    </>
  );
};
export default FooterComponent;
