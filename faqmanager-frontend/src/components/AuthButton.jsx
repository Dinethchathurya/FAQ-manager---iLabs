const AuthButton = (props) => {
    return (
        <>
            <button className="btn btn-primary w-100 py-2" type="submit">
              {props.text}
            </button>
        </>
    );
};
export default AuthButton;