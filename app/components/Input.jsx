"use client"

export default ({label,type,placeholder}) => {
 return (
  <div className="inputContainer">
          <label htmlFor="">{label} :</label>
      
      
  <input
      className="max-w-xs"
      label={label}
      placeholder={placeholder}
      type={type}
      variant="bordered"
    />
  </div>  
 ) 
}
