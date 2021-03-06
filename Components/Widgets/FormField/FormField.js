import React from "react";
import { formFieldStyles } from "./formFieldStyles";
import uuid from "uuid/v1";
const FormField = ({
  element,
  readOnly,
  errorMessage,
  handleChange,
  id,
  name,
  placeholder,
  touched,
  valid,
  validationRules,
  rows,
  cols,
  value,
  styles,
  options,
  type,
  labelText,
  onkeyDown,
  disabled,
  parentStyles
}) => {
  switch (element) {
    case "textarea":
      return (
        <div className="formFieldGroup" style={{ ...parentStyles }}>
          <style jsx>{formFieldStyles}</style>
          <textarea
            readOnly={readOnly || false}
            placeholder={placeholder}
            value={value}
            onChange={e => handleChange(e, id)}
            onKeyDown={onkeyDown}
            name={name}
            className={
              !valid && touched ? "formField invalidField" : "formField"
            }
            rows={rows}
            cols={cols}
            style={{ ...styles }}
          ></textarea>
          <div className="errorMsg">
            {!valid && touched ? errorMessage : ""}
          </div>
        </div>
      );

    case "input":
      return (
        <div className="formFieldGroup" style={{ ...parentStyles }}>
          <style jsx>{formFieldStyles}</style>
          <input
            disabled={disabled || false}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={e => handleChange(e, id)}
            onKeyDown={onkeyDown}
            name={name}
            className={
              !valid && touched
                ? "formField invalidField"
                : disabled
                ? "disabledInput formField"
                : "formField"
            }
            style={{ ...styles }}
          />
          <div className="errorMsg">
            {!valid && touched ? errorMessage : ""}
          </div>
        </div>
      );

    case "select":
      return (
        <div className="formFieldGroup" style={{ ...parentStyles }}>
          <style jsx>{formFieldStyles}</style>
          <select
            value={value}
            onChange={e => handleChange(e, id)}
            name={name}
            className={
              !valid && touched ? "formField invalidField" : "formField"
            }
            style={{ ...styles }}
          >
            {renderSelectOptions(options, placeholder, id)}
          </select>
        </div>
      );

    case "checkbox":
      return (
        <div className="formFieldGroup">
          <label className="form-check-label" htmlFor={id}>
            <input
              type="checkbox"
              value={value}
              onChange={e => handleChange(e, id)}
              id={id}
              style={{
                height: "1.01rem",
                width: "1.01rem",
                verticalAlign: "middle"
              }}
            />
            <label htmlFor={id} className="ml-2">
              {labelText}
            </label>
          </label>
        </div>
      );
    default:
      return null;
  }
};

const renderSelectOptions = (options, placeholder, id) => {
  let optionsToRender = options.map(option => (
    <option value={option.value} key={uuid()}>
      {option.name}
    </option>
  ));
  optionsToRender = [
    <option value="" key={uuid()}>
      {placeholder}
    </option>,
    ...optionsToRender
  ];
  return optionsToRender;
};

export default FormField;
