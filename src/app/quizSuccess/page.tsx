"use client";

import { MoviesList } from "@/components/MoviesList/MoviesList";
import { UIButton } from "@/components/UIButton/UIButton";
import { useRouter } from "next/navigation";
import "./page.scss";

export default function QuizSuccessPage() {
  const router = useRouter();

  const handleBtnClick = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <main>
      <MoviesList />

      <div className="successPage__btn">
        <UIButton onBtnClick={handleBtnClick} btnText="Complete" />
      </div>
    </main>
  );
}
