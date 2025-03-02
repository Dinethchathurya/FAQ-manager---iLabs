import { useDispatch } from "react-redux";
import { deleteQuestion } from "../redux/faqSlice";

const TableDataDropDown = (props)=> {

    const dispatch = useDispatch();

    function deleteThis() {
        dispatch(deleteQuestion(props.id));
    }

    return (
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
                    <a className="dropdown-item text-danger" onClick={deleteThis} href="#">
                    Delete
                    </a>
                </li>
            </ul>
            ...
        </div>
    );

};
export default TableDataDropDown;