// Components
import FAQ from "./Components/FAQ";
import Header from "./Components/Header";

// Hooks
import { useState } from "react";

// Data
import { faqData as data } from "./data";

const App = () => {
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-poppins ">
      <div className="w-[500px] rounded-xl bg-white shadow-lg">
        <Header />
        <FAQ/>
      </div>
    </div>
  );
};

export default App;
