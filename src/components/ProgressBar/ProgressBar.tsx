"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./ProgressBar.scss";

export const ProgressBar = () => {
  const pathName = usePathname();
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    switch (pathName) {
      case "/":
        setPercentage(30);
        break;
      case "/movieform":
        setPercentage(80);
        break;
      case "/quizSuccess" || "/fail":
        setPercentage(100);
        break;
      default:
        break;
    }
  }, [pathName]);

  return (
    <div className="progress">
      <div className="progress__bar">
        <div className="progress__background" />
        <div className="progress__fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};
