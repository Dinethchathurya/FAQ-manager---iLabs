import TableDataDropDown from "./TableDataDropDown";

const TableRow = (props) => {
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.question}</td>
                <td>{props.category}</td>
                <td>
                <span className="badge status light-green">{props.status}</span>
                </td>
                <TableDataDropDown />
            
            </tr>
        </>
    );
};
export default TableRow;