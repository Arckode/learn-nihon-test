import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Hiragana from "./pages/Hiragana";
import Katakana from "./pages/Katakana";
import Sidebar from "./component/Sidebar";
import HiraganaTest from "./pages/HiraganaTest";

function App() {
  return (
    <>
      <section className="flex gap-6 dark:text-gray-100 dark:bg-slate-900 duration-300">
        <Sidebar />
        <div className="text-xl font-semibold w-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/hiragana" element={<Hiragana />} />
            <Route path="/katakana" element={<Katakana />} />
            <Route path="/hiraganaTest" element={<HiraganaTest />} />
          </Routes>
        </div>
      </section>
    </>
  );
}

export default App;
