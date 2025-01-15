export default function DatePickerYearsOrder() {
    const currentDate = new Date();
    const d = currentDate.getDate().toString().padStart(2, '0'); // Ensures day has two digits
    const m = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Ensures month has two digits
    const y = currentDate.getFullYear();

    const min = `${y}-${m}-${d}`;
    const max = `${y + 4}-12-31`;

    return (
        <label htmlFor="date-picker">
            <input
                type="date"
                id="date-picker"
                min={min}
                max={max}
                style={{
                    backgroundColor: 'white',
                    color: 'black',
                    padding: 10,
                    fontSize: 16,
                    width: "25%",
                    borderRadius: 8,
                    border: "none",
                    boxShadow: "0px 7px 46px rgba(0, 0, 0, 0.17)",
                    marginLeft: 8,
                }}
            />
        </label>
    );
}
