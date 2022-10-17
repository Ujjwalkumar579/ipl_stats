/* eslint-disable react/jsx-pascal-case */

import "./App.css";
import Tab_Switch from "./components/Tabs/Tab_Switch";
import { Routes, Route } from "react-router-dom";
import Match_Detail from "./components/match_detail/Match_Detail";
import { useState } from "react";
// console.log(data);
function App() {
  // window.addEventListener('scroll', () => {
  //   console.log("scrolled");
  // })
  const [matchDetail, setMatchDerail] = useState({})
  return (
    <div className="App">
      <Tab_Switch />
      {/* <Routes>
        <Route path="/" element={<Tab_Switch matchDetail={matchDetail} setMatchDerail={setMatchDerail} />} />
        <Route path="/match_detail" element={<Match_Detail matchDetail={matchDetail} />} />
      </Routes> */}
    </div>
  );
}

export default App;
