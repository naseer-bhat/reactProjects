
export default function NewTask({ handleOnChange ,handleOnClick,inputValue}){


  return(<>
   <input type="text" value= {inputValue} onChange={ handleOnChange} />
        <button onClick={handleOnClick}>Add Todo</button>
  </>)
 
}