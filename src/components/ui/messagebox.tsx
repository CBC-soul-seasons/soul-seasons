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
    <div className={`flex justify-center items-center ${size || ""}`}>
      {/* Use bg-white/70 for a 70% opaque background */}
      <div className={`w-full h-full bg-white/70 flex items-center justify-center rounded-lg ${BoxPadding || ''}`}>
        <div className="text-center relative z-3 opacity-100">{message}</div>
      </div>
    </div>
  );
};

export default MessageBox;
