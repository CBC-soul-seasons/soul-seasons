import { ChangeEvent } from "react";
import { Textarea } from "./textarea";
import { cn } from "@/lib/utils";

export const TextareaWithCounter = ({
  onChange,
  value,
  maxCount,
  className,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  maxCount?: number;
  className?: string;
}) => {
  return (
    <div className={cn(className, "relative")}>
      <Textarea
        className=" bg-white border-none rounded-xl h-full resize-none text-lg font-light py-2 px-4 focus-visible:ring-primaryblue"
        onChange={(e) => {
          if (!maxCount || e.target.value.length <= maxCount) {
            onChange(e);
          }
        }}
        value={value}
      />
      {maxCount ? (
        <div className="absolute bottom-1 right-3 text-[#8E8E93] text-lg font-light">
          {value.length}/{maxCount}
        </div>
      ) : null}
    </div>
  );
};
