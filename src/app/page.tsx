"use client";

import { UIButton } from "@/components/UIButton/UIButton";
import { useRouter } from "next/navigation";
import { BtnTitles } from "@/components/UIButton/common/btnTitles";
import "./page.scss";
import { options } from "@/components/UIOption/common/options";
import { UIOption } from "@/components/UIOption/UIOption";

export default function Home() {
  const router = useRouter();

  const handleBttnClick = () => {
    router.push("/movieform");
  };

  return (
    <main className="main-page">
      <h1 className="main-page__title">Your favorite movie genre?</h1>
      <ul>
        {options.map((option) => (
          <li key={option.id}>
            <UIOption option={option} />
          </li>
        ))}
      </ul>
      <div className="main-page__bttn">
        <UIButton
          btnText={BtnTitles.CONTINUE}
          onBtnClick={handleBttnClick}
          disabled={false}
        />
      </div>
    </main>
  );
}
