import React, { useState } from "react";
import s from "./Input.module.scss";
import { FieldValues, UseFormRegister } from "react-hook-form";

type InputType = {
  label: string;
  type: string;
  icon?: string;
  placeholder?: string;
  error?: string;
  altForIcon?: string;
  register: UseFormRegister<FieldValues>;
  nameForValidate: string;
};

export const Input: React.FC<InputType> = React.memo(
  ({ type, label, icon, placeholder, error, altForIcon, register, nameForValidate }) => {
    const [typeInput, setTypeInput] = useState<string>(type);
    const showPasswordHandler = () => {
      typeInput === "password"
        ? setTypeInput("text")
        : setTypeInput("password");
    };
    
    
    
    return (
      <label className={s.labelInput}>
        {label}
        <input
          {...register(nameForValidate)}
          className={error ? `${s.input} ${s.errorInput}` : s.input}
          type={typeInput}
          placeholder={placeholder}
        />
        {icon && (
          <img
            onClick={showPasswordHandler}
            className={s.iconShowPassword}
            src={icon}
            alt={altForIcon}
          />
        )}
        {error && <div className={s.errorText}>{error}</div>}
      </label>
    );
  }
);


