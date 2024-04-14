"use client";

import { MoviesList } from "@/components/MoviesList/MoviesList";
import { UIButton } from "@/components/UIButton/UIButton";
import { useRouter } from "next/navigation";
import { useFetchMovies } from "@/hooks/useFetchMovies";
import { ErrorFindMovies } from "@/components/ErrorFindMovies/ErrorFindMovies";
import "./page.scss";

export default function QuizSuccessPage() {
  const { movies, loading, errorLoading } = useFetchMovies();
  const router = useRouter();

  const handleBtnClick = () => {
    localStorage.clear();
    router.replace("/");
  };

  return (
    <main>
      <MoviesList movies={movies} loading={loading} />

      {errorLoading && <ErrorFindMovies />}

      {!errorLoading && (
        <div className="successPage__btn">
          <UIButton onBtnClick={handleBtnClick} btnText="Complete" />
        </div>
      )}
    </main>
  );
}
