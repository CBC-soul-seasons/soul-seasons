import React from "react";

interface MessageBoxProps {
  message: React.ReactNode; // Accepts JSX, including bold text
  size?: string; // Optional className for customization
  BoxPadding?: string;
}

const MessageBox: React.FC<MessageBoxProps> = ({
  message,
  size,
  BoxPadding,
}) => {
  return (
    <div className={`flex justify-center items-center  ${size || ""}`}>
      <div
        className={`w-full h-full opacity-70 bg-white flex items-center justify-center rounded-lg ${BoxPadding || ""}`}
      >
        <div className="text-center relative">{message}</div>
      </div>
    </div>
  );
};

export default MessageBox;
