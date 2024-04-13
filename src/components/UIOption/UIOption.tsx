'use client'

import { IOption } from "@/types/IOption";
import "./UIOption.scss";

export const UIOption = ({
  option,
  onOptionClick,
  isSelected,
}: {
  option: IOption;
  onOptionClick: (id: number) => void;
  isSelected: boolean;
}) => {
  return (
    <label
      className={`ui-option ${isSelected ? "ui-option--selected" : ''}`}
      onClick={() => onOptionClick(option.id)}
    >
      <div className="ui-option__content">
        <span>{option.emoji}</span>
        <span className="ui-option__title">{option.title}</span>
      </div>
      <div
        className={`ui-option__checkbox ${
          isSelected ? "ui-option__checkbox--checked" : ''
        }`}
      />
    </label>
  );
};
