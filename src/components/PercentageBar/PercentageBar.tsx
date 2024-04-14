"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const PercentageBar = () => {
  const pathName = usePathname();
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    switch (pathName) {
      case "/":
        setPercentage(10);
        break;
      case "/movieform":
        setPercentage(10);
        break;
      case "/quizSuccess" || "/fail":
        setPercentage(100);
        break;
      default:
        break;
    }
  }, [pathName]);

  return <span>{percentage}%</span>;
};
