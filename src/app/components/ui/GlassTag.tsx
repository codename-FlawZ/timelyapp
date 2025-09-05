import { FC } from "react";

interface GlassTagProps {
  label: string;
}

const GlassTag: FC<GlassTagProps> = ({ label }) => {
  return (
    <div
      className="
       inline-flex 
       items-center 
       px-4 py-2 
       rounded-full 
       backdrop-blur-xl 
       bg-neutral-300/20 
       shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
       border 
       border-neutral-300/20
       text-sm
       font-semibold
      "
    >
      {label}
    </div>
  );
};

export default GlassTag;