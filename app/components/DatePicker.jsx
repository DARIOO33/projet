"use client"

import { useState } from "react";
import "./components.css"
export default function DatePickerYearsOrder() {
    const currentDate = new Date();
    const d = currentDate.getDate().toString().padStart(2, '0'); // Ensures day has two digits
    const m = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Ensures month has two digits
    const y = currentDate.getFullYear();

    const min = `${y}-${m}-${d}`;
    const max = `${y + 4}-12-31`;
    const [value,setValue] = useState(min)
    return (
        <label htmlFor="date-picker">
            <input
                type="date"
                id="date-picker"
                min={min}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                max={max}
                style={{
                    backgroundColor: 'white',
                    color: 'black',
                    fontSize: 16,
                    borderRadius: 8,
                }}
            />
        </label>
    );
}
