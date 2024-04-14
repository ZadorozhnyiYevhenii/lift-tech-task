"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { BtnTitles } from "@/components/UIButton/common/btnTitles";
import { options } from "@/components/UIOption/common/options";
import { useLocalStorage } from "@/hooks/useLocalStorage";
const UIOption = dynamic(
  () =>
    import("@/components/UIOption/UIOption").then((module) => module.UIOption),
  {
    ssr: false,
  }
);
const UIButton = dynamic(
  () =>
    import("@/components/UIButton/UIButton").then((module) => module.UIButton),
  {
    ssr: false,
  }
);
import "./page.scss";
import { StorageKeys } from "@/constants/localStorageKeys";

export default function Home() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useLocalStorage<number | null>(
    StorageKeys.GENRE,
    null
  );

  const handleBttnClick = () => {
    const currentOption = options.find(
      (option) => option.id === selectedOption
    );
    localStorage.setItem("genre", JSON.stringify(currentOption?.id));
    router.push("/movieform");
  };

  const handleSelectOption = (id: number) => {
    setSelectedOption(id);
  };

  return (
    <main className="main-page">
      <div className="main-page__wrapper">
        <h1 className="main-page__title">Your favorite movie genre?</h1>
        <ul className="main-page__list">
          {options.map((option) => (
            <li key={option.id} className="main-page__item">
              <UIOption
                option={option}
                onOptionClick={handleSelectOption}
                selectedOption={selectedOption}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="main-page__bttn">
        <UIButton
          btnText={BtnTitles.CONTINUE}
          onBtnClick={handleBttnClick}
          disabled={!selectedOption}
        />
      </div>
    </main>
  );
}
