// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function Hiragana() {
  const hiraganas = [
    {
      name: "a to o",
      details: [
        { romanji: "a", hiragana: "あ" },
        { romanji: "i", hiragana: "い" },
        { romanji: "u", hiragana: "う" },
        { romanji: "e", hiragana: "え" },
        { romanji: "o", hiragana: "お" },
      ]
    },
    {
      name: "ka to ko",
      details: [
        { romanji: "ka", hiragana: "か" },
        { romanji: "ki", hiragana: "き" },
        { romanji: "ku", hiragana: "く" },
        { romanji: "ke", hiragana: "け" },
        { romanji: "ko", hiragana: "こ" },
      ]
    },
    {
      name: "sa to so",
      details: [
        { romanji: "sa", hiragana: "さ" },
        { romanji: "shi", hiragana: "し" },
        { romanji: "su", hiragana: "す" },
        { romanji: "se", hiragana: "せ" },
        { romanji: "so", hiragana: "そ" },
      ]
    },
    {
      name: "ta to to",
      details: [
        { romanji: "ta", hiragana: "た" },
        { romanji: "chi", hiragana: "ち" },
        { romanji: "tsu", hiragana: "つ" },
        { romanji: "te", hiragana: "て" },
        { romanji: "to", hiragana: "と" },
      ]
    },
    {
      name: "na to no",
      details: [
        { romanji: "na", hiragana: "な" },
        { romanji: "ni", hiragana: "に" },
        { romanji: "nu", hiragana: "ぬ" },
        { romanji: "ne", hiragana: "ね" },
        { romanji: "no", hiragana: "の" },
      ]
    },
    {
      name: "ha to ho",
      details: [
        { romanji: "ha", hiragana: "は" },
        { romanji: "hi", hiragana: "ひ" },
        { romanji: "fu", hiragana: "ふ" },
        { romanji: "he", hiragana: "へ" },
        { romanji: "ho", hiragana: "ほ" },
      ]
    },
    {
      name: "ma to mi",
      details: [
        { romanji: "ma", hiragana: "ま" },
        { romanji: "mi", hiragana: "み" },
        { romanji: "mu", hiragana: "む" },
        { romanji: "me", hiragana: "め" },
        { romanji: "mo", hiragana: "も" },
      ]
    },
    {
      name: "ya to yo",
      details: [
        { romanji: "ya", hiragana: "や" },
        { romanji: "yu", hiragana: "ゆ" },
        { romanji: "yo", hiragana: "よ" },
      ]
    },
    {
      name: "ra to ri",
      details: [
        { romanji: "ra", hiragana: "ら" },
        { romanji: "ri", hiragana: "り" },
        { romanji: "ru", hiragana: "る" },
        { romanji: "re", hiragana: "れ" },
        { romanji: "ro", hiragana: "ろ" },
      ]
    },
    {
      name: "wa to n",
      details: [
        { romanji: "wa", hiragana: "わ" },
        { romanji: "wo", hiragana: "を" },
        { romanji: "n", hiragana: "ん" },
      ]
    },
  ];

  return (
    <>
      <div className="flex justify-center items-start max-h-screen overflow-scroll">
        {/* Hiragana */}
        <div className="flex-1 max-w-5xl p-16">
          {hiraganas.map(hiragana => {
            return (
              <div
                className="grid grid-cols-5 grid-rows-1 gap-4 grid-flow-row-dense mb-5 w-fit"
                key={hiragana.name}
              >
                {hiragana.details.map(character => (
                  <div
                    className="p-5 bg-white dark:bg-slate-700 border-1-8 border-transparent rounded-md shadow-md space-y-2 flex flex-col items-center"
                    key={character.romanji}
                  >
                    <h6 className="text-4xl font-semibold">
                      {character.hiragana}
                    </h6>
                    <p className="text-xs uppercase">{character.romanji}</p>
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div >
    </>
  );
}

export default Hiragana;
