"use client";

import cn from "classnames";
import "./UIInput.scss";

export const UIInput = ({
  inputType = "text",
  value,
  onChange,
  error,
  placeholder,
}: {
  inputType?: "text" | "email" | "password";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  placeholder: string;
}) => {
  return (
    <label className="ui-input">
      <input
        type={inputType}
        className="ui-input__input"
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
      />
      {error && (
        <span
          className={cn("ui-input__error", {
            "ui-input__error--active": !!error,
          })}
        >
          {error}
        </span>
      )}
    </label>
  );
};
