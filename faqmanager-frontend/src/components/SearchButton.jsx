const SearchButton = (props) => {
    return (
        <button className="btn dark-blue w-25" onClick={props.onClick}>{props.name}</button>
    );

};
export default SearchButton;