"use client";

import dynamic from "next/dynamic";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { BtnTitles } from "@/components/UIButton/common/btnTitles";
import { useRouter } from "next/navigation";
import { StorageKeys } from "@/constants/localStorageKeys";
const UIButton = dynamic(
  () =>
    import("@/components/UIButton/UIButton").then((module) => module.UIButton),
  {
    ssr: false,
  }
);
const UIInput = dynamic(
  () => import("@/components/UIInput/UIInput").then((module) => module.UIInput),
  {
    ssr: false,
  }
);
import "./page.scss";

export default function MovieFormPage() {
  const router = useRouter();
  const [movieName, setMovieName] = useLocalStorage(StorageKeys.MOVIE_NAME, "");
  const [error, setError] = useLocalStorage(StorageKeys.MOVIE_TITLE_ERROR, "");

  const handleBtnClick = () => {
    router.push("/quizSuccess");
  };

  const handleMovieChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setMovieName(name);

    name.trim().length >= 3 && !(name.trim().match(/[a-zA-Z]/g) || []).length
      ? setError("Error text")
      : setError("");
  };

  return (
    <main className="movieForm-page">
      <div className="movieForm-page__wrapper">
        <h1 className="movieForm-page__title">Enter movie title</h1>

        <UIInput
          value={movieName}
          onChange={handleMovieChange}
          error={error}
          placeholder="Movie title here"
        />
      </div>

      <div className="movieForm-page__btn">
        <UIButton
          onBtnClick={handleBtnClick}
          disabled={!!error || movieName.trim().length <= 3}
          btnText={BtnTitles.CONTINUE}
        />
      </div>
    </main>
  );
}
