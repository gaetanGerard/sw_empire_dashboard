import React, { ChangeEvent } from 'react'

// Import Styles
import "../../styles/inputText.scss";

type InputTextProps = {
    label: string,
    errorMsg?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type: string,
    name: string,
    className?: string,
    FCClassname?: string,
    value?: string,
    labelActivate?: boolean
  }

const Input = ({label, errorMsg, onChange, type, name, className, value, FCClassname, labelActivate}: InputTextProps): JSX.Element => {

    const setActive = (active: boolean, event?: any) => {
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

    if(labelActivate === undefined) labelActivate = true;

    return (
        <div className="form-container">
            <div className="form-field">
                <div className={`form-field-control ${FCClassname ? FCClassname : ""}`}>
                    {labelActivate ? <label htmlFor={name} className="form-field-label">{label}</label> : null}
                    <input id={name} type={type ? type : "text"} defaultValue={value ? value : ""} name={name} className={`form-field-input ${className ? className : ""}`} onChange={e => onChange(e)} onBlur={el => setActive(false, el)} onFocus={el => setActive(true, el)} />
                </div>
            </div>
            <p className="helperText helperText-hide">{errorMsg}</p>
        </div>
    )
}

export default Input