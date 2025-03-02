const AuthInputField = (props) => { 
    return (
        <>
            <input
                type={props.type}
                className="form-control"
                id={props.id}
                placeholder={props.placeholder}
              />
        
        </>
    );
 };

 export default AuthInputField;