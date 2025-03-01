const TableDataDropDown = ()=> {

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
                    <a className="dropdown-item text-danger" href="#">
                    Delete
                    </a>
                </li>
            </ul>
            ...
        </div>
    );

};
export default TableDataDropDown;