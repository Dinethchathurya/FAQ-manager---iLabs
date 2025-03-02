import TableDataDropDown from "./TableDataDropDown";

const TableRow = ({ id, question, category, status }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{question}</td>
      <td>{category}</td>
      <td>
        <span className={`badge ${status === "Published" ? "light-green" : "light-gray"}`}>
          {status}
        </span>
      </td>
      <td>
        <TableDataDropDown 
          id = {id}
        /> 
      </td>
    </tr>
  );
};

export default TableRow;