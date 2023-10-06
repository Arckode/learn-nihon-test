// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useState, useEffect, useRef } from "react";

import { useLocation } from "react-router-dom";

function KarakanaTest() {
  const effectRan = useRef(false)
  const location = useLocation();
  const katakana = location.state.details;

  const [input, setInput] = useState("");
  const [current, setCurrent] = useState(0);

  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  const [error, setError] = useState(false);
  const [correct, setCorrect] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const setRandomKatakana = () => {
    const randomIndex = Math.floor(Math.random() * katakana.length);
    setCurrent(randomIndex);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisabled(!isDisabled)
    if (input.toLocaleLowerCase() === katakana[current].romanji) {
      setStreak(streak + 1)
      setMaxStreak(Math.max(streak + 1, maxStreak))
      setError(false)
      setIsShown(true)
      setCorrect(`Nice, Keep It Up!`)

      localStorage.setItem('maxStreak', Math.max(streak, maxStreak))
      localStorage.setItem('streak', streak + 1)
    } else {
      setStreak(0)
      setError(`Wrong! The correct answer for ${katakana[current].katakana} is ${katakana[current].romanji}`)
      setCorrect(false)
      setIsShown(true)
      localStorage.setItem('streak', 0)
    }

    // setInput("");
    // setRandomHiragana();
  };

  const nextKatakana = () => {
    setInput('')
    setRandomKatakana()
    setIsDisabled(!isDisabled)
    setIsShown(false)
  }

  const addKatakana = () => {
    // if (location.state.id == 1) {
    //   katakana.push({ romanji: "bb", hieagana: "bb" });
    // }
  }

  useEffect(() => {
    if (effectRan.current === false) {
      // addKatakana()
      setRandomKatakana()
      setStreak(parseInt(localStorage.getItem('streak')) || 0)
      setMaxStreak(parseInt(localStorage.getItem('maxStreak')) || 0)

      return () => {
        effectRan.current = true
      }
    }
  }, []);
  return (
    <>
      <div className="p-5 flex justify-end">
        <Link to={'/katakana'}><AiOutlineClose /></Link>
      </div>
      <div className="text-center min-h-screen flex flex-col justify-center">
        <header className="p-6 mb-8">
          <h1 className="text-4xl font-bold uppercase">Katakana Quiz</h1>
          <div>
            <p>
              {/* Streak {streak} / {maxStreak} */}
              Streak {streak}, Keep It Up!
            </p>
          </div>
        </header>

        <div className="text-9xl font-bold mb-8">
          <p>{katakana[current].katakana}</p>
        </div>

        <div className="mb-8">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              disabled={isDisabled}
              onChange={handleChange}
              value={input}
              className="block w-24 bg-transparent border-b-2 border-b-black dark:border-b-white mx-auto outline-none text-center text-6xl pb-2"
            />
            {!isShown && <button disabled={!input} type="submit" className='pt-10'> Submit </button>}
          </form>
        </div>
        {(error && isShown) && <p className="text-red-500 text-center">{error}</p>}
        {(correct && isShown) && <p className="text-green-500 text-center">{correct}</p>}

        {((error || correct) && isShown) && <button onClick={nextKatakana}>Gimme Next!</button>}
      </div>
    </>
  );
}

export default KarakanaTest;
