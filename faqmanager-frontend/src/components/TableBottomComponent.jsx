const TableBottomComponent = () => {
  return (
    <>
      <div className="d-flex justify-content-end bg-light p-3 rounded-bottom gap-4">
        <span>Rows per page:</span>
        <select className="form-select w-auto light-blue page-number">
          <option>5</option>
          <option>10</option>
          <option>15</option>
        </select>
        <span>1-3 of 3</span>
        <div>
          <button type="button" class="btn ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="gray"
              class="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              ></path>
            </svg>
          </button>
          <button type="button" class="btn ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="gray"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
export default TableBottomComponent;