"use client";
import { useEffect, ChangeEventHandler } from "react";

type Props = {
  placeholder: string;
  name: string;
  setName: (value: string) => void;
};

const NameInput: React.FC<Props> = ({ placeholder, name, setName }) => {
  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  return (
    <input
      value={name}
      onChange={handleChange}
      maxLength={25} // User cannot type more than 25 characters
      className="font-kanit text-[18px] font-bold w-[205px] h-[41px] rounded-[12px] px-5 leading-[41px] opacity-70 placeholder:font-light"
      type="text"
      placeholder={placeholder}
    />
  );
};

export default NameInput;
