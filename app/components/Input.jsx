"use client"
import "../contact/contact.css"
export default ({ setValue, value, label, type, placeholder }) => {
  return (
    <div className="inputContainer form-group">
      <label htmlFor="">{label} :</label>


      <input
        className="max-w-xs"
        label={label}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
    </div>
  )
}
