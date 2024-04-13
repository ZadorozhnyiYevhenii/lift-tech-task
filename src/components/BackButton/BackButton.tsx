"use client";

import { BackIcon } from "@/assets/back-btn";
import { usePathname, useRouter } from "next/navigation";
import "./BackButton.scss";

export const BackButton = () => {
  const router = useRouter();
  const pathName = usePathname();

  const handleBack = () => {
    pathName !== "/" ? router.back() : null;
  };

  return (
    <button onClick={handleBack} className="back-btn">
      <BackIcon color={pathName === "/" ? "#d5e5e1" : "#212121"} />
    </button>
  );
};
