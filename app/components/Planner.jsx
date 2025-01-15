import DatePickerYearsOrder from "./DatePicker"
import CountryPicker from "./CountryPicker"
import PrimaryButton from "./PrimaryButton"

export default (params) => {
  return (
    <div className="planning-informations">
        <div className="inputs">


        <CountryPicker/>

         <DatePickerYearsOrder/>
        </div>
        <PrimaryButton/>
      </div>
  )
}
