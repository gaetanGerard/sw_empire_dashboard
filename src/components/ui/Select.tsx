import React, { ChangeEvent } from 'react';

// Import Styles
import "../../styles/select.scss";



type SelectProps = {
    options: string[],
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void,
    name: string,
    selected: string
}

const Select = ({options, onChange, name, selected}: SelectProps): JSX.Element => {

    /*
    const formField = event.target.parentNode!.parentNode! as HTMLElement
        if (active && labelActivate) {
          formField!.classList.add('form-field--is-active')
          formField.style.fontFamily = "starwars";
          if(event.target.value === '') {
            formField!.parentNode!.children[1].classList.remove('helperText-hide');
            formField!.parentNode!.children[1].classList.add('helperText-show');
            formField!.parentNode!.children[0].classList.add('form-field--is-empty')
          }
        } else {
            formField.style.fontFamily = "aurebesh";
          formField!.classList!.remove('form-field--is-active')
          formField!.parentNode!.children[1].classList.add('helperText-hide');
          formField!.parentNode!.children[1].classList.remove('helperText-show');
          formField!.parentNode!.children[0].classList.remove('form-field--is-empty')
          if(event.target.value === '') {
            formField!.classList!.remove('form-field--is-filled')
            formField!.parentNode!.children[1].classList.remove('helperText-hide');
            formField!.parentNode!.children[1].classList.add('helperText-show');
            formField!.parentNode!.children[0].classList.add('form-field--is-empty')
          } else {
            formField!.classList!.add('form-field--is-filled')
            formField!.parentNode!.children[1].classList.add('helperText-hide');
            formField!.parentNode!.children[1].classList.remove('helperText-show');
            formField!.parentNode!.children[0].classList.remove('form-field--is-empty')
          }
      }
    }
    */

    return (
        <div className="select-arrow">
            <select name={name} onChange={onChange}>
                {options.map((option, i) => (
                    <option value={option} key={i++}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default Select