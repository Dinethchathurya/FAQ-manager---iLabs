const SearchInputButton = (props) => {
    return (
        <input
            type={props.type}
            className="form-control w-75 me-2 light-blue"
            placeholder={props.placeholder}
        />
    );
};
export default SearchInputButton;