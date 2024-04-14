import { IOption } from "@/types/IOption";
import cn from "classnames";
import "./UIOption.scss";

export const UIOption = ({
  option,
  onOptionClick,
  selectedOption,
}: {
  option: IOption;
  onOptionClick: (id: number) => void;
  selectedOption: number;
}) => {
  return (
    <label
      className={cn("ui-option", {
        "ui-option--selected": selectedOption === option.id,
      })}
      onClick={() => onOptionClick(option.id)}
    >
      <div className="ui-option__content">
        <span>{option.emoji}</span>
        <span className="ui-option__title">{option.title}</span>
      </div>
      <div
        className={cn("ui-option__checkbox", {
          "ui-option__checkbox--checked": selectedOption === option.id,
        })}
      />
    </label>
  );
};
