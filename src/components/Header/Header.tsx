import { BurgerIcon } from "@/assets/burger-menu";
import { BackButton } from "../BackButton/BackButton";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__background" />
      <div className="header__wrap">
        <BackButton />
        <button className="header__menu">
          <BurgerIcon />
        </button>
      </div>
      <ProgressBar />
    </header>
  );
};
