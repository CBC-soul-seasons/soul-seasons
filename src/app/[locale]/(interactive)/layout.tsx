import InteractiveBackground from "@/components/interactive-background";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen overscroll-none">
      <InteractiveBackground />
      {children}
    </div>
  );
};

export default RootLayout;
