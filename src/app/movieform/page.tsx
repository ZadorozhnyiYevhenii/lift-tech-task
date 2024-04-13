"use client";

import { UIButton } from "@/components/UIButton/UIButton";
import { BtnTitles } from "@/components/UIButton/common/btnTitles";
import { useRouter } from "next/navigation";

export default function MovieFormPage() {
  const router = useRouter();

  const handleBtnClick = () => {
    router.push("/quizSuccess");
  };

  return (
    <main>
      <div>
        <UIButton
          onBtnClick={handleBtnClick}
          disabled={false}
          btnText={BtnTitles.CONTINUE}
        />
      </div>
    </main>
  );
}
