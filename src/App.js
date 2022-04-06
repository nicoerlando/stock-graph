import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {useState} from "react";

// import Homepage from "./components/pages/homepage/Homepage";
import Header from "./components/header/header";
import Homepage from "./pages/homepage";
// import Sidebar from "./components/pages/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="" element={<Homepage/>}></Route>
          {/* <Route path="/historica" element={<HistoricalData/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
