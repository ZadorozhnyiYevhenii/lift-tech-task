import { IOption } from "@/types/IOption";

export const UIOption = ({
  option
}: {
  option: IOption
}) => {
  return (
    <label>
      {option.title}
    </label>
  );
};