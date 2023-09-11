// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

function HiraganaTest() {
  const location = useLocation();
  const hiragana = location.state.details;

  // const hiragana = Object.entries(location.state.details);
  // console.log(hiragana[0]);
  // const test = [];
  // for (const entry of Array.prototype.values.call(hiragana)) {
  //   console.log(entry["hiragana"]);
  //   test.push({ hiragana: entry["hiragana"], romanji: entry["romanji"] });
  // }
  // if (location.state.id == 1) {
  //   hiragana.push({ romanji: "bb", hieagana: "bb" });
  // }

  console.log(hiragana);

  // const [input, setInput] = useState("");
  // const [current, setCurrent] = useState(0);

  // const [streak, setStreak] = useState(0);
  // const [maxStreak, setMaxStreak] = useState(0);

  // const [error, setError] = useState(false);

  // const setRandomHiragana = () => {
  //   const randomIndex = Math.floor(Math.random() * hiragana.length);
  //   setCurrent(randomIndex);
  // };

  // const handleChange = (e) => {
  //   setInput(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (input.toLowerCase() === hiragana[current].romanji) {
  //     setStreak(streak + 1);
  //     setMaxStreak(streak + 1 > maxStreak ? streak + 1 : maxStreak);
  //     setError(false);

  //     localStorage.setItem("streak", streak + 1);
  //     localStorage.setItem(
  //       "maxStreak",
  //       streak + 1 > maxStreak ? streak + 1 : maxStreak
  //     );
  //   } else {
  //     const h = hiragana[current].hiragana;
  //     const r = hiragana[current].romanji;
  //     setError(`Wrong! The correct answer for ${h} is ${r}`);
  //     setStreak(0);
  //     localStorage.setItem("streak", 0);
  //   }

  //   setInput("");
  //   setRandomHiragana();
  // };

  // useEffect(() => {
  //   setRandomHiragana();
  //   setStreak(parseInt(localStorage.getItem("streak")) || 0);
  //   setMaxStreak(parseInt(localStorage.getItem("maxStreak")) || 0);
  //   console.log("a");
  // }, []);
  return (
    <>
      {/* <div className="text-center min-h-screen flex flex-col justify-center">
        <header className="p-6 mb-8">
          <h1 className="text-4xl font-bold uppercase">Hiragana Quiz</h1>
          <div>
            <p>
              Streak {streak} / {maxStreak}
              Streak {streak}, Keep It Up!
            </p>
          </div>
        </header>

        <div className="text-9xl font-bold mb-8">
          <p>{hiragana[current].hiragana}</p>
        </div>

        <div className="mb-8">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleChange}
              value={input}
              className="block w-24 bg-transparent border-b-2 border-b-black dark:border-b-white mx-auto outline-none text-center text-6xl pb-2"
            />
          </form>
        </div>
        {error && (
          <div>
            <p>{error}</p>
          </div>
        )}
      </div> */}
    </>
  );
}

export default HiraganaTest;
