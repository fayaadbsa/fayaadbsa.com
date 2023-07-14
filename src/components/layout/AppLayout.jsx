import React, { useState } from "react";
import NavBar from "@/components/navigation/NavBar";
import MobileBar from "@/components/navigation/MobileBar";
import FloatBar from "@/components/navigation/FloatBar";
import Backgrounds from "@/components/background/Backgrounds";
import Footer from "@/components/footer/Footer";
import clsx from "clsx";

const AppLayout = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <NavBar handleSidebar={handleSidebar} />
      <MobileBar isOpen={isOpen} handleSidebar={handleSidebar} />
      <FloatBar />
      <div
        className={clsx(
          `max-w-8xl mx-auto py-32 px-4 md:px-16 xl:px-32`,
          className
        )}
      >
        {children}
      </div>
      {/* <Footer /> */}
      <Backgrounds />
    </div>
  );
};

export default AppLayout;
