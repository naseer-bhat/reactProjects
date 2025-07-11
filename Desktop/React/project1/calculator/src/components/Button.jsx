const Button=({button,handleOnClick})=>{
  return(
    <div className="btn">
      <button value={button} onClick={handleOnClick}>{button} </button>
    </div>
  )

}
export default Button 