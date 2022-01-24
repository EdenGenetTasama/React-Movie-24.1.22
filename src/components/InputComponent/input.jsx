

const InputGenres=(props)=>{
    const {title, name,type, placeholder } = props;
    const mystyle = {
        width: "100%",
        fontSize:"25px",
        padding:" 12px 20px",
        margin: "8px 0",
        display:" inline-block",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        color:"blue"
      };
    return(
        <div>
            <input title={title} name={name} type={type} placeholder={placeholder} style={mystyle}/>
        </div>
    )
}

export default InputGenres