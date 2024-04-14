"use client";

import cn from 'classnames';
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
      className={cn('ui-button', {"ui-button--disabled": disabled})}
      onClick={onBtnClick}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};
