"use client";

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
      className={`ui-button ${disabled ? "ui-button--disabled" : ""}`}
      onClick={onBtnClick}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};
