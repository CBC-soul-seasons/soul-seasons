"use client";
import { useEffect, ChangeEventHandler } from "react";

type Props = {
  placeholder: string;
  name: string;
  setName: (value: string) => void;
};

const maxCount = 25; // Maximum character count

const NameInput: React.FC<Props> = ({ placeholder, name, setName }) => {
  useEffect(() => {
    localStorage.setItem("importantPerson", name);
  }, [name]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value.length <= maxCount) {
      setName(e.target.value);
    }
  };

  return (
    <input
      value={name}
      onChange={handleChange}
      className="font-kanit text-[18px] font-bold w-[205px] h-[41px] rounded-[12px] px-5 opacity-70 placeholder:font-light"
      type="text"
      placeholder={placeholder}
    />
  );
};

export default NameInput;
