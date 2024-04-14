import Image from "next/image";
import failed from "../../assets/falied-pic.png";
import "./ErrorFindMovies.scss";

export const ErrorFindMovies = () => {
  return (
    <div className="error-find">
      <Image src={failed} alt="Error find movies" className="error-find__img" />
      <h1 className="error-find__title">Oops, no movie found</h1>
    </div>
  );
};
