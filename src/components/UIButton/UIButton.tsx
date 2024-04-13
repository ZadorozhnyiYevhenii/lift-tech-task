import "./UiButton.scss";

export const UIButton = ({
  btnText,
  onBtnClick,
  disabled,
}: {
  btnText: string;
  onBtnClick: () => void;
  disabled: boolean;
}) => {
  return (
    <button
      className={`ui-button ${disabled ? "ui-button--disabled" : null}`}
      onClick={onBtnClick}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};
