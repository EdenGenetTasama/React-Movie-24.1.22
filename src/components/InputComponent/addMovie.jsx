import InputGenres from "./input";


const AddMovie = () => {
  const arrayOfObj = [
      {title:"titleOne" , name :"NameOne" , type:"text" , placeholder:"First"},
      {title:"titleTwo" , name :"NameTwo" , type:"number", placeholder:"Second"},
      {title:"titleThree" , name :"NameThree" , type:"Date", placeholder:"Third"},
      {title:"titleFour" , name :"NameFour" , type:"text", placeholder:"Fourth"},

    ];
  return (<div>
      <form>
          {arrayOfObj.map((item,i)=>{
              return <InputGenres title={item.item} name={item.name} type={item.type} placeholder={item.placeholder}/>
          })}
      </form>
  </div>);
};

export default AddMovie;
