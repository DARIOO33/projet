import DatePickerYearsOrder from "./DatePicker"
import CountryPicker from "./CountryPicker"
import PrimaryButton from "./PrimaryButton"
import Searchbutton from "./Searchbutton"

export default (params) => {
  return (
    <form className="planning-informations">
      <h1>
        Complete The Informations :
      </h1>
        <div className="inputs">


        <CountryPicker/>
        <DatePickerYearsOrder/>
        </div>
        <Searchbutton/>
      </form>
  )
}
