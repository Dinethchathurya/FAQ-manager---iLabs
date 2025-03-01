import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { useDispatch, useSelector } from "react-redux";
import { fetchFaqs } from "../redux/faqSlice";
import { useEffect } from "react";

const TableComponent = () => {

  const TableHeadList = [
    "#",
    "Question",
    "Category",
    "Status",
    "Action",
  ];

  const dispatch = useDispatch();
  const { data: faqList, status, error } = useSelector((state) => state.faq); // Get FAQs from Redux store

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchFaqs()); // Fetch FAQs when the component mounts
    }
  }, [status, dispatch]);

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
          {status === "loading" && (
            <tr>
              <td colSpan="5">Loading...</td>
            </tr>
          )}
          {error && (
            <tr>
              <td colSpan="5">Error: {error}</td>
            </tr>
          )}
          {faqList.length > 0 &&
            faqList.map((faq) => (
              <TableRow
                key={faq.id} 
                id={faq.id}
                question={faq.question}
                category={faq.categoryId?.category || "N/A"}
                status={faq.status}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};
export default TableComponent;