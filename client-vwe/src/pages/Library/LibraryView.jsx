import React from "react";
import Aurora from "../../components/Aurora";

function LibraryView() {
  return (
    <div className="relative min-h-screen">
      <div className="h-full bg-gray-900 absolute w-screen">
        <Aurora className="landing-bg_comp" />
      </div>

      <div className="absolute z-10 p-5 h-screen w-screen overflow-y-scroll">
        
      </div>
    </div>
  );
}

export default LibraryView;
