import React from "react";
import SideMenu from "./SideMenu";
import MainContent from "./MainContent";
import TopMenu from "./TopMenu";

function App() {
  return <div className="app-container">
   <SideMenu />
   <TopMenu />
   <MainContent />
    </div>;
}

export default App;
