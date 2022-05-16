import React, { ChangeEvent } from 'react';

// Import Styles
import "../../styles/select.scss";



type SelectProps = {
    options: string[],
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void,
    name: string,
    selected: string | null
}

const Select = ({options, onChange, name, selected}: SelectProps): JSX.Element => {
    return (
        <div className="select-arrow">
            <select name={name} onChange={onChange} value={selected ? selected : ''}>
                <option value="NO">Select {name}</option>
                {options.map((option, i) => (
                    <option value={option} key={i++}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default Select