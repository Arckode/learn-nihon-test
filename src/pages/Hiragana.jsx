// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useNavigate } from "react-router-dom";

function Hiragana(props) {
  const hiraganas = [
    {
      id: 1,
      name: "A to O",
      details: [
        { romanji: "a", hiragana: "あ" },
        { romanji: "i", hiragana: "い" },
        { romanji: "u", hiragana: "う" },
        { romanji: "e", hiragana: "え" },
        { romanji: "o", hiragana: "お" },
      ],
    },
    {
      id: 2,
      name: "KA to KO",
      details: [
        { romanji: "ka", hiragana: "か" },
        { romanji: "ki", hiragana: "き" },
        { romanji: "ku", hiragana: "く" },
        { romanji: "ke", hiragana: "け" },
        { romanji: "ko", hiragana: "こ" },
      ],
    },
    {
      id: 3,
      name: "SA to SO",
      details: [
        { romanji: "sa", hiragana: "さ" },
        { romanji: "shi", hiragana: "し" },
        { romanji: "su", hiragana: "す" },
        { romanji: "se", hiragana: "せ" },
        { romanji: "so", hiragana: "そ" },
      ],
    },
    {
      id: 4,
      name: "TA to TO",
      details: [
        { romanji: "ta", hiragana: "た" },
        { romanji: "chi", hiragana: "ち" },
        { romanji: "tsu", hiragana: "つ" },
        { romanji: "te", hiragana: "て" },
        { romanji: "to", hiragana: "と" },
      ],
    },
    {
      id: 5,
      name: "NA to NO",
      details: [
        { romanji: "na", hiragana: "な" },
        { romanji: "ni", hiragana: "に" },
        { romanji: "nu", hiragana: "ぬ" },
        { romanji: "ne", hiragana: "ね" },
        { romanji: "no", hiragana: "の" },
      ],
    },
    {
      id: 6,
      name: "HA to HO",
      details: [
        { romanji: "ha", hiragana: "は" },
        { romanji: "hi", hiragana: "ひ" },
        { romanji: "fu", hiragana: "ふ" },
        { romanji: "he", hiragana: "へ" },
        { romanji: "ho", hiragana: "ほ" },
      ],
    },
    {
      id: 7,
      name: "MA to MI",
      details: [
        { romanji: "ma", hiragana: "ま" },
        { romanji: "mi", hiragana: "み" },
        { romanji: "mu", hiragana: "む" },
        { romanji: "me", hiragana: "め" },
        { romanji: "mo", hiragana: "も" },
      ],
    },
    {
      id: 8,
      name: "YA to YO",
      details: [
        { romanji: "ya", hiragana: "や" },
        { romanji: "yu", hiragana: "ゆ" },
        { romanji: "yo", hiragana: "よ" },
      ],
    },
    {
      id: 9,
      name: "RA to RI",
      details: [
        { romanji: "ra", hiragana: "ら" },
        { romanji: "ri", hiragana: "り" },
        { romanji: "ru", hiragana: "る" },
        { romanji: "re", hiragana: "れ" },
        { romanji: "ro", hiragana: "ろ" },
      ],
    },
    {
      id: 10,
      name: "WA to N",
      details: [
        { romanji: "wa", hiragana: "わ" },
        { romanji: "wo", hiragana: "を" },
        { romanji: "n", hiragana: "ん" },
      ],
    },
  ];

  const navigate = useNavigate();

  const hiraganaTest = (hiragana) => {
    navigate("/hiraganaTest", { state: hiragana });
  };

  return (
    <>
      <div className=" max-h-screen">
        <h6 className="flex justify-center pt-20 pb-14 text-4xl">
          Hiragana Table
        </h6>
        <div className="flex justify-center items-start max-h-[25rem] overflow-scroll">
          {/* Hiragana */}
          <div className="flex-1 max-w-5xl p-16 pt-0">
            {hiraganas.map((hiragana) => {
              return (
                <div className="text-sm pb-5" key={hiragana.id}>
                  <h6>{hiragana.name}</h6>
                  <div className="flex flex-row">
                    <div className="grid grid-cols-5 grid-rows-1 gap-4 grid-flow-row-dense mb-5 w-fit">
                      {hiragana.details.map((character) => (
                        <div
                          className="p-5 bg-white dark:bg-slate-700 border-1-8 border-transparent rounded-md shadow-md space-y-2 flex flex-col items-center"
                          key={character.romanji}
                        >
                          <h6 className="text-3xl font-semibold">
                            {character.hiragana}
                          </h6>
                          <p className="text-xs uppercase">
                            {character.romanji}
                          </p>
                        </div>
                      ))}
                    </div>
                    <a
                      onClick={() => {
                        hiraganaTest(hiragana);
                      }}
                    >
                      aa
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hiragana;
