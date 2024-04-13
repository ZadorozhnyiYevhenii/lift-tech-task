"use client";

import { useState } from "react";
import { UIButton } from "@/components/UIButton/UIButton";
import { useRouter } from "next/navigation";
import { BtnTitles } from "@/components/UIButton/common/btnTitles";
import { options } from "@/components/UIOption/common/options";
import { UIOption } from "@/components/UIOption/UIOption";
import "./page.scss";

export default function Home() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<number | null>(
    typeof window !== "undefined" && localStorage.getItem("genre")
      ? JSON.parse(localStorage.getItem("genre") as string)
      : null
  );

  const handleBttnClick = () => {
    if (selectedOption !== null) {
      const currentOption = options.find(
        (option) => option.id === selectedOption
      );
      localStorage.setItem("genre", JSON.stringify(currentOption?.id));
      router.push("/movieform");
    }
  };

  const handleSelectOption = (id: number) => {
    setSelectedOption(id);
  };

  return (
    <main className="main-page">
      <h1 className="main-page__title">Your favorite movie genre?</h1>
      <ul className="main-page__list">
        {options.map((option) => (
          <li key={option.id} className="main-page__item">
            <UIOption
              option={option}
              onOptionClick={handleSelectOption}
              isSelected={selectedOption === option.id}
            />
          </li>
        ))}
      </ul>
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
