import { customBtnProps } from "@/types";
import { Button } from "@mui/material";

const CustomBtn = ({ children, className }: customBtnProps) => {
  return (
    <Button
      className={`bg-teal-700 text-white px-7 py-2 hover:bg-black ${className}`}
    >
      {children}
    </Button>
  );
};

export default CustomBtn;
