import React, { useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import NavBar from "@/components/navigation/NavBar";
import MobileBar from "@/components/navigation/MobileBar";
import FloatBar from "@/components/navigation/FloatBar";
import Backgrounds from "@/components/background/Backgrounds";
import Footer from "@/components/footer/Footer";

const AppLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="static">
      <NavBar handleSidebar={handleSidebar} />
      <MobileBar isOpen={isOpen} handleSidebar={handleSidebar} />
      <FloatBar />
      {!isOpen && (
        <>
          <SectionWrapper>{children}</SectionWrapper>
          {/* <Footer /> */}
          <Backgrounds />
        </>
      )}
    </div>
  );
};

export default AppLayout;
